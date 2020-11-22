const mobileMenuIcon = document.querySelector("#mobile-menu-icon");

function runInitialize() {
	$(function () {
		$("[data-title='tooltip']").tooltip({ trigger: "hover" });
	});

	if (typeof initialize === "function") {
		initialize();
	}
}

// # mobile menu icon click handler
function clickMobileMenuIconHandler() {
	mobileMenuIcon.classList.toggle("header__nav_mobile-menu-icon-active");

	$(".header__nav > ul").slideToggle(250);
}

$(document).ready(function () {
	runInitialize();

	setTimeout(function () {
		$("input").val("");
	}, 200);

	// # mobile menu icon run click handler
	mobileMenuIcon.addEventListener("click", clickMobileMenuIconHandler);
});
