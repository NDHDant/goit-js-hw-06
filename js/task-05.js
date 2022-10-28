const inInput = document.querySelector('#name-input');
const inSpan = document.querySelector('#name-output');

inInput.addEventListener('input', onClick);

function onClick(el) {
	inSpan.textContent = el.currentTarget.value;

	if (el.currentTarget.value === "") {
		inSpan.textContent = 'Anonymous';
	}
}