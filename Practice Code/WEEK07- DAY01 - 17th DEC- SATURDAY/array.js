// ARRAY METHODS/FUNCTIONS


// 1. push()
let names1 = ["vaibhav", "sai", "prashant", 24, 69, "sujit", "vinayak"];
names1.push("aniket");
console.log(names1);

// 2. pop()
let names2 = ["vaibhav", "sai", "prashant", 24, 69, "sujit", "vinayak"];
names2.pop("aniket");
console.log(names2);



// 6. slice
let city1 = ["pune", "mumbai", "aurangabad", "kolhapur", "nashik"];
console.log(city1.slice(1, 4));

// 7. splice
let city2 = ["pune", "mumbai", "aurangabad", "kolhapur", "nashik"];
city2.splice(2, 1, "delhi");
console.log(city2);