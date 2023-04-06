// Fetch API requires a discussion of...
//! Callbacks, Promises, Thenables and Async/Await

//* Callbacks:
// callback is a function that is passed as an argument to another function.

function fetchData(callback) {
  // some code to fetch data from a server
  const data = {
    /* fetched data */
  };
  callback(data);
}

fetchData(function (data) {
  // do something with the fetched data
});

//* Promises:
// Promise is a way to handle asynchronous operations that are expected to produce a result at some point in the future, either successfully or with an error. It provides a cleaner and more organized way to write asynchronous code than using callbacks.
// 3 states: Pending, Fulfilled, Rejected

const myPromises = new Promise((resolve, reject) => {
  const error = false;
  if (!error) {
    resolve("Yes! resolved the promise.");
  } else {
    reject("No! rejected the promise.");
  }
});

console.log(myPromises); // this will only returns(print) state of our promise.

//* Thenables:
// a thenable is any object that has a .then() method, and can be used in a .then() chain just like a Promise. This allows for greater flexibility in how asynchronous operations can be handled in JavaScript.

myPromises.then((value) => {
  console.log(value);
});

// Thenable(.then()) chaining
myPromises
  .then((value) => {
    return value + 1;
  })
  .then((newValue) => {
    console.log(newValue);
  })
  .catch((err) => {
    console.error(err);
  });

const myNextPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("myNextPromise resolved!");
  }, 3000);
});

myNextPromise.then((value) => {
  console.log(value);
});

myPromises.then((value) => {
  console.log(`${value} "line no: 64"`);
});

// Pending
const users = fetch("https://jsonplaceholder.typicode.com/users");
console.log(users); // pending

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });

// duplicate add-on
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.forEach((user) => {
      console.log(user);
    });
  });

//! Async & Await
const myUser = {
  userList: [],
};

const myCoolFunction = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const jsonUserData = await response.json();
  return jsonUserData;
};

const anotherFunn = async () => {
  const data = await myCoolFunction();
  myUser.userList = data;
  console.log(myUser.userList); // this will excute later
};

anotherFunn();
console.log(myUser.userList); // this will excute first
