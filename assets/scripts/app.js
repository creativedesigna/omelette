const mobileMenuIcon = document.querySelector("#mobile-menu-icon");

function initialize() {
	$(function () {
		$("[data-toggle='tooltip']").tooltip({ trigger: "hover" });
	});

	$(".image-carousel").owlCarousel({
		items: 1,
		autoHeight: true,
		loop: true,
		autoplay: true,
		autoplayTimeout: 4000,
		autoplayHoverPause: true,
	});

	$(".s-comments__carousel").owlCarousel({
		items: 1,
		autoHeight: true,
		autoplay: true,
		autoplayHoverPause: true,
		autoplayTimeout: 4000,
		loop: true,
		margin: 100,
		dots: true,
	});

	$(".s-description__items").owlCarousel({
		items: 1,
		autoHeight: true,
		autoplay: true,
		autoplayHoverPause: true,
		autoplayTimeout: 5000,
		loop: true,
		margin: 0,
	});

	AOS.init();
}

// # mobile menu icon click handler
function clickMobileMenuIconHandler() {
	mobileMenuIcon.classList.toggle("header__nav_mobile-menu-icon-active");

	$(".header__nav > ul").slideToggle(250);
}

$(document).ready(function () {
	initialize();

	tabHandler("popular-product", "popular-products__btn-group_active-btn");

	// # mobile menu icon run click handler
	mobileMenuIcon.addEventListener("click", clickMobileMenuIconHandler);
});
