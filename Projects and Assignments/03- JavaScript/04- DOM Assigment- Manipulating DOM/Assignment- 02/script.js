//! Assignment- 01

//* Task 01
const ul = document.querySelector("nav ul");
const element = document.createElement("li");
element.innerHTML = "<a>Hire Me</a>";
ul.append(element);

//* Task 02
const searchField = document.querySelector(".search-field input");
searchField.placeholder = "Search My Project";

//* Task 03
const span = document.querySelectorAll(".hero-left-section p span");
span[1].innerText = "an Employee";
span[2].innerText = "iNeuron Intelligence Pvt Ltd";

//* Task 04
const profile = document.querySelector(".hero-right-section img");
profile.src =
	"https://hiteshchoudhary.com/static/a8d73d1aac4c79e9bb689640e6090367/2eaab/person-image.jpg";

//* Task 05
const btnWrapper = document.querySelector(".hero-right-section-btns");
const btn = document.createElement("button");
btn.innerText = "Support Me";
btnWrapper.appendChild(btn);
