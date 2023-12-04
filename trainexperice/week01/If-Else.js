// If-Else syntax
// if (condition) {
//     Do when condition is true
// } else {
//     Do when condition is false
// }

// Example 1 Using in Math
// We want to check if the calculation ( x + y ) is equals 15

// const x = 10
// const y = 5
// const answer = x + y

// if (answer === 15) {
//     console.log("statement is true")
// } else {
//     console.log("statement is false")
// }

// Example 2 Using in String
// We want to check if the given username is equals "Jackson"

// const username = "Mcqueen"

// if (username === "Jackson") {
//     console.log("Hi! Jackson.")
// } else {
//     console.log("You are not Jackson.")
// }

// If-Else + Else-If
// if (condition1) {
//     Do when condition1 is true
// } else if (condition2) {    // Do this when condition1 is false
//     Do when condition2 is true
// } else {
//     Do when *all* conditions is false
// }

// Example 3 Using Else if
// We want to check if given student_name is either "Micheal" or "Jackson"

// const student_name = "Micheal"

// if (student_name === "Micheal") {
//     console.log("Hi! Micheal. How are you doing?")
// } else if (student_name === "Jackson") {
//     console.log("Hi! Jackson. Hope you have a good day!")
// } else {
//     console.log("Who are you!?")
// }

// Quiz 1
// You are working at Pizza shop
// Your manager assign you to make a program that can recognize order's topping
// The shop's topping are 'Pepperoni', 'Sausage', and 'Mushroom'
// If the customer order non-exist topping, let it be 'Cheese'
// Note : Only 1 or non topping per pizza.
// Note : Output should be "Pepperoni Pizza", "Sausage Pizza", "Mushroom Pizza", "Cheese Pizza"

// -------------------  Write your Program here! --------------------------
const topping = 'Olive';
if (topping === 'Pepperoni') {
  console.log('Pepperoni Pizza');
} else if (topping === 'Sausage') {
  console.log('Sausage Pizza');
} else if (topping === 'Mushroom') {
  console.log('Mushroom Pizza');
} else {
  console.log('Chesse Pizza');
}

// ------------------------------------------------------------------------
// Guide 1 : There are 3 conditions.
// Tips 1 : Use Crtl+/ to comment/uncomment the lines

// Quiz 2
// The freelance hired you to help on his program.
// He can do many kind of things, except if-else...
// What his program do is...
// - Check if variable "Baverage" is 'Water' or 'Soda'.
// - If Baverage value equals 'Water', the program will print 'Healthy option'
// - If Baverage value equals 'Soda', the program will print 'Not healthy option, but tasty'
// - Or else. It will print 'Unknown input'

let choiceA = 'Water';
let choiceB = 'Soda';
let choiceC = 'Smootie';
let choiceD = 'Soda';

function whatIsBaverage(Baverage) {
  //   -------------------  Write your Program here! --------------------------
  if (Baverage === 'Water') {
    return console.log('Healthy option');
  } else if (Baverage === 'Soda') {
    return console.log('Not healthy option, but tasty');
  } else {
    return 'Unknown input';
  }
  //   ------------------------------------------------------------------------
}

console.log(whatIsBaverage(choiceA));
console.log(whatIsBaverage(choiceB));
console.log(whatIsBaverage(choiceC));
console.log(whatIsBaverage(choiceD));

// Guide 1 : There are 2 conditions
//reteun is reutrn value to function who called it
function myFunction() {
  return 'Hello World !';
}

console.log(myFunction()); // return "Hello World !"
