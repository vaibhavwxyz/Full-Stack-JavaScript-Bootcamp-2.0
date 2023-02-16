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
