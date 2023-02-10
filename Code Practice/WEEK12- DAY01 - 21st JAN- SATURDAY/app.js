// DOM MANIPULATION

// GetElementById()
// const title = document.getElementById("main-heading");
// console.log(title);

// GetElementsByClassName()
// const listItems = document.getElementsByClassName("list-items");
// console.log(listItems);

// GetElementsByTagName()
// const tagNames = document.getElementsByTagName("li");
// console.log(tagNames);

// querySelector()
// const query = document.querySelector("li");
// console.log(query);

// querySelectorAll()
// const queries = document.querySelectorAll("li");
// console.log(queries);

// const title = document.querySelector("#main-heading");
// title.style.color = "red";
// console.log(title);

// const listItems = document.querySelectorAll("li"); // this will select all `li` items. also we can select all items that have a same class name e.g: `.list-items` => this will also a valid
// listItems.style.fontSize = "2rem"; // this will not work because we have to loop through the every item in the list.
// for (let i = 0; i < listItems.length; i++) {
// 	listItems[i].style.fontSize = "5rem";
// }
// listItems[2].style.fontSize = "2rem"; // we don't want to manually set the font size for every itme that are present in listItems, so we iterate through for loop.!
// console.log(listItems);

//CREATING ELEMENT
// const ul = document.querySelector("ul");
// const li = document.createElement("li");

// ADDING ELEMENT
// ul.append(li);

// MODIFYING THE TEXT
// const firstListItem = document.querySelector(".list-items");
// console.log(firstListItem.innerText);
// console.log(firstListItem.innerHTML);
// console.log(firstListItem.textContent);

// li.innerText = "X-Men";

// MODIFYING ATTRIBUTE & CLASSES
// li.setAttribute("id", "main-heading");
// li.removeAttribute("id");

// const title = document.querySelector("#main-heading");
// console.log(title);
// console.log(title.getAttribute("id"));

// const li = document.querySelectorAll(".list-items");
// console.log(li);
// li.style.color = "red";
// for (let i = 0; i < li.length; i++) {
// 	li[i].style.color = "red";
// }

// const ul = document.querySelector("ul");
// const li = document.createElement("li");

// ul.append(li);
// li.innerText = "X-Men";
// addLi.setAttribute("class", "list-items");
// li.classList.add("list-items");
// li.classList.remove("list-items");
// console.log(li.classList.contains("list-items"));

// REMOVE ELEMENT FROM DOM
// li.remove();
