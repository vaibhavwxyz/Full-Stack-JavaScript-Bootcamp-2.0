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
