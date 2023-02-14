//! Previous Day Warm-Up
// console.log(btn);

// let h2 = document.querySelectorAll("h2");
// const btn = document.querySelector(".btn");

// for (let i = 0; i < h2.length; i++) {
// 	h2[i].style.color = "red";
// }

// btn.addEventListener("click", (e) => {
// 	for (let i = 0; i < h2.length; i++) {
// 		h2[i].style.color = "red";
// 	}
// });
// const h1 = document.querySelector("h1");
// const li = document.createElement("li");
// console.log(li);
// li.innerText = "x-men";
// li.style.padding = "24px";
// h1.append(li);

// setting attribute
// li.setAttribute("class", "card");
// li.classList.add("card"); // same as above
// li.classList.remove("card");

// remove element
// li.remove();

// const card3 = document.querySelector(".card-3");
// console.log(card3);
// console.log(card3.innerText);
// console.log(card3.childNodes);
// let childElements = card3.children;

// for (let i = 0; i < childElements; i++) {
// 	// do something with each child element
// }

//! EVENT LISTENERS

// //* click event
// const buttonTwo = document.querySelector(".btn-2");
// // console.log(buttonTwo);
// buttonTwo.addEventListener("click", (e) => (buttonTwo.style.color = "red"));

// //* mouseover event
// const buttonThree = document.querySelector(".btn-3");
// buttonThree.addEventListener(
// 	"mouseover",
// 	(e) => (buttonThree.style.backgroundColor = "blue")
// );

const revealBtn = document.querySelector(".reveal-btn");
const hiddenContent = document.querySelector(".hidden-content");

function revealContent() {
	if (hiddenContent.classList.contains("reveal-btn")) {
		hiddenContent.classList.remove("reveal-btn");
		// console.log(hiddenContent.classList);
	} else {
		hiddenContent.classList.add("reveal-btn");
		// console.log(hiddenContent.classList);
	}
}

revealBtn.addEventListener("click", revealContent);
