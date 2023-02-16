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
