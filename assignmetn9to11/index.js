function welcomeUser() {
    // Prompt user for the city name
    let city = prompt("Enter the city name:");
    
    // Check if the city is "Karachi"
    if (city === "Karachi") {
        document.getElementById('message').textContent = "Welcome to the city of lights";
    } else {
        document.getElementById('message').textContent = "Welcome to " + city;
    }
}