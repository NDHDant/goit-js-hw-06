const newSize = document.querySelector(`#font-size-control`);
// console.log(newSize.value);
const textSize = document.querySelector(`#text`);

newSize.addEventListener('input', reSize);

function reSize() {
	textSize.style.fontSize = `${newSize.value}px`;
};
	
