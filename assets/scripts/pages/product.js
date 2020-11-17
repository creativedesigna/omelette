// eslint-disable-next-line
function initialize() {
	const commentRatContainer = document.getElementById(
		"comment-rat-container"
	);
	const commentRatInputHidden = document.getElementById("rating-count");

	Utility.tabHandler("s-tabs-product", ["btn-danger", "bg-danger-1"]);

	Utility.rating(
		commentRatContainer,
		undefined,
		undefined,
		(currentRatIndex) => {
			commentRatInputHidden.value = currentRatIndex + 1;
		}
	);

	// $(".s-related-carousel").owlCarousel({
	// 	items: 1,
	// 	autoHeight: true,
	// 	autoplay: true,
	// 	autoplayHoverPause: true,
	// 	autoplayTimeout: 5000,
	// 	loop: true,
	// 	margin: 0,
	// });
}
