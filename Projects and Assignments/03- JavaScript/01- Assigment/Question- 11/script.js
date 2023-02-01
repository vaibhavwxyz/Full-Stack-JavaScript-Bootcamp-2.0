/* Question 11.
Use the Date object to do the following activities
    - What is the year today?
    - What is the month today as a number?
    - What is the date today?
    - What is the day today as a number?
    - What is the hours now?
    - What is the minutes now?
    - Find out the numbers of seconds elapsed from January 1, 1970 to now.
*/

/* NOTE: the Date object is used to work with dates and times. It can be used to get the current date and time, 
to perform operations on dates (such as setting the date, adding or subtracting time, etc.), and to format dates for display.
The Date object can be created by calling the Date() constructor with no arguments, which returns the current date and time,
or by passing a date string or a set of date and time values as arguments to the constructor. Once a Date object is created,
its properties and methods can be used to manipulate and format the date and time. */


let now = new Date();

// What is the year today?
console.log(now.getFullYear());

// What is the month today as a number?
console.log(now.getMonth());

// What is the date today?
console.log(now.getDate());

// What is the day today as a number?
console.log(now.getDay());

// What is the hours now?
console.log(now.getHours());

// What is the minutes now?
console.log(now.getMinutes());

// Find out the numbers of seconds elapsed from January 1, 1970 to now.
console.log(now.getTime() / 1000);
