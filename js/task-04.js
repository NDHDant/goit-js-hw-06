let counterValue = 0;
const decrBtn = document.querySelector('button[data-action="decrement"]');
const incrBtn = document.querySelector('button[data-action="increment"]');
const corectValue = document.querySelector('#value');


const decrCount = function () {
	counterValue -= 1;
	corectValue.textContent = counterValue;
}

const incrCount = function () {
	counterValue += 1;
	corectValue.textContent = counterValue;
}

decrBtn.addEventListener('click', decrCount);
incrBtn.addEventListener('click', incrCount);