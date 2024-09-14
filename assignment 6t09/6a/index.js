function storeSubjectsAndMarks() {
    // Get subject names from user input
    let subject1 = document.getElementById("subject1").value;
    let subject2 = document.getElementById("subject2").value;
    let subject3 = document.getElementById("subject3").value;

    // Store total marks for each subject
    let totalMarks = 100;

    // Get the obtained marks for the first subject from user input
    let obtainedMarks1 = document.getElementById("obtainedMarks1").value;

    // Display the subjects, total marks, and obtained marks for the first subject
    document.getElementById("result").innerHTML = 
        "Subject 1: " + subject1 + " - Total Marks: " + totalMarks + " - Obtained Marks: " + obtainedMarks1 + "<br>" +
        "Subject 2: " + subject2 + " - Total Marks: " + totalMarks + "<br>" +
        "Subject 3: " + subject3 + " - Total Marks: " + totalMarks;
}
// ------Obtained Marks From User--------
let marks = [];

// Function to prompt the user for marks and store them in the array
function getMarks() {
    for (let i = 0; i < 2; i++) {
        // Prompt the user for marks
        let mark = parseFloat(prompt(`Enter the marks for subject ${i + 1}:`));
        
        // Check if the input is a number
        if (!isNaN(mark) && mark >= 0) {
            marks.push(mark);
        } else {
            console.log("Invalid input. Please enter a valid number.");
            i--; // Repeat the iteration for invalid input
        }
    }
}

// Call the function to get the marks
getMarks();

