# Assignment 03

> I have to change all the placeholders in the input fields in contact page.

**_Before Update_**
![Assignment 03](https://user-images.githubusercontent.com/73052214/218996435-fbfae749-7c18-483b-830f-1bd23de09141.png)

**_After Update_**
![Assignment 03](https://user-images.githubusercontent.com/73052214/218999256-c6b69fcc-8528-4cd0-a636-a5607946322b.png)

```javascript
// Solution Assignment 03
const name = document.querySelectorAll(".enterName, .userName");
const email = document.querySelectorAll(".enterMail, .userEmail");
const message = document.querySelectorAll(".enterMessage, .userMessage");

name.forEach((element) => (element.placeholder = "FSJS 2.0"));
email.forEach((element) => (element.placeholder = "fsjs@ineuron.ai"));
message.forEach((element) => (element.placeholder = "Hello World"));
```
