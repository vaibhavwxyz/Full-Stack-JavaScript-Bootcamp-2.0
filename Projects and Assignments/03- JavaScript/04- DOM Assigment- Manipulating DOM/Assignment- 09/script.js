//! Assignment- 09

//* Task 1
const title = document.querySelector(".caption .title");
title.style.fontFamily = "serif";
title.style.color = "#dc143c";

//* Task 2
const cartButton = document.querySelector(".add-to-cart");
cartButton.addEventListener("mouseover", () => {
	cartButton.style.backgroundColor = "#dc143c";
});
cartButton.addEventListener("mouseout", () => {
	cartButton.style.backgroundColor = "#3c8067";
});
