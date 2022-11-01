const formLog = document.querySelector(`.login-form`);
console.log(formLog);

formLog.addEventListener('submit', onSubmit);

function onSubmit(evt) {
	evt.preventDefault();
	
	const formElements = evt.currentTarget.elements;
	const email = formElements.email.value;
	const pass = formElements.password.value;

	if (email === "" || pass === "") {
		window.alert("Заповніть всі поля");
	}

	const formData = { email, pass };
	console.log(formData);

	evt.currentTarget.reset();
}
