function showSignalMessage() {
    // Prompt user for the traffic signal color
    let color = prompt("Enter the color of the traffic signal (Red, Yellow, Green):").toLowerCase();
    
    // Determine the message based on the color
    let message;
    switch (color) {
        case 'red':
            message = "Must Stop";
            break;
        case 'yellow':
            message = "Ready to move";
            break;
        case 'green':
            message = "Move now";
            break;
        default:
            message = "Invalid color. Please enter 'Red', 'Yellow', or 'Green'.";
    }

    // Display the message
    document.getElementById('message').textContent = message;
}