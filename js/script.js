const buttons = document.querySelectorAll('.discover__button');

buttons.forEach((button) => {
	button.addEventListener('click', () => {
		buttons.forEach((btn) => btn.classList.remove('active'));
		button.classList.add('active');
	});
});
