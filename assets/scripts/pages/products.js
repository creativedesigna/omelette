// eslint-disable-next-line
function initialize() {
	AOS.init();

	const filterMenu = document.getElementById("filter-menu");
	const iconToggleMenu = filterMenu.querySelectorAll(".fa-plus");
	const inputFilterMenu = document.getElementById("input-filter-menu");
	const arrowToggleCards = document.querySelectorAll(".card__header > i");
	const formSorter = document.getElementById("form-sorter");
	const selectBoxSorter = formSorter.querySelector("select");

	$(arrowToggleCards).click(function (event) {
		const cardBodySelector = event.target.parentElement.parentElement.querySelector(
			".card__body"
		);

		$(event.target).toggleClass("fa-chevron-down fa-chevron-up");

		if (cardBodySelector.classList.contains("d-sm-none")) {
			$(cardBodySelector).removeClass("d-sm-none");
			$(cardBodySelector).toggle(0);
		}

		$(cardBodySelector).slideToggle(100);
	});

	const filterMenuFormData = [];
	$(iconToggleMenu).click(function (event) {
		const dataFilterMenuAttr = event.target.parentElement.parentElement.getAttribute(
			"data-filter-menu"
		);

		if (typeof dataFilterMenuAttr !== "string") {
			return;
		}

		$(event.target).toggleClass("fas fa-minus fas fa-plus");

		$(event.target.parentElement.parentElement).toggleClass("active");

		// #ul_filter_menu
		// $(
		// 	event.target.parentElement.parentElement.querySelector("ul")
		// ).slideToggle("fast");

		const findDataElementInFilterMenuFormDataIndex = filterMenuFormData.findIndex(
			(formData) => formData === dataFilterMenuAttr
		);

		if (findDataElementInFilterMenuFormDataIndex === -1) {
			filterMenuFormData.push(dataFilterMenuAttr);
		} else {
			filterMenuFormData.splice(
				findDataElementInFilterMenuFormDataIndex,
				1
			);
		}

		inputFilterMenu.value = filterMenuFormData;
	});

	const slider = document.getElementById("price-slider");
	noUiSlider.create(slider, {
		start: [
			parseInt(slider.getAttribute("data-start-price")),
			parseInt(slider.getAttribute("data-end-price")),
		],
		connect: true,
		range: {
			min: parseInt(slider.getAttribute("data-min-price")),
			max: parseInt(slider.getAttribute("data-max-price")),
		},
	});

	const priceViews = [
		document.getElementById("min-price-view"),
		document.getElementById("max-price-view"),
	];
	const priceFilterHidden = document.getElementById("price-filter-hidden");

	slider.noUiSlider.on("update", function (values, handle) {
		priceViews[handle].innerText = `${Math.trunc(values[handle])}$`;
		priceFilterHidden.value = `${[
			Math.trunc(values[0]),
			Math.trunc(values[1]),
		]}`;
	});

	selectBoxSorter.addEventListener("change", function () {
		formSorter.submit();
	});
}
