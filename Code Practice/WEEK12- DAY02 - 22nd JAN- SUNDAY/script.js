//! DOM MANIPULATION

//? TRAVERSE THE DOM
//* PARENT NODE TRAVERSAL
let ul = document.querySelector("ul");
// console.log(ul.parentNode);
// console.log(ul.parentElement);

//* GRAND PARENT NODE TRAVERSAL
// console.log(ul.parentNode.parentNode);
// console.log(ul.parentElement.parentElement);
// const html = document.documentElement;
// console.log(html);
// console.log(html.parentNode);
// console.log(html.parentElement);

//* CHILD NODE TRAVERSAL
console.log(ul.childNodes);
console.log(ul.firstChild);
console.log(ul.lastChild);

// ul.firstChild.style.backgroundColor = "blue"; // Error
ul.firstElementChild.style.backgroundColor = "blue";

//* SIBLING NODE TRAVERSAL
