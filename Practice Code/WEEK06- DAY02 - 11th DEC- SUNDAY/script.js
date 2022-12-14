// Conditions

// 1. if else
let season = 'winter';

if (season == 'summer') {
    console.log("its summmer season");
} else if (season == 'rainy') {
    console.log("its rainy season");
} else {
    console.log("it's winter season");
}

// 2. switch case
let user = 'Admin';

switch (user) {
    case 'Admin':
        console.log("Redirect him/her to the Admin page");
        break;
    case 'Mentor':
        console.log("Redirect him/her to Mentor dashboard");
        break;
    default:
        console.log("I am simple user");
}

// 3. ternary operator or ternary condition
let userLogin = true;

userLogin ? console.log('logout') : console.log('login'); //condition ? true : false;


// Array
let name = ['vaibhav', 'sai', 'prashant', 'sujit', 'vinayak'];

console.log(name);
console.log(name[2]);


// Object
let bankAccount = {
    firstName: 'vaibhav',
    lastName: 'shinde',
    accType: 'saving',
    mobileNo: 9595102030,
    balance: 10000,
};

console.log(bankAccount);
console.log(bankAccount.accType);


// Date
const now = new Date();
console.log(now.toString());
console.log(now.getTime());
console.log(now.getFullYear());
console.log(now.getDay()); // sunday = 0, monday = 1, tuesday = 2... so on
console.log(now.getMonth());
console.log(now.getSeconds());


// Math
const PI = Math;
console.log(PI); // object of math class

console.log(Math.round(PI));
console.log(Math.round(8.9));
console.log(Math.floor(9.7));
console.log(Math.ceil(9.6));


// min and max
console.log(Math.min(10, 1, 2, 3, 5));
console.log(Math.max(10, 1, 2, 3, 5));

console.log(Math.round(Math.random() * 51)); // Math.random() will generate random number between 0 to 0.999999999 (0-1)
console.log(Math.pow(3, 3));
console.log(Math.log(2));
console.log(Math.sin(90));


// Loops

// 1. do while
let i = 11;
do {
    console.log('value of i is: ', i);
    i++;
} while(i <= 10);

// 2. while
let j = 0;
while(j <= 10){
    console.log('value of j is: ', j);
    j++;
}

// 3. for
for(let k=0; k<=30; k++) {
    console.log('value of k is: ', k);
}
