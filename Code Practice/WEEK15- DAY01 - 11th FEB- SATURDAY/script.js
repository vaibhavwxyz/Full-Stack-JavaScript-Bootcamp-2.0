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

//* Promise
const makePromise = new Promise((safal, reject) => {
	setTimeout(() => {
		const languages = ["HTML", "CSS", "Tailwind", "JavaScript"];
		if (languages.length > 0) {
			safal("completed");
		} else {
			reject("incompleted");
		}
	}, 2000);
});

makePromise
	.then((result) => {
		console.log(result);
	})
	.catch((result) => {
		console.log(result);
	});
