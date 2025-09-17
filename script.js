const container = document.querySelector("#container");
const colorPicker = document.querySelector("#color-picker");
const createGrid = document.querySelector("#create-grid");
const clearGrid = document.querySelector("#clear-grid");
const eraserGrid = document.querySelector("#eraser-grid");
const pencilGrid = document.querySelector("#pencil-grid");
const screenTitle = document.querySelector(".screen-title");
const mainMenu = document.querySelector("#main-menu");
const rgbGrid = document.querySelector("#rgb-grid");

let isEraser = false;
let isRgb = false;

function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function gridCreator() {
    container.innerHTML = "";
    colorPicker.value = "#444444";

    const gridSize = parseInt(prompt("Escolha quantos quadrados por lado você quer na sua grade (1-100). Por exemplo, 32 criará uma grade 32x32.", 32));
    if (gridSize <= 100) {
        for (let i = 0; i < gridSize; i++) {
            for (let c = 0; c < gridSize; c++) {
                const div = document.createElement("div");

                div.classList.add("grid-item");
                div.setAttribute("data-click", "100");
                const gridWidth = 832 / gridSize;
                div.style.width = `${gridWidth}px`;
                div.style.height = `${gridWidth}px`;
                div.addEventListener("mouseenter", () => {
                    if (isEraser) {
                        document.body.style.cursor = "url('./images/eraser.cur'), auto";
                        div.style.backgroundColor = "#dddddd";
                    } else if (isRgb) {
                        document.body.style.cursor = "url('./images/pencil.cur'), auto";
                        const rgbColor = randomColor(); 
                        div.style.backgroundColor = `${rgbColor}`;
                    } else {
                        document.body.style.cursor = "url('./images/pencil.cur'), auto";
                        const color = colorPicker.value;
                        div.style.backgroundColor = `${color}`;
                    }
                })
    
                container.appendChild(div);

                clearGrid.addEventListener("click", () => {
                    div.style.backgroundColor = "#dddddd";
                })
            }
        }      
    } else if (gridSize === null || isNaN(gridSize) || gridSize > 100) {
        alert("Entrada inválida. Por favor, insira um número inteiro entre 1 e 100. Esse número determina quantos quadrados serão criados em cada linha e coluna da grade.");
        location.reload();
    }
}

eraserGrid.addEventListener("click", () => {
    isEraser = true;
    isRgb = false;
    eraserGrid.classList.add("hovered");
    pencilGrid.classList.remove("hovered");
    rgbGrid.classList.remove("hovered");
})

pencilGrid.addEventListener("click", () => {
    isEraser = false;
    isRgb = false;
    pencilGrid.classList.add("hovered");
    eraserGrid.classList.remove("hovered");
    rgbGrid.classList.remove("hovered");
})

rgbGrid.addEventListener("click", () => {
    isRgb = true;
    isEraser = false;
    rgbGrid.classList.add("hovered");
    eraserGrid.classList.remove("hovered");
    pencilGrid.classList.remove("hovered");
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
    rgbGrid.classList.remove("inv");
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


