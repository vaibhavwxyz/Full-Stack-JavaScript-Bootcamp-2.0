# Assignment-06

### Task 1

> I have to change logo of the page and set the 'iNeuron` logo.

**_Before Update_**
![before](https://user-images.githubusercontent.com/73052214/219298620-c5c89541-8a64-42a1-bc1f-bc3de37b0f2c.png)

**_After Update_**
![after](https://user-images.githubusercontent.com/73052214/219327308-abb0307a-502a-4cef-90b4-3b5ad91e2d04.png)

```javascript
// Solution Task 1
const logo = document.querySelector(".logo");
logo.src = "https://ineuron.ai/images/ineuron-logo.png";
```

#

### Task 2

> I have to change app price from "$4" to "$10".

**_Before Update_**
![before](https://user-images.githubusercontent.com/73052214/219328624-d5033af9-bd3a-42bd-ba49-132326a7995c.png)

**_After Update_**
![after](https://user-images.githubusercontent.com/73052214/219328946-b0c89ab1-26ee-40ee-b0e7-4f7fc229cd6e.png)

```javascript
const price = document.querySelector(".app_price span");
price.innerText = "$10";
```
