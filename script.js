// Question 1

/* Write a JavaScript function that takes a number input from the prompt and tells if the function is even or odd in the alert. */
function checkEvenOrOdd() {

    var userInput = prompt("Enter a number:");

    var number = parseFloat(userInput);

    if (isNaN(number)) {
        alert("Invalid input. Please enter a valid number.");
    } else {

        if (number % 2 === 0) {
            alert(number + " is an even number.");
        } else {
            alert(number + " is an odd number.");
        }
    }
}
checkEvenOrOdd();


// Question 2

/* Write a JavaScript program in which you are required to write:
a) A function takeUserInput that takes input from prompt and return it’s value
b) A function calculatePercentage that takes parameter (named totalObtainedMarks), calculate percentage and return it’s value
c) A function calculateGrade that takes parameter (named percentage), calculate grade on the basis of percentage and return it’s value
d) A function calculateResult that will call the other functions in sequence
   i) takeUserInput and save its value
  ii) Pass the returned value from takeUserInput to calculatePercentage
 iii) Pass the returned value from calculatePercentage to calculateGrade
  iv) Return the value returned from calculateGrade
e) Finally call the calculateResult function get its return value and show in alert */

// a) Function to take input from the user
function takeUserInput() {
    var userInput = prompt("Enter total obtained marks 1 to 100:");
    return parseFloat(userInput); // Parse the input as a floating-point number
}

// b) Function to calculate percentage
function calculatePercentage(totalObtainedMarks) {
    var totalMarks = 100;
    var percentage = (totalObtainedMarks / totalMarks) * 100;
    return percentage;
}

// c) Function to calculate grade based on percentage
function calculateGrade(percentage) {
    if (percentage >= 90) {
        return "A+";
    } else if (percentage >= 80) {
        return "A";
    } else if (percentage >= 70) {
        return "B";
    } else if (percentage >= 60) {
        return "C";
    } else if (percentage >= 50) {
        return "C";
    } else {
        return "F";
    }
}

// d) Function to call other functions in sequence
function calculateResult() {
    // i) takeUserInput and save its value
    var obtainedMarks = takeUserInput();

    // ii) Pass the returned value from takeUserInput to calculatePercentage
    var percentage = calculatePercentage(obtainedMarks);

    // iii) Pass the returned value from calculatePercentage to calculateGrade
    var grade = calculateGrade(percentage);

    // iv) Return the value returned from calculateGrade
    return grade;
}

// e) Finally, call the calculateResult function, get its return value, and show in alert
var result = calculateResult();
alert("Your grade is: " + result);