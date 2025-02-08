// ----- Test Data 1 -----
const massMark = 78;      // Mark's mass in kg
const heightMark = 1.69;  // Mark's height in meters
const massJohn = 92;      // John's mass in kg
const heightJohn = 1.95;  // John's height in meters

// Calculate BMIs using the formula: BMI = mass / (height * height)
const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);

// Log the BMIs to the console
console.log("Mark's BMI:", BMIMark);
console.log("John's BMI:", BMIJohn);

// BONUS: Create a boolean variable for whether Mark has a higher BMI than John
const markHigherBMI = BMIMark > BMIJohn;
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
