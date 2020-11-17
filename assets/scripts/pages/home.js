// eslint-disable-next-line
function initialize() {
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

	Utility.tabHandler("popular-product", [
		"popular-products__btn-group_active-btn",
	]);

	AOS.init();
}
