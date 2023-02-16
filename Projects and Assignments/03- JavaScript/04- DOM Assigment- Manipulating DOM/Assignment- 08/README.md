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
