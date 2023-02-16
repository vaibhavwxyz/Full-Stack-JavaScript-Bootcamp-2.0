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
