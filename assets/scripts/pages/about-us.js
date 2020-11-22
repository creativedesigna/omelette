// eslint-disable-next-line
function initialize() {
	AOS.init();

	$(".image-carousel").owlCarousel({
		items: 1,
		autoHeight: true,
		loop: true,
		autoplay: true,
		autoplayTimeout: 4000,
		autoplayHoverPause: true,
	});
}
