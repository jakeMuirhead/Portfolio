//alert('Javascript Successfully Linked :)');

// Function to calculate time since a given date
function updateTimeSince(startDate) {
    const start = new Date(startDate); // Convert startDate to Date object

    function update() {
        const now = new Date(); // Get current date and time
        const diff = now - start; // Difference in milliseconds

        // Convert time difference into readable format
        const seconds = Math.floor(diff / 1000) % 60;
        const minutes = Math.floor(diff / (1000 * 60)) % 60;
        const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
        const days = Math.floor(diff / (1000 * 60 * 60 * 24)) % 7;
        const weeks = Math.floor(diff / (1000 * 60 * 60 * 24 * 7)) % 4;
        const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30.44)) % 12;
        const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));

        // Format the output
        const formattedTime = `${years} years, ${months} months, ${weeks} weeks, ${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;

        // Insert into the HTML
        document.getElementById("skatingTime").innerText = formattedTime;
    }

    // Run immediately, then every second
    update(); 
    setInterval(update, 1000);
}

// Call function with your start date (YYYY, MM-1, DD) - Month is 0-indexed in JavaScript
updateTimeSince("2013-7-28"); // Example date: June 15, 2017
