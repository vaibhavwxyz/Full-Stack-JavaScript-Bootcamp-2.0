/* Question 07. Declare an array containing the multiple values and use lastIndexOf to determine 
the position of the first and last occurrence of a word "pw skills". */

/* NOTE: The `lastIndexOf()` method in JavaScript is used to search for the last occurrence of a 
specified value in a string, and returns the index of the match. If the value is not found, it returns -1. 
It takes one mandatory parameter, which is the value to search for, and an optional second parameter, 
which is the index at which to start the search. */

let arr = ["ineuron", "crio", "pw skills", "lco", "udemy", "lco", "crio", "pw skills", "pw skills", "crio"];

// Find the first occurrence of "pw skills"
let fIndex = arr.indexOf("pw skills");
console.log("first occurrence of word 'pw skills' at index: ", fIndex); // 2

// Find the last occurrence of "pw skills"
let lIndex = arr.lastIndexOf("pw skills");
console.log("last occurrence of word 'pw skills' at index: ", lIndex); // 8