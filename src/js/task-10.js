const inputField = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const collectionItem = document.querySelector('#boxes');

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);


function createBoxes () {
  destroyBoxes()
  collectionItem.classList.add("flex-boxes");
  const inputValue = Number(inputField.value);
  if (inputValue >= 1 && inputValue <= 100) {
    let allDiv = [];
    let size = 30;
      for (let i = 0; i < inputValue; i += 1 ) {
        const divEl = document.createElement("div");
        divEl.style.backgroundColor = getRandomHexColor();
        divEl.style.height = `${size}px`;
        divEl.style.width = `${size}px`;
        size += 10;
        allDiv.push(divEl);
  }
  collectionItem.append(...allDiv);
} else {
    alert("Enter a number from 1 to 100")
  }
}

function destroyBoxes () {
  collectionItem.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

