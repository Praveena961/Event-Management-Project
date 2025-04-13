document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("registrationForm");
    const downloadButton = document.getElementById("downloadButton");

    let registrations = []; 
   const selectedEvent = localStorage.getItem('selectedEvent');
    if (selectedEvent) {
        document.getElementById('event').value = selectedEvent;
    }
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const eventName = document.getElementById('event').value;

        registrations.push({ name, email, eventName });

        alert("Registration successful!");
        form.reset(); 
    });
    downloadButton.addEventListener("click", function() {
        if (registrations.length === 0) {
            alert("No registrations to download!");
            return;
        }

        let csvContent = "Name,Email,Event Name\n";
        registrations.forEach(entry => {
            csvContent += `${entry.name},${entry.email},${entry.eventName}\n`;
        });
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
        const url = URL.createObjectURL(blob);
        link.setAttribute("href", url);
        link.setAttribute("download", "registered_events.csv");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});








