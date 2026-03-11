const drawBtn = document.getElementById("drawBtn");
const resetBtn = document.getElementById("resetBtn");
const counter = document.getElementById("counter");
const container = document.getElementById("numbers-container");
const message = document.getElementById("message");

const MAX_NUMBERS = 6;
const MIN = 1;
const MAX = 49;

let drawnNumbers = [];

function updateCounter() {
    counter.textContent = `Pozostało do wylosowania liczb: ${MAX_NUMBERS - drawnNumbers.length}`;
}

function drawNumber() {
    if (drawnNumbers.length >= MAX_NUMBERS) return;

    let number;
    do {
        number = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
    } while (drawnNumbers.includes(number));

    drawnNumbers.push(number);
    renderNumber(number);
    updateCounter();

    if (drawnNumbers.length === MAX_NUMBERS) {
        drawBtn.disabled = true;
        message.textContent = "Wylosowano komplet liczb";
    }
}

function renderNumber(number) {
    const tile = document.createElement("div");
    tile.classList.add("number-tile");
    tile.textContent = number;
    container.appendChild(tile);
}

function reset() {
    drawnNumbers = [];
    container.innerHTML = "";
    message.textContent = "";
    drawBtn.disabled = false;
    updateCounter();
}

drawBtn.addEventListener("click", drawNumber);
resetBtn.addEventListener("click", reset);

updateCounter();