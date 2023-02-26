function getScores() {
  return [10, 20, 30];
}
//* without destructuring an array
let scores = getScores();
// let x = scores[0],
//   y = scores[1],
//   z = scores[2];

// console.log(scores); // [10, 20, 30]
// console.log(x); // 10
// console.log(y); // 20
// console.log(z); // 30

//* with destructuring an array
// let [x, y, z] = getScores();
// console.log(x); // 10
// console.log(y); // 20
// console.log(z); // 30

// ******************END***********************
//* Array
const digit = [1, 2, 3, 4, 5];
const alphabet = ["a", "b", "c", "d"];

const newArray = [...digit, ...alphabet];
// console.log(newArray);

//* Object
const personOne = {
  name: "vaibhav",
  age: 24,
  address: {
    city: "chikhali",
    state: "maharastra",
  },
};

const personTwo = {
  name: "sai",
  age: 23,
  address: {
    city: "basmath",
    state: "maharastra",
  },
};

// console.log(personOne);
const { name, age } = personOne;
console.log(name);
console.log(age);

const {
  name: fName,
  address: { city },
} = personTwo;
console.log(fName);
console.log(city);
