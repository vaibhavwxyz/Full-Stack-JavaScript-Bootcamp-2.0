//! Assignment 07

//* Task 1
const languages = document.querySelectorAll(".main__languages a");
languages.forEach((element) => {
	if (element.innerText.includes("2.0")) {
		element.style.display = "none";
	}
});

//* Task 2
const languages = document.querySelectorAll(".main__languages a");
languages.forEach((element) => {
	if (element.innerText.includes("2.0")) {
		element.style.display = "none";
	}
});

const inputField = document.querySelector(".main__form-input");
const formButton = document.querySelector(".main__form-btn");
inputField.disabled = false;
formButton.disabled = false;
inputField.value = "iNeuron";
