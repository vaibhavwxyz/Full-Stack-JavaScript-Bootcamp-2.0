/* Question 19.
Create a countries.js file and store the countries name into this file, create a file web_techs.js 
and store the popular web technology names into this file. Access both file in a third file named main.js
*/

const countries = require("./countries");
const webTechs = require("./web_techs");

console.log("Countries: ", countries);
console.log("Web Technologies: ", webTechs);
