# Assignment- 02

### Task 1

> I have to add background color in the heading and description in the About page.

**_Before Update_**
![Before Task 1](https://user-images.githubusercontent.com/73052214/218968842-9da126b7-0be6-4e1e-9f3d-6ca13bab838b.png)

**_After Update_**
![After Task 1](https://user-images.githubusercontent.com/73052214/218970189-3995283a-b261-4f87-8de3-659e27ed63b4.png)

```javascript
// Solution Task 1
const accordianHeading = document.querySelectorAll(".accordian h3");
const accordianDescription = document.querySelectorAll(".accordian p");

accordianHeading.forEach((val) => (val.style.backgroundColor = "#dadaf8"));
accordianDescription.forEach((val) => (val.style.backgroundColor = "#eeeeff"));
```

#

### Task 2

> I have to add a new "Skills" section in About page.

**_Before Update_**
![Before Task 2](https://user-images.githubusercontent.com/73052214/218970189-3995283a-b261-4f87-8de3-659e27ed63b4.png)

**_After Update_**
![After Task 2](https://user-images.githubusercontent.com/73052214/218975252-de58c4cb-861d-4d02-8c8c-b899542202e1.png)

```javascript
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
```
