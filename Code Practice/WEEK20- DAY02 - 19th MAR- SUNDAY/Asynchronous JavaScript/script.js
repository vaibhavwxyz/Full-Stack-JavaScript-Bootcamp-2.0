// function one(two) {
//   two();
//   console.log("hello from one");
// }

// function two() {
//   console.log("hello from two");
// }

// one(two);

let stock = {
  fruit: ["apple", "banana", "mango", "guava"],
};

let order = (fruitIndex, callProduction) => {
  setTimeout(() => {
    console.log(`${stock.fruit[fruitIndex]} was selected`);
  }, 2000);

  callProduction();
};

let production = () => {
  setTimeout(() => {
    console.log("production has started");
  }, 0000);
};

order(2, production);
