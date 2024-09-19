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
// -------5-------
let cases = [
    function() {
      let a = 4;
      if (++a === 5) {
        alert("Case A: given condition for variable a is true");
      }
    },
    
    function() {
      let b = 82;
      if (b++ === 83) {
        alert("Case B: given condition for variable b is true");
      }
    },

    function() {
      let c = 12;
      if (c++ === 13) {
        alert("Case C1: condition 1 is true");
      }
      if (c === 13) {
        alert("Case C2: condition 2 is true");
      }
      if (++c < 14) {
        alert("Case C3: condition 3 is true");
      }
      if (c === 14) {
        alert("Case C4: condition 4 is true");
      }
    },

    function() {
      let materialCost = 20000;
      let laborCost = 2000;
      let totalCost = materialCost + laborCost;
      if (totalCost === laborCost + materialCost) {
        alert("Case D: The cost equals");
      }
    },
    function() {
      if (true) {
        alert("Case E1: True");
      }
      if (false) {
        alert("Case E2: False");
      }
    },
    function() {
      if ("car" < "cat") {
        alert("Case F: car is smaller than cat");
      }
    }
  ];

  for (let i = 0; i < cases.length; i++) {
    let runCase = prompt(`Run case ${String.fromCharCode(65 + i)}? (yes/no)`, "yes");
    if (runCase.toLowerCase() === "yes") {
      cases[i](); 
    }
  }

//-----------Marks Percentage-------------
function calculateGrade() {
    let totalMarks = prompt("Enter total marks for all subjects:", 300);
    totalMarks = parseFloat(totalMarks);

    let marksObtained = 0;

    for (let i = 1; i <= 3; i++) {
      let marks = prompt("Enter marks obtained in subject " + i + ":", 0);
      marksObtained += parseFloat(marks);
    }

    let percentage = (marksObtained / totalMarks) * 100;
    let grade = "";
    let remarks = "";

    if (percentage >= 80) {
      grade = "A-one";
      remarks = "Excellent";
    } else if (percentage >= 70) {
      grade = "A";
      remarks = "Good";
    } else if (percentage >= 60) {
      grade = "B";
      remarks = "You need to improve";
    } else {
      grade = "Fail";
      remarks = "Sorry";
    }

    // Display results
    document.write("<h3>Results:</h3>");
    document.write("Total Marks: " + totalMarks + "<br>");
    document.write("Marks Obtained: " + marksObtained + "<br>");
    document.write("Percentage: " + percentage.toFixed(2) + "%<br>");
    document.write("Grade: " + grade + "<br>");
    document.write("Remarks: " + remarks + "<br>");
  }
  calculateGrade();

  // ------7th Guess game:-------
  let secretNumber = 7; 

  let userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));
  
  if (userGuess === secretNumber) {
    alert("Bingo! Correct answer");
  } else if (userGuess + 1 === secretNumber) {
    alert("Close enough to the correct answer");
  } else {
    alert("Try again!");
  }
  // ------8th--------
  let number = parseInt(prompt("Enter a number:"));

if (number % 3 === 0) {
  alert("The number is divisible by 3.");
} else {
  alert("The number is not divisible by 3.");
}
// -----9th-------
let number2 = parseInt(prompt("Enter a number:"));

// Check even or odd
if (number2 % 2 === 0) {
  alert("The number2 is even.");
} else {
  alert("The number2 is odd.");
}
// ------10th-------
let temperature = parseFloat(prompt("Enter the temperature:"));

// Check the temperature
if (temperature > 40) {
  alert("It is too hot outside.");
} else if (temperature > 30) {
  alert("The Weather today is Normal.");
} else if (temperature > 20) {
  alert("Today’s Weather is cool.");
} else if (temperature > 10) {
  alert("OMG! Today’s weather is so Cool.");
} else {
  alert("It’s quite chilly outside.");
}
// -------11th--------

let firstNumber = parseFloat(prompt("Enter the first number:"));

let secondNumber = parseFloat(prompt("Enter the second number:"));

let operation = prompt("Enter the operation (+, -, *, /, %):");

let result;

if (operation === "+") {
  result = firstNumber + secondNumber;
} else if (operation === "-") {
  result = firstNumber - secondNumber;
} else if (operation === "*") {
  result = firstNumber * secondNumber;
} else if (operation === "/") {

  if (secondNumber === 0) {
    result = "Error: Division by zero is not allowed.";
  } else {
    result = firstNumber / secondNumber;
  }
} else if (operation === "%") {
  result = firstNumber % secondNumber;
} else {
  result = "Error: Invalid operation.";
}

alert("The result is: " + result);

  