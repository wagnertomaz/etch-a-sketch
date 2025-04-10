const container = document.querySelector("#container");
const colorPicker = document.querySelector("#color-picker");
const createGrid = document.querySelector("#create-grid");
const clearGrid = document.querySelector("#clear-grid");
const eraserGrid = document.querySelector("#eraser-grid");
const pencilGrid = document.querySelector("#pencil-grid");
const screenTitle = document.querySelector(".screen-title");
const mainMenu = document.querySelector("#main-menu");

let isEraser = false;

function gridCreator() {
    container.innerHTML = "";
    colorPicker.value = "#444444";

    const gridSize = parseInt(prompt("Choose how many squares per side you want in your grid (1-100). For example, 64 will give you a 64x64 grid.", 64));
    if (gridSize <= 100) {
        for (let i = 0; i < gridSize; i++) {
            for (let c = 0; c < gridSize; c++) {
                const div = document.createElement("div");

                div.classList.add("grid-item");
                const gridWidth = 832 / gridSize;
                div.style.width = `${gridWidth}px`;
                div.style.height = `${gridWidth}px`;
                div.addEventListener("mouseenter", () => {
                    if (isEraser) {
                        div.style.backgroundColor = "#dddddd";
                        document.body.style.cursor = "url('./images/eraser.cur'), auto";
                    } else {
                        const color = colorPicker.value;
                        div.style.backgroundColor = `${color}`;
                        document.body.style.cursor = "url('./images/pencil.cur'), auto";
                    }
                })
    
                container.appendChild(div);

                clearGrid.addEventListener("click", () => {
                    div.style.backgroundColor = "#dddddd";
                })
            }
        }      
    } else if (gridSize === null || isNaN(gridSize) || gridSize > 100) {
        alert("Invalid input. Please enter a whole number between 1 and 100. This number determines how many squares will be created in each row and column of the grid.");
        location.reload();
    }
}

eraserGrid.addEventListener("click", () => {
    isEraser = true;
    eraserGrid.classList.add("hovered");
    pencilGrid.classList.remove("hovered");
})

pencilGrid.addEventListener("click", () => {
    isEraser = false;
    pencilGrid.classList.add("hovered");
    eraserGrid.classList.remove("hovered");
})

createGrid.addEventListener("click", () => {
    eraserGrid.classList.remove("hovered");
    pencilGrid.classList.remove("hovered");
    isEraser = false;
    screenTitle.classList.add("inv");
    clearGrid.classList.remove("inv");
    eraserGrid.classList.remove("inv");
    pencilGrid.classList.remove("inv");
    colorPicker.classList.remove("inv");
    mainMenu.classList.remove("inv");
    createGrid.classList.remove("button-center");
})

clearGrid.addEventListener("click", () => {
    eraserGrid.classList.remove("hovered");
    pencilGrid.classList.remove("hovered");
    isEraser = false;
})

mainMenu.addEventListener("click", () => {
    location.reload();
});

createGrid.addEventListener("click", gridCreator);


