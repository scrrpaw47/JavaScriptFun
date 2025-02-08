// ----- Test Data -----
// You can use Test Data 1 or change the values for Test Data 2.
const massMark = 78;      // Mark's mass in kg
const heightMark = 1.69;  // Mark's height in meters
const massJohn = 92;      // John's mass in kg
const heightJohn = 1.95;  // John's height in meters

// Calculate BMIs using the formula: BMI = mass / (height * height)
const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);

// Compare BMIs and log a message with template literals
if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark.toFixed(1)}) is higher than John's (${BMIJohn.toFixed(1)})!`);
} else if (BMIJohn > BMIMark) {
  console.log(`John's BMI (${BMIJohn.toFixed(1)}) is higher than Mark's (${BMIMark.toFixed(1)})!`);
} else {
  console.log(`Mark and John have the same BMI (${BMIMark.toFixed(1)})!`);
}


/*
	1.	Variable Declaration:
 
	•	We use const for variables whose values do not change (e.g., massMark, heightMark, etc.).
	•	The calculated BMI values are also declared with const because they are computed once and never reassigned.
 
	2.	BMI Calculation:
 
The formula BMI = mass / (height * height) is used to calculate each BMI.

	3.	Comparison and Output:
 
An if/else statement compares BMIMark and BMIJohn and logs a template literal message with the BMI values (formatted to one decimal place using .toFixed(1)).

This solution meets the requirements of Coding Challenge #2 without using the var keyword.

*/
