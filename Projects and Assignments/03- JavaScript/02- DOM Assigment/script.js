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
    }, 1000);
});
