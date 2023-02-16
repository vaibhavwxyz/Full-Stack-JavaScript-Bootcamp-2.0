//! Assignment 08

//* Task 1
// Creating A Custom Heading
const customTextHeading = document.createElement("h2");
customTextHeading.innerText = "This is my custom heading";
customTextHeading.classList.add("new-head");
// Creating A Custom Text
const customText = document.createElement("p");
customText.innerText = "This is my custom text";
customText.classList.add("new-p");
// Selecting The Container
const textContainer = document.querySelector(".col-lg-4");
// Adding Text Heading and Text in the Container
textContainer.append(customTextHeading);
textContainer.append(customText);
// Adding overflow-y: scroll to it
textContainer.style.overflowY = "scroll";

//* Task 2
const body = document.querySelector("body");
body.style.backgroundImage = "none";

//* Task 3
const toggleButton = document.querySelector(".navbar-toggler");
const navList = document.querySelector("#navbarTogglerDemo01");
toggleButton.addEventListener("click", () => {
	navList.classList.toggle("collapse");
});
