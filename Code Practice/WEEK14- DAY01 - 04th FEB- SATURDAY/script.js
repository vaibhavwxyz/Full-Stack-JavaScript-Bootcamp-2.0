"use strict";

// aFun();
// console.log(a);
// let a = 10;
// console.log(a);

// function aFun() {
//   var b = 100;
//   bFun();
//   function bFun() {
//     console.log(a);
//   }
// }

// console.log(a); // gives the error message
// let a = 10;

// aFun();
// function aFun() {
//   let aa = 100;
//   console.log(aa);
//   console.log(a);
// }

// let myString = "Hello";
// myString.someProperty = "World";
// console.log(myString.someProperty); // Output: World

// Ternary operator
// let a = 10;
// let b = 20;
// let c = a > b ? a : b;
// console.log(c); // Output: 20

// var hello = "hi";
// hello == "hey" ? console.log("fsjs") : console.log("vaibhav");

// let names = ["vaibhav", "shinde"];

// let names2 = new Array("hellow");

// console.log(names);
// console.log(names2);

// console.log(names.length);

// let arr = ["10", "20", "30", "40"];
// console.log(arr);
// arr = "vaibhav";
// console.log(arr);

// const arr2 = ["100", "200", "300", "400"];
// console.log(arr2);
// arr2 = "vaibhav";
// console.log(arr2);

// let digit = 10;
// const value = 100;
// digit = 20;
// value = 200;
// console.log(digit);
// console.log(value);

let obj = {
  apple: 99,
  banana: 100,
  cherry: 200,
};
let arr = ["100", "200", "300", "400"];

// console.log(obj);
// console.log(arr);

for (let i in obj) {
  console.log(i);
}

for (let i of arr) {
  console.log(i);
}
