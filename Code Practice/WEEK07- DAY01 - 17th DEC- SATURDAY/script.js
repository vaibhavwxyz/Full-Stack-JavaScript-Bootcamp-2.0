//! ARRAY METHODS

let countries = [
  "india",
  "pakistan",
  "england",
  "finland",
  "uzbekistan",
  "afghanistan",
  "japan",
];

let indianStates = [
  "maharastra",
  "odisa",
  "keral",
  "madhya pradesh",
  "sikkim",
  "andhra pradesh",
];

let digit = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let fNames = ["vaibhav", "sai", "prashant"];
let lNames = ["shinde", "maddilwar", "ambhore"];

//* length
// console.log(indianStates.length); // return the actual length of an array
// console.log(countries.length);

//* push()
// indianStates.push("punjab"); // add one element at the last of the array. it modifies the array length
// indianStates.push(...countries);
// console.log(indianStates);

//* pop()
// console.log(indianStates.length);
// indianStates.pop(); // removes last element of array. it modifies the array lenght
// console.log(indianStates);
// console.log(indianStates.length);

//* shift()
// console.log(countries.length);
// let value = countries.shift(); // removes the first element of array. it modifies the original array
// console.log(value);
// console.log(countries.length);
//* unshift()
// console.log(countries.length);
// countries.unshift("france", "new zealand"); // add one or more elements at the beginning of the array and returns the new length of the array. It modifies the original array.
// console.log(countries);
// console.log(countries.length);

//* concat()
// console.log(fNames.concat(...lNames)); // join two or more array and returns new array
// console.log(fNames);

//* slice()
// let sliceOfDigit = digit.slice(0, 8); // Returns a new array containing a portion of the original array specified by the starting and ending index. last index value will be excluded.
// console.log(sliceOfDigit);

//* splice()
// digit.splice(2, 0, 6, 8);
// console.log(digit);

//* split()
// let string = "hello world";
// console.log(string.split(" ")); // This method splits a string into an array of substrings based on a specified separator.

//* reverse()
// console.log(digit.reverse()); // this mehod reverse order of elements in an array

//* join()
// const strFname = fNames.join(" "); // This method joins all elements of an array into a string, using a specified separator between each element.
// console.log(strFname);

//* sort()
// console.log(countries.sort()); // This method sorts the elements of an array in ascending or descending order.

//* includes()
// console.log(countries.includes("india", 2)); // This method checks whether an array includes a specific element and returns a boolean value.

//* indexOf()
// console.log(indianStates.indexOf("sikkim")); // This method returns the index of the first occurrence of a specified element in an array. If the element is not found, it returns -1.

//* lastIndexOf()
// console.log(digit.lastIndexOf(2)); // Returns the index of the last occurrence of a specified value in an array, or -1 if it is not present.

//* isArray()
// let x = null;
// console.log(Array.isArray(x)); // false. The Array.isArray() static method determines whether the passed value is an Array.

//* fill()
// console.log(digit.fill(0, 2, 6));

//* map()
// console.log(digit.map((e) => e * 2)); // create a new array with the result of calling a provide function on every element in the original array

//* filter()
// let filterResult = countries.filter((e) => e.includes("land"));
// console.log(filterResult);

//* for of loop
// for (let x of countries) {
//   console.log(x);
// }
