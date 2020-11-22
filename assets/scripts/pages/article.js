const commentRatContainer = document.getElementById("comment-rat-container");
const commentRatInputHidden = document.getElementById("rating-count");

// eslint-disable-next-line
function initialize() {
	Utility.rating(
		commentRatContainer,
		undefined,
		undefined,
		(currentRatIndex) => {
			commentRatInputHidden.value = currentRatIndex + 1;
		}
	);

	AOS.init();
}
