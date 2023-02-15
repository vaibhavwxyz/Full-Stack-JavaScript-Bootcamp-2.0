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
