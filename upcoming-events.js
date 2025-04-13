document.addEventListener("DOMContentLoaded", function() {
    const events = [
        {
            name: "UX/UI Design Meetup",
            description: "Join us for a UX/UI design meetup where we discuss design trends, tools, and techniques.",
            date: "April 25, 2025",
            location: "Design Studio, NYC"
        },
        {
            name: "Digital Marketing Webinar",
            description: "Attend our free webinar on the latest trends in digital marketing and online advertising.",
            date: "May 10, 2025",
            location: "Online"
        },
        {
            name: "Startup Pitch Event",
            description: "Come and watch innovative startup ideas being pitched by entrepreneurs.",
            date: "June 5, 2025",
            location: "Silicon Valley, CA"
        }
    ];
    const upcomingEventsContainer = document.getElementById("upcoming-events");
    function displayUpcomingEvents() {
        events.forEach(event => {
            const eventDiv = document.createElement("div");
            eventDiv.classList.add("event");

            eventDiv.innerHTML = `
                <h3>${event.name}</h3>
                <p>${event.description}</p>
                <p><strong>Date:</strong> ${event.date}</p>
                <p><strong>Location:</strong> ${event.location}</p>
                <button onclick="registerEvent('${event.name}')">Register Now</button>
            `;
             upcomingEventsContainer.appendChild(eventDiv);
        });
    }
    displayUpcomingEvents(); 
    window.registerEvent = function(eventName) {
        localStorage.setItem('selectedEvent', eventName); 
        window.location.href = "registered-events.html"; 
    };
});
