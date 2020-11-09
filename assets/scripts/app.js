const mobileMenuIcon = document.querySelector("#mobile-menu-icon");

function initialize() {
	$(function () {
		$('[data-toggle="tooltip"]').tooltip({ trigger: "hover" });
	});

	$(".owl-carousel").owlCarousel({
		items: 1,
		autoHeight: false,
		loop: true,
		autoplay: true,
		autoplayTimeout: 4000,
		autoplayHoverPause: true,
	});
}

// # mobile menu icon click handler
// function clickMobileMenuIconHandler() {
// 	mobileMenuIcon.classList.toggle("header__nav_mobile-men	-icon-active");
// }

$(document).ready(function () {
	initialize();

	// # mobile menu icon run click handler
	// mobileMenuIcon.addEventListener("click", clickMobileMenuIconHandler);
});
