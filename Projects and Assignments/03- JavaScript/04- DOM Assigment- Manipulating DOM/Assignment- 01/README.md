# Assignment- 01

### Task 01

> I have to add an element named 'Hire Me' in the navigation menu.

**Before Update**
![Before Task 1](https://user-images.githubusercontent.com/73052214/218769840-6fd1bc85-986c-4502-a43c-cc53a5daad45.png)

**After Update**
![After Task 2](https://user-images.githubusercontent.com/73052214/218946788-5a866227-ddf5-4e53-bfca-c169b79b73fb.png)

```javascript
// Solution Task 01

const ul = document.querySelector("nav ul");
const element = document.createElement("li");
element.innerHTML = "Hire Me";
ul.append(element);
```

#

### Task 02

> I have to change the text inside search input field from "Search" to "Search My Project".

**Before Update**
![Before Task 2](https://user-images.githubusercontent.com/73052214/218949114-fd32a6e6-9ff9-4997-9afa-3ff6264f024a.png)

**After Update**
![After Task 2](https://user-images.githubusercontent.com/73052214/218949614-317c95c1-3b80-4e00-9f2a-2bed124dd1bb.png)

```javascript
// Solution Task 2

const searchField = document.querySelector(".search-field input");
searchField.placeholder = "Search My Project";
```
