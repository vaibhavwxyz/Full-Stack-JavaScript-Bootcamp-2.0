// Question 18. Write a program which tells the number of days in a month, now consider leap year.


let month = prompt("Enter the month:");
let year = prompt("Enter the year:");

if (month.toLowerCase() === "february") {
    // if month is february
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
        console.log("february " + year + " has 29 days.");
    } else {
        console.log("february " + year + " has 28 days.");
    }
} 
// other month's
else if (["january", "march", "may", "july", "august", "october", "december"].includes(month.toLowerCase())) {
    console.log(month.toLowerCase() + " has 31 days.");
} 
else if (["april", "june", "september", "november"].includes(month.toLowerCase())) {
    console.log(month.toLowerCase() + " has 30 days.");
} 
else {
    console.log("Invalid month entered.");
}
