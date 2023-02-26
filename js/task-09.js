const bodyEl = document.querySelector("body");
const changeColorBtn = bodyEl.querySelector(".change-color");
const textEl = bodyEl.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
}

changeColorBtn.addEventListener("click", clickColorBtnHandler);
function clickColorBtnHandler () {
  const randomColour = getRandomHexColor();
  bodyEl.style.backgroundColor = randomColour;
  textEl.textContent = randomColour;
}

