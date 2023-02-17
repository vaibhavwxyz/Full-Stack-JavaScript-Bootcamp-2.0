# Assignment- 01

### Task 1

> I have to add an element named 'Hire Me' in the navigation menu.

**_Before Update_**
![Before Task 1](https://user-images.githubusercontent.com/73052214/218769840-6fd1bc85-986c-4502-a43c-cc53a5daad45.png)

**_After Update_**
![After Task 2](https://user-images.githubusercontent.com/73052214/218946788-5a866227-ddf5-4e53-bfca-c169b79b73fb.png)

```javascript
// Solution Task 01
const ul = document.querySelector("nav ul");
const element = document.createElement("li");
element.innerHTML = "Hire Me";
ul.appendChild(element);
```

#

### Task 2

> I have to change the text inside search input field from "Search" to "Search My Project".

**_Before Update_**
![Before Task 2](https://user-images.githubusercontent.com/73052214/218949114-fd32a6e6-9ff9-4997-9afa-3ff6264f024a.png)

**_After Update_**
![After Task 2](https://user-images.githubusercontent.com/73052214/218949614-317c95c1-3b80-4e00-9f2a-2bed124dd1bb.png)

```javascript
// Solution Task 2
const searchField = document.querySelector(".search-field input");
searchField.placeholder = "Search My Project";
```

#

### Task 3

> I have to change the paragraph text from "a Freelancer for National and International Client" to "an Employee for iNeuron Intelligence Pvt Ltd".

**_Before Update_**
![Before Task 3](https://user-images.githubusercontent.com/73052214/218953451-2148c290-5915-4b19-b8ec-fae3e27109a3.png)

**_After Update_**
![After Task 3](https://user-images.githubusercontent.com/73052214/218956062-2c6784fd-f86d-44bf-97a6-71720353bb44.png)

```javascript
// Solution Task 3
const span = document.querySelectorAll(".hero-left-section p span");
span[1].innerText = "an Employee";
span[2].innerText = "iNeuron Intelligence Pvt Ltd";
```

#

### Task 4

> I have to change to image to Hitesh sir's image.

**_Before Update_**
![Before Task 4](https://user-images.githubusercontent.com/73052214/218956062-2c6784fd-f86d-44bf-97a6-71720353bb44.png)

**_After Update_**
![After Task 4](https://user-images.githubusercontent.com/73052214/218957617-84d8838d-7b8b-426c-99ef-0a7603c33aa5.png)

```javascript
// Solution Task 4
const profile = document.querySelector(".hero-right-section img");
profile.src =
	"https://hiteshchoudhary.com/static/a8d73d1aac4c79e9bb689640e6090367/2eaab/person-image.jpg";
```

#

### Task 5

> I have to add another named "Support Me" beside the "Chat With Me" button.

**_Before Update_**
![Before Task 5](https://user-images.githubusercontent.com/73052214/218957617-84d8838d-7b8b-426c-99ef-0a7603c33aa5.png)

**_After Update_**
![After Task 5](https://user-images.githubusercontent.com/73052214/218959915-79466fd1-e9b5-4c7b-9d11-ad92d7c3d36c.png)

```javascript
// Solution Task 5
const btnWrapper = document.querySelector(".hero-right-section-btns");
const btn = document.createElement("button");
btn.innerText = "Support Me";
btnWrapper.appendChild(btn);
```

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
// Solution Task 2

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

# Assignment- 03

> I have to change all the placeholders in the input fields in contact page.

**_Before Update_**
![Assignment 03](https://user-images.githubusercontent.com/73052214/218996435-fbfae749-7c18-483b-830f-1bd23de09141.png)

**_After Update_**
![Assignment 03](https://user-images.githubusercontent.com/73052214/218999256-c6b69fcc-8528-4cd0-a636-a5607946322b.png)

```javascript
// Solution Assignment 03
const name = document.querySelectorAll(".enterName, .userName");
const email = document.querySelectorAll(".enterMail, .userEmail");
const message = document.querySelectorAll(".enterMessage, .userMessage");

name.forEach((element) => (element.placeholder = "FSJS 2.0"));
email.forEach((element) => (element.placeholder = "fsjs@ineuron.ai"));
message.forEach((element) => (element.placeholder = "Hello World"));
```

# Assignment- 04

> I have to change the background colors and the font color of the cards.

**_Before Update_**
![Before](https://user-images.githubusercontent.com/73052214/219007054-8d3e7922-56f1-4c3e-94dc-50f417647796.png)

**_After Update_**
![After](https://user-images.githubusercontent.com/73052214/219008056-5c0a78b6-9eb0-487b-b616-5cb3a3e0a10b.png)

```javascript
// Solution Assignment 04

// Setting font colors to white
const allContainers = document.querySelectorAll(".clash-card__unit-stats div");
allContainers.forEach((element) => (element.style.color = "#ffffff"));

// Changing Background Colors
// Barbarian
const barbarian = document.querySelector(".clash-card__unit-stats--barbarian");
barbarian.style.backgroundColor = "#ec9b3b";

// archer
const archer = document.querySelector(".clash-card__unit-stats--archer");
archer.style.backgroundColor = "#ee5487";

// giant
const giant = document.querySelector(".clash-card__unit-stats--giant");
giant.style.backgroundColor = "#f6901a";

// goblin
const goblin = document.querySelector(".clash-card__unit-stats--goblin");
goblin.style.backgroundColor = "#82bb30";

// wizard
const wizard = document.querySelector(".clash-card__unit-stats--wizard");
wizard.style.backgroundColor = "#4facff";
```

# Assignment- 05

> I have to change the font color of the Navbar links and the Recipe Gallery, add a new button beside "Contact", add new "Chinese" recipe in the recipe names and I have to add a new card in the "Recipe Gallery" with "add 6th card here" written in it.

**_Before Update_**
![before](https://user-images.githubusercontent.com/73052214/219293407-302997a5-094b-4b86-a731-08bda2f9de09.png)

**_After Update_**
![after](https://user-images.githubusercontent.com/73052214/219294889-6ceb9e41-32e0-4ea5-b936-2611339c5de4.png)

```javascript
// Solution Assignment 05

//! Changing Colors Of Navbar Links
const navElements = document.querySelectorAll(".nav-link");
navElements.forEach((element) => (element.style.color = "#764a9f"));

//! Adding new `Pro Subscription` Button
const buttonContainer = document.querySelector(".nav-center div:nth-child(3)");
// Creating New Button
const subButton = document.createElement("div");
const subButtonLink = document.createElement("a");
subButtonLink.classList.add("btn");
subButtonLink.innerText = "Pro Subscription";
subButton.append(subButtonLink);
buttonContainer.append(subButton);
// Adding Style to the Button Container
buttonContainer.style.display = "flex";
buttonContainer.style.alignItems = "center";

//! Adding Chinese in Recipe Container
const recipeNames = document.querySelector(".tags-container div");
const newRecipe = document.createElement("a");
newRecipe.href = "#";
newRecipe.innerText = "Chinese (7)";
recipeNames.append(newRecipe);

//! Changing Font Color in Recipe Gallery
const recipeDetails = document.querySelectorAll(".recipe-name, .recipe-disp");
recipeDetails.forEach((element) => (element.style.color = "#764a9f"));

//! Adding 6th Option in Recipe Gallery
const recipeGallery = document.querySelector(".recipe-gallery");
const newCard = document.createElement("div");
newCard.classList.add("card");
newCard.innerText = "add 6th card here";
newCard.style.fontWeight = "600";
newCard.style.fontSize = "1.2rem";
recipeGallery.appendChild(newCard);
```

# Assignment- 06

### Task 1

> I have to change logo of the page and set the 'iNeuron` logo.

**_Before Update_**
![before](https://user-images.githubusercontent.com/73052214/219298620-c5c89541-8a64-42a1-bc1f-bc3de37b0f2c.png)

**_After Update_**
![after](https://user-images.githubusercontent.com/73052214/219327308-abb0307a-502a-4cef-90b4-3b5ad91e2d04.png)

```javascript
// Solution Task 1
const logo = document.querySelector(".logo");
logo.src = "https://ineuron.ai/images/ineuron-logo.png";
```

#

### Task 2

> I have to change app price from "$4" to "$10".

**_Before Update_**
![before](https://user-images.githubusercontent.com/73052214/219328624-d5033af9-bd3a-42bd-ba49-132326a7995c.png)

**_After Update_**
![after](https://user-images.githubusercontent.com/73052214/219328946-b0c89ab1-26ee-40ee-b0e7-4f7fc229cd6e.png)

```javascript
// Solution Task 2
const price = document.querySelector(".app_price span");
price.innerText = "$10";
```

# Assignment- 07

### Task 1

> I have to remove the languages that have "2.0" in their name.

**_Before Update_**
![before](https://user-images.githubusercontent.com/73052214/219362874-fbd30500-a46f-4348-bb6a-13fb521a3183.png)

**_After Update_**
![after](https://user-images.githubusercontent.com/73052214/219365560-4f7b2fa8-133f-4d47-8f7d-e1b3e22ebd91.png)

```javascript
// Solution Task 1
const languages = document.querySelectorAll(".main__languages a");
languages.forEach(element) => {
    if(element.innerText.includes("2.0")){
        element.style.display = "none";
    }
}
```

#

### Task 2

> I have to use JavaScript to write something in the input box and submit the form. This should refresh the page and the languages in the left card should come back.

**_Before Update_**
![before](https://user-images.githubusercontent.com/73052214/219365560-4f7b2fa8-133f-4d47-8f7d-e1b3e22ebd91.png)

**_After Update_**
![after](https://user-images.githubusercontent.com/73052214/219366787-492372d2-6cbe-4105-939c-ea0433202ea9.png)

```javascript
// Solution Task 2
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
```

# Assignment- 08

### Task 1

> I have to add new text to the side bar and I have to add scroll to it.

**_Before Update_**
![before task 1](https://user-images.githubusercontent.com/73052214/219368600-abfcc0eb-1584-40f2-89cb-e5c5e9190bae.png)

**_After Update_**
![after task 1](https://user-images.githubusercontent.com/73052214/219369214-69622641-cf7c-44d9-a95b-33d0799d082d.png)

```javascript
// Solution Task 1

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
```

#

### Task 2

> I have to remove the background image from the body.

**_Before Update_**
![before task 2](https://user-images.githubusercontent.com/73052214/219369578-91eadcad-d26d-43a4-ba7c-3aa5c3a4a806.png)

**_After Update_**
![after task 2](https://user-images.githubusercontent.com/73052214/219369911-a3793792-3c25-47ac-989c-cae25c7bc928.png)

```javascript
// Solution Task 2
const body = document.querySelector("body");
body.style.backgroundImage = "none";
```

#

### Task 3

> I have to add functionality to the Navbar toggle button.

**_Before Update_**
![before task 3](https://user-images.githubusercontent.com/73052214/219369911-a3793792-3c25-47ac-989c-cae25c7bc928.png)

**_After Update_**
![after task 3](https://user-images.githubusercontent.com/73052214/219370927-a0329417-3170-49b1-b8eb-9725108d1791.png)

```javascript
// Solution Task 3
const toggleButton = document.querySelector(".navbar-toggler");
const navList = document.querySelector("#navbarTogglerDemo01");
toggleButton.addEventListener("click", () => {
	navList.classList.toggle("collapse");
});
```

# Assignment- 09

### Task 1

> I have to change the "font-family" and the font "color" of the card heading.

**_Before Update_**
![before task 1](https://user-images.githubusercontent.com/73052214/219372218-612c7dd2-704b-46c1-927c-9fb84735c0f2.png)

**_After Update_**
![after task 1](https://user-images.githubusercontent.com/73052214/219373052-c2bf87e9-42fd-4c01-aa6f-924d870acda2.png)

```javascript
// Solution Task 1
const title = document.querySelector(".caption .title");
title.style.fontFamily = "serif";
title.style.color = "#dc143c";
```

#

### Task 2

> I have to change the hover color of the "Add to Cart" button.

**_Before Update_**
![before task 2](https://user-images.githubusercontent.com/73052214/219373052-c2bf87e9-42fd-4c01-aa6f-924d870acda2.png)

**_After Update_**
![after task 2](https://user-images.githubusercontent.com/73052214/219373640-4ed2fc05-7200-4528-a29d-e4f9ce48bb8b.png)

```javascript
// Solution Task 2
const cartButton = document.querySelector(".add-to-cart");
cartButton.addEventListener("mouseover", () => {
	cartButton.style.backgroundColor = "#dc143c";
});
cartButton.addEventListener("mouseout", () => {
	cartButton.style.backgroundColor = "#3c8067";
});
```
