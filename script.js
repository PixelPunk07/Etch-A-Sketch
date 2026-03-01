const container = document.querySelector("#container");
const gridBtn = document.querySelector("#grid-btn");

function generateGrid(gridSize) {
    const boxSize = 100 / gridSize;

    for (let i = 0; i < gridSize * gridSize; i++) {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid");
        gridItem.style.flex = `1 0 ${boxSize}`;

        container.appendChild(gridItem);
    }
}

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