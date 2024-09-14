function greetUser() {
    // Prompt user for gender
    let gender = prompt("Enter your gender (male/female):").toLowerCase();
    
    if (gender === "male") {
        document.getElementById('message').textContent = "Good Morning Sir";
    } else if (gender === "female") {
        document.getElementById('message').textContent = "Good Morning Ma’am";
    } else {
        document.getElementById('message').textContent = "Invalid input. Please enter 'male' or 'female'.";
    }
}