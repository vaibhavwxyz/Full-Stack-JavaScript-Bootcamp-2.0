//* map
const arr = [10, 20, 30, 40, 50];
const value = arr.map((e) => e * 2);
// console.log(value);

//* filter & includes
const countries = [
	"india",
	"finland",
	"pakistan",
	"new zealand",
	"switzerland",
	"afganistan",
];
const filterValue = countries.filter((e) => e.includes("land"));
// console.log(filterValue);
