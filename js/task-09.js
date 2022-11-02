function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector(`body`);
const changeBtn = document.querySelector(`.change-color`);
const actualColor = document.querySelector(`.color`);

changeBtn.addEventListener(`click`, onClick);

function onClick() {
	bodyEl.style.backgroundColor = getRandomHexColor();
	actualColor.textContent = bodyEl.style.backgroundColor;
}