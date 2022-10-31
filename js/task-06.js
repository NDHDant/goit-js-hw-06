const inInput = document.querySelector(`#validation-input`);

inInput.addEventListener('blur', onBlur);

function onBlur() {
	if (inInput.value.length === Number(inInput.dataset.length)) {
		inInput.classList.add('valid');
		inInput.classList.remove('invalid');
	} else {
		inInput.classList.remove('valid');
		inInput.classList.add('invalid');
	}
};