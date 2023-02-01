/* Question 14.
Even numbers are divisible by 2 and the remainder is zero. How do you check, 
if a number is even or not using JavaScript? Create a program which checks that the given number is even or odd.
*/

function isEven(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

let digit = 18;

if (isEven(digit)) {
    console.log(digit, "is even number");
} else {
    console.log(digit, "is odd number");
}


// Another way
function isEven(num) {
    return !(num & 1); // OR return (num & 1) === 0;
}

let number = 7;
if (isEven(number)) {
    console.log(number + " is even number");
} else {
    console.log(number + " is odd number");
}
