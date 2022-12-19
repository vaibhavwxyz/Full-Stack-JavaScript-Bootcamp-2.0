// ARRAY METHODS/FUNCTIONS


// 1. push()
let names1 = ["vaibhav", "sai", "prashant", 24, 69, "sujit", "vinayak"];
names1.push("aniket");
console.log(names1);

// 2. pop()
let names2 = ["vaibhav", "sai", "prashant", 24, 69, "sujit", "vinayak"];
names2.pop("aniket");
console.log(names2);

// 3. shift()
let names3 = ["vaibhav", "sai", "prashant", 24, 69, "sujit", "vinayak"];
let firstElement = names3.shift();
console.log(names3);
console.log(firstElement);

// 4. unshift()
let names4 = ["vaibhav", "sai", "prashant", 24, 69, "sujit", "vinayak"];
names4.unshift("aniket");
console.log(names4);

// 5. concat()
let fNames = ["vaibhav", "sai", "prashant"];
let lNames = ["shinde", "maddilwar", "ambhore"];
console.log(fNames.concat(lNames));

// 6. slice
let city1 = ["pune", "mumbai", "aurangabad", "kolhapur", "nashik"];
console.log(city1.slice(1, 4));

// 7. splice
let city2 = ["pune", "mumbai", "aurangabad", "kolhapur", "nashik"];
city2.splice(2, 1, "delhi");
console.log(city2);

// 8. split()
let x = "vaibhav";
let y = x.split('');
console.log(y);

// 9. reverse()
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.reverse();
console.log(numbers)

// 10. join()
let digit1 = [1, 2, 3, 4, 5, 6, 7];
let var1 = digit1.join('*1*');
console.log(var1);

// 11. sort()
let fruit = ["oranges", "apple","grapes","bananas"];
fruit.sort();
console.log(fruit);

// 12. includes()
let names5 = ["vaibhav", "sai", "prashant", "aniket"];
let isAvailable = names5.includes("prashant");
console.log(isAvailable);

// 13. indexOf()
let city0 = ["pune", "mumbai", "aurangabad", "kolhapur", "nashik"];
let ans2 = city0.indexOf(2, 1, "kolhapur");
console.log(ans2);

// 14. lastIndexOf()
let city3 = ["pune", "mumbai", "pune", "pune", "nashik"];
let ans3 = city3.lastIndexOf("pune");
console.log(ans3);

// 15. isArray()
let cars = ["BMW", "honda", "maruti", "tata"];
console.log(Array.isArray(cars));

// 16. fill()
let city = ["pune", "mumbai", "nagpur", "delhi"];
city.fill("metro city", 2, 3);
console.log(city);

// 17. map()
let digit = [10, 20, 30, 40, 50];
let ans=digit.map((n)=> n*2);
console.log(ans);

// 18. filter()
let price=[2000,6000,7000,10000,3500,12000,6953,71582,9600]
let discount = price.filter(n => n<=10000)
console.log(discount);

// 19. for in loop
let names = ["vaibhav", "shinde", "prashant", "ambhore"]
let uNames = [];
for(let x of names){
    uNames.push(names.toUpperCase())
}
console.log(uNames);
