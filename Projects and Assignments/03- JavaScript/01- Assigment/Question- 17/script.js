// Question 17. Write a program which tells the number of days in a month.


let month = prompt("Enter the month:");

if (month === "February") {
    // if month is february
    let year = prompt("Enter the year:");
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
        console.log("February " + year + " has 29 days.");
    } 
    else {
        console.log("February " + year + " has 28 days.");
    }
} 
// other month's
else if (["January", "March", "May", "July", "August", "October", "December"].includes(month)) {
    console.log(month + " has 31 days.");
} 
else if (["April", "June", "September", "November"].includes(month)) {
    console.log(month + " has 30 days.");
} 
else {
    console.log("Invalid month entered.");
}
