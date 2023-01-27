/* Question 01. Create a variable.js file and declare variables and assign string, boolean, undefined and null data types, 
Display all the value with their data type. */

// NOTE: We can declare variable using the keywords let, var and const.


// Undefined
let value = undefined;
console.log(value, `Type of this variable is ${typeof value}`); // undefined

// Null
let digit = null;
console.log(digit, `Type of this variable is ${typeof digit}`); // null

// String
let fName = "Vaibhav";
console.log(fName, `Type of this variable is ${typeof fName}`); // string

// Boolean
let x = true;
let y = false;

console.log(x, `Type of this variable is ${typeof x}`); // true
console.log(y, `Type of this variable is ${typeof y}`); // false