// 1st
let studentNames = [];
// 2nd
let studentName = new Array();
// 3rd
let cars=["Auto","Corolla","Toyota"]
// 4th
let numbers = [1, 2, 3, 4, 5];
// 5th
let booleanValues = [true, false, true];
// 6th
let mixedArray = [1, "Hello", true, undefined, { name: "Auto" }];
//7th
let educQual=["SSC","HSC","BSC","BCOM","MS","M.PHIL","PhD"]
console.log("Qualification:",educQual)
// 8th
const students=[
    { name: 'Michael', score: 320},
    { name: 'John', score: 230},
    { name: 'Tony', score: 480},
]
const totalMarks= 500;
function calculatePercentage(score,totalMarks){
    return (score/ totalMarks) *100;
}
students.forEach(student => {
        const percentage = calculatePercentage(student.score, totalMarks);
        console.log(`Score of: ${student.name}`,`is ${student.score}.`,`Percentage ${percentage.toFixed(2)}%`);
    });
// 9th
const colors = ['Red', 'Green', 'Blue', 'Yellow', 'Purple', 'Orange'];
colors.forEach(color => {
    console.log(color);
});
// a
const newColor = prompt('Enter a color to add to the beginning of the list:');

if (newColor) {
    colors.unshift(newColor);

    console.log('Updated color list:');
    colors.forEach(color => {
        console.log(color);
    });
} else {
    console.log('No color was entered.');
}
// 
// Initialize the color array

// Function to display the array in the console
function displayArray(arr) {
    console.log('Updated color list:');
    arr.forEach((color, index) => {
        console.log(`${index}: ${color}`);
    });
}

// b
let newColors = prompt('Enter a color to add to the end of the list:');
if (newColor) {
    colors.push(newColors);
    displayArray(colors);
}

// c
colors.unshift('Pink', 'Cyan');
displayArray(colors);

// d
colors.shift();
displayArray(colors);

// e
colors.pop();
displayArray(colors);

// f
let indexToAdd = parseInt(prompt('Enter the index at which you want to add a color:'));
let colorToAdd = prompt('Enter the color you desired:');
if (!isNaN(indexToAdd) && colorToAdd) {
    colors.splice(indexToAdd, 0, colorToAdd);
    displayArray(colors);
}

// g
let indexToDelete = parseInt(prompt('Enter the index at which you want to delete colors:'));
let numberOfColorsToDelete = parseInt(prompt('Enter the number of colors you want to delete:'));
if (!isNaN(indexToDelete) && !isNaN(numberOfColorsToDelete)) {
    colors.splice(indexToDelete, numberOfColorsToDelete);
    displayArray(colors);
}
// 10th
let scores = [85, 92, 78, 90, 88, 76];
console.log(scores)
let s_score = scores.sort();

console.log(`Score of Student: `,s_score);
// 11th
var arr = ["This", "is", "my", "cat"];
var result = arr.join(' ');
console.log("Array:", arr.join(','));
console.log("String:", result);
// 12th
var devices = ["keyboard", "mouse", "printer", "monitor"];

console.log("Devices:", devices.join(','));

while (devices.length > 0) {
    console.log("Out:", devices.shift());
}
// 13th
var devices = [];

devices.push("keyboard");
devices.push("mouse");
devices.push("printer");
devices.push("monitor");

console.log("Devices:", devices.join(','));

while (devices.length > 0) {
    console.log("Out:", devices.pop());
}
// 15th
var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.write('<select>');

for (var i = 0; i < manufacturers.length; i++) {
    document.write('<option value="' + manufacturers[i] + '">' + manufacturers[i] + '</option>');
}

document.write('</select>');




