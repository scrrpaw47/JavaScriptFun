// ----- Test Data 1 -----
var massMark = 78;      // Mark's mass in kg
var heightMark = 1.69;  // Mark's height in meters
var massJohn = 92;      // John's mass in kg
var heightJohn = 1.95;  // John's height in meters

// Calculate BMIs using the formula: BMI = mass / (height * height)
var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);

// Log the BMIs to the console
console.log("Mark's BMI:", BMIMark);
console.log("John's BMI:", BMIJohn);

// BONUS: Create a boolean variable for whether Mark has a higher BMI than John
var markHigherBMI = BMIMark > BMIJohn;
console.log("Does Mark have a higher BMI than John?", markHigherBMI);

// ----- Test Data 2 -----
// You can uncomment the following block to test with the second set of data:

/*
massMark = 95;
heightMark = 1.88;
massJohn = 85;
heightJohn = 1.76;

BMIMark = massMark / (heightMark * heightMark);
BMIJohn = massJohn / (heightJohn * heightJohn);

console.log("Mark's BMI:", BMIMark);
console.log("John's BMI:", BMIJohn);

markHigherBMI = BMIMark > BMIJohn;
console.log("Does Mark have a higher BMI than John?", markHigherBMI);
*/
