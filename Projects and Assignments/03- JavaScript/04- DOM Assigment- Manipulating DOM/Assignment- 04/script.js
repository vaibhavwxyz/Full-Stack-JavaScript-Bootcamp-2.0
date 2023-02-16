//! Solution Assignment 04

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
