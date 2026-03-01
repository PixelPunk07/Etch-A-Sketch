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
})