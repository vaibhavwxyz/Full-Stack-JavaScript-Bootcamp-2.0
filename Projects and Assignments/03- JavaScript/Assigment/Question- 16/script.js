/* Question 16.
Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
    - September, October or November, the season is Autumn.
    - December, January or February, the season is Winter.
    - March, April or May, the season is Spring
    - June, July or August, the season is Summer
*/

let month = prompt("Enter the month:");

if (["september", "october", "november"].includes(month.toLowerCase())) {
    console.log("The season is Autumn.");
} else if (["december", "january", "february"].includes(month.toLowerCase())) {
    console.log("The season is Winter.");
} else if (["march", "april", "aay"].includes(month.toLowerCase())) {
    console.log("The season is Spring.");
} else if (["june", "july", "august"].includes(month.toLowerCase())) {
    console.log("The season is Summer.");
} else {
    console.log("Invalid month entered.");
}
