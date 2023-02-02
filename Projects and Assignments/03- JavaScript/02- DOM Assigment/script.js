const colors = [
    "#8D3DAF",
    "#E07C24",
    "#758283",
    "#E03B8B",
    "#FF6666",
    "#242B2E",
    "#03C6C7",
    "#5A20CB",
    "#6A1B4D",
    "#CAD5E2",
    "#35BDD0",
    "#0D0D0D",
    "#3DBE29",
    "#DDD101",
];

const container = document.querySelector(".container");

container.addEventListener("click", (e) => {
    let circle = document.createElement("div");
    circle.classList.add("circle");
    circle.style.top = `${e.clientY - 20}px`;
    circle.style.left = `${e.clientX - 20}px`;
    circle.style.backgroundColor = `${colors[Math.floor(Math.random() * 14)]}`;
    container.appendChild(circle);

    setTimeout(() => {
        circle.remove();
    }, 2000);
});

/* EXPLATION: 
This JavaScript code block listens for a "click" event on the element with class "container" and creates a circle element at the location of the click.
The code does the following STEPS:

1. `const container = document.querySelector(".container")` : selects the first element with class "container" in the document using 
the querySelector method. The result is stored in a constant variable named container.

2. `container.addEventListener("click", (e) => { ... })` : sets up a click event listener on the container element. When the element is clicked, 
an anonymous function (also known as a "callback") is executed and passed an e event object that contains information about the click event.

3. `let circle = document.createElement("div")` : creates a new <div> element and stores it in a variable named circle.

4. `circle.classList.add("circle")` : adds the class "circle" to the circle element.

5. `circle.style.top = ${e.clientY - 20}px` : sets the top property of the circle element's inline style to the clientY property of the event object minus 20 pixels, 
so that the circle is positioned 20 pixels above the location of the click.

6. `circle.style.left = ${e.clientX - 20}px` : sets the left property of the circle element's inline style to the clientX property of the event object minus 20 pixels, 
so that the circle is positioned 20 pixels to the left of the location of the click.

7. `circle.style.backgroundColor = ${colors[Math.floor(Math.random() * 14)]}` : sets the backgroundColor property of the circle element's inline style to a random color from the colors array.

8. `container.appendChild(circle)` : adds the circle element to the end of the container element as its last child.

9. `setTimeout(() => { circle.remove(); }, 2000)` : sets a timer that will run after 2 seconds (2000 milliseconds) and remove the circle element from the container using the remove method.

This code creates a visual effect of a circle appearing at the location of a click, remaining on the page for 2 seconds, and then disappearing.
*/