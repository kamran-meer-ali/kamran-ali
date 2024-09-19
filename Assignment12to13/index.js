let char = prompt("Enter a character:");

if (char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57) {
    console.log(`${char} is a number.`);
} else if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
    console.log(`${char} is an uppercase letter.`);
} else if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) {
    console.log(`${char} is a lowercase letter.`);
} else {
    console.log(`${char} is not a number or a letter.`);
}
// ------2nd--------
let num1 = parseInt(prompt("Enter the first integer:"));
let num2 = parseInt(prompt("Enter the second integer:"));

if (num1 > num2) {
    console.log(`${num1} is larger than ${num2}.`);
} else if (num2 > num1) {
    console.log(`${num2} is larger than ${num1}.`);
} else {
    console.log(`${num1} and ${num2} are equal.`);
}
// 3rd-------------
let number = parseFloat(prompt("Enter a number:"));

if (number > 0) {
    console.log(`${number} is a positive number.`);
} else if (number < 0) {
    console.log(`${number} is a negative number.`);
} else {
    console.log(`The number is zero.`);
}
// 4th-----------
let chara = prompt("Enter a single character:").toLowerCase();

if (chara.length === 1 && (chara === 'a' || chara === 'e' || chara === 'i' || chara === 'o' || char === 'u')) {
    console.log(true);
} else {
    console.log(false);
}
// 5h----------------
// a
let correctPassword = "KamranAli";

// b
let userPassword = prompt("Enter your password:");

// c
if (userPassword === "") {
    console.log("Please enter your password.");
} else if (userPassword === correctPassword) {
    console.log("Correct! The password you entered matches the original password.");
} else {
    console.log("Incorrect password.");
}
// 6th
var greeting;
var hour = 13;

if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

console.log(greeting); 
// 7th
let time = parseInt(prompt("Enter the time in 24-hour format (e.g., 1900 for 7 PM):"));

if (time >= 0 && time <= 2359) {
    let hours = Math.floor(time / 100);
    let minutes = time % 100;
    let period = "";

    if (minutes < 0 || minutes > 59) {
        console.log("Invalid minutes. Please enter time in the correct format.");
    } else {
        if (hours === 0) {
            hours = 12;
            period = "AM"; 
        } else if (hours < 12) {
            period = "AM"; 
        } else if (hours === 12) {
            period = "PM";  
        } else {
            hours = hours - 12;
            period = "PM";  
        }

        console.log(`The time is ${hours}:${minutes < 10 ? '0' + minutes : minutes} ${period}`);
    }
} else {
    console.log("Invalid time. Please enter a time between 0000 and 2359.");
}

