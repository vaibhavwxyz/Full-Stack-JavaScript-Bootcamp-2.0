let accordian = document.querySelectorAll(".accordian h3");
accordian.forEach((element) => {
	element.addEventListener("click", () => {
		let para = element.nextElementSibling;
		if (para.style.display === "block") {
			para.style.display = "none";
		} else {
			para.style.display = "block";
		}
	});
});

//! Assignment 02
//* Task 1
const accordianHeading = document.querySelectorAll(".accordian h3");
const accordianDescription = document.querySelectorAll(".accordian p");

accordianHeading.forEach((val) => (val.style.backgroundColor = "#dadaf8"));
accordianDescription.forEach((val) => (val.style.backgroundColor = "#eeeeff"));

//* Task 2
// Adding Skills Section in About
const accordianContainer = document.querySelector(".accordian-wrapper");
const accordianSkills = document.createElement("div");
accordianSkills.classList.add("accordian");
accordianContainer.appendChild(accordianSkills);
const skillsHeading = document.createElement("h3");
skillsHeading.innerText = "Skills";
accordianSkills.appendChild(skillsHeading);
const skillsDescription = document.createElement("p");
skillsDescription.innerText =
	"I posses a very good command over the full stack development technologies like MERN which can be seen in my work over Github.";
accordianSkills.appendChild(skillsDescription);

// Giving background Colors in Heading and Description
const accordianHeading = document.querySelectorAll(".accordian h3");
const accordianDescription = document.querySelectorAll(".accordian p");
accordianHeading.forEach((val) => (val.style.backgroundColor = "#dadaf8"));
accordianDescription.forEach((val) => (val.style.backgroundColor = "#eeeeff"));

// For the dropdown
accordianHeading.forEach((element) => {
	element.addEventListener("click", () => {
		const para = element.nextElementSibling;
		if (para.style.display === "block") {
			para.style.display = "none";
		} else {
			para.style.display = "block";
		}
	});
});
