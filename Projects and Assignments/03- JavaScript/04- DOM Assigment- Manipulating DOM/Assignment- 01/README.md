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
