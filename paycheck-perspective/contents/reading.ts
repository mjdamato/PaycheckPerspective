export default function gettingInput() {
	const input = document.getElementById('email') as HTMLInputElement | null;
	const emailError = document.getElementById('email-error');
	input?.addEventListener('input', function (event) {
		const target = event.target as HTMLInputElement;
		const value = target.value;
		const regex = /^\S+@\S+\.\S+$/;
		if (!regex.test(value)) {
			input.setCustomValidity("Please enter a valid email address.");
			emailError.style.color = "red"
			} else {
				input.setCustomValidity("Perfectly Valid Email");
				emailError.style.color = "green"
				}
				const validationMessage = input.validationMessage;
				emailError.textContent = validationMessage;
				})};