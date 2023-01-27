/* Question 09.
Boolean value is either true or false.
- Write three JavaScript statement example which provide truthy value.
- Write three JavaScript statement example which provide falsy value. 
*/

/* NOTE: 
A truthy value is a value that is considered "true" when used in a Boolean context. 
This includes all values that are not considered falsy. Falsy values are values that are considered 
"false" when used in a Boolean context. These include: false, 0, "", null, undefined, NaN.
*/

// below three statement provide true value
console.log(5 > 3) // true
console.log("hello" != "goodbye") // true
console.log(undefined == null) // true

// below three statement provide false value
console.log(0 === '0') // false
console.log("false" == false) // false
console.log([1, 2, 3].length == 2) // false
