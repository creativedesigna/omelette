const allInputs = document.querySelectorAll("input");
Array.from(allInputs).forEach((input) => {
	if (
		input.getAttribute("autofocus") &&
		input.parentElement.classList.contains("custom-auth-input")
	) {
		$(input.parentElement.querySelector("label")).toggleClass(
			"custom-auth-input__active-label"
		);

		$(input.parentElement.querySelector("i")).toggleClass("text-dark");
	}
});

$(".custom-auth-input > input").focus(customAuthInputHandler);

$(".custom-auth-input > input").blur(customAuthInputHandler);

$(".custom-auth-input > .fa-eye").click(toggleTypeInputHandler);

function customAuthInputHandler(event) {
	const containerAuthInput = event.target.parentElement;
	const labelContainerAuthInput = containerAuthInput.querySelector("label");
	const iconContainerAuthInput = containerAuthInput.querySelector("i");

	if (event.target.value.trim() !== "") {
		return;
	}
	$(labelContainerAuthInput).toggleClass("custom-auth-input__active-label");
	$(iconContainerAuthInput).toggleClass("text-dark");
}

function toggleTypeInputHandler(event) {
	const containerAuthIcon = event.target.parentElement;
	const containerInputAuthIcon = containerAuthIcon.querySelector("input");

	$(containerInputAuthIcon).attr(
		"type",
		containerInputAuthIcon.type === "password" ? "text" : "password"
	);
	$(event.target).toggleClass("fa-eye fa-eye-slash");

	containerInputAuthIcon.focus();
}
