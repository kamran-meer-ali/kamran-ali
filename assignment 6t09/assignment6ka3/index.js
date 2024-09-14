function greetUser() {
    let name = prompt("Please enter your name:");

    if (name && name.trim() !== "") {
        document.getElementById("greeting").innerHTML = "Hello, " + name + "! Nice to meet you.";
    } else {
        document.getElementById("greeting").innerHTML = "You didn't enter a name. Please try again.";
    }
}
