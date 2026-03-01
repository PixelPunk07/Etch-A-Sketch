const container = document.querySelector("#container");
const gridBtn = document.querySelector("#grid-btn");
const drawBtn = document.querySelector("#draw-btn");
const eraseBtn = document.querySelector("#erase-btn");
const rgbBtn = document.querySelector("#rgb-btn");

let currentMode = "draw";

drawBtn.addEventListener('click', () => currentMode = "draw");
eraseBtn.addEventListener("click", () => currentMode = "erase");
rgbBtn.addEventListener("click", () => currentMode = "rgb");

container.addEventListener("mouseover", (e) => {
    if (e.target.classList.contains("grid")) {
        if (currentMode === "draw") {
            e.target.style.backgroundColor = "black";
        } else if (currentMode === "erase") {
            e.target.style.backgroundColor = "white";
        } else if (currentMode === "rgb") {
            e.target.style.backgroundColor = generateRgbColor();
        }
    }
})

function generateGrid(gridSize) {
    const boxSize = 100 / gridSize;
    container.innerHTML = "";

    for (let i = 0; i < gridSize * gridSize; i++) {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid");
        gridItem.style.flex = `1 0 ${boxSize}%`;

        container.appendChild(gridItem);
    }
}

generateGrid(16);

gridBtn.addEventListener("click", () => {
    const askUser = +prompt("Enter grid size");
    if (askUser === null) return;

    const isNotANumber = !Number.isInteger(askUser);

    if ((askUser > 100 || askUser < 1)) {
        alert("Number greater than 100 or less than 1 is not allowed");
    } else if (isNotANumber) {
        alert("Please enter integer only.");
    } else {
        generateGrid(askUser);
    }
})

function generateRgbColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}