function setState() {
  let digit = 10;
  return digit;
}

let returnedDigit = setState();
// console.log(returnedDigit);

returnedDigit = 12;
// console.log(returnedDigit);

function setState() {
  let score = 22;
  return [score];
}

let [myScore] = setState();
myScore;
myScore = 12;
console.log(myScore);

let [anotherScore] = setState();
anotherScore;

console.log(anotherScore);
