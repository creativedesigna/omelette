// eslint-disable-next-line
class Utility {
	static tabHandler(tabGroupName, activeClass) {
		const tabGroupNameItems = document.querySelectorAll(
			`[data-tab-group-name=${tabGroupName}]`
		);
		const tabItems = document.querySelectorAll(
			`[data-tab-group-name-item=${tabGroupName}]`
		);

		let activeItemIndex;
		Array.from(tabGroupNameItems).forEach((tabItem, index) => {
			const dataTabActiveAttr = tabItem.getAttribute("data-tab-active");

			if (dataTabActiveAttr === "true") {
				tabItem.classList.add(...activeClass);
				activeItemIndex = index;
				tabItems[index].classList.add("d-block");
			} else {
				tabItems[index].classList.add("d-none");
			}

			tabItem.addEventListener("click", (event) => {
				event.preventDefault();

				Array.from(tabGroupNameItems)[activeItemIndex].classList.remove(
					...activeClass
				);

				Array.from(tabItems)[activeItemIndex].classList.remove(
					"d-block"
				);
				Array.from(tabItems)[activeItemIndex].classList.add("d-none");

				Array.from(tabItems)[index].classList.add("d-block");

				activeItemIndex = index;
				tabItem.classList.add(...activeClass);
			});
		});
	}

	static rating(
		ratContainerElement,
		activeRateClasses = ["text-warning"],
		disableRateClasses = ["text-secondary-10"],
		cb
	) {
		const ratContainerChildren = Array.from(ratContainerElement.children);

		const setRatingClassHandler = (ratLength, ratIndexSelect) => {
			for (
				let rateSelected = 0;
				rateSelected < ratLength;
				rateSelected++
			) {
				if (rateSelected <= ratIndexSelect) {
					ratContainerChildren[rateSelected].classList.add(
						...activeRateClasses
					);

					ratContainerChildren[rateSelected].classList.remove(
						...disableRateClasses
					);
				} else {
					ratContainerChildren[rateSelected].classList.remove(
						...activeRateClasses
					);

					ratContainerChildren[rateSelected].classList.add(
						...disableRateClasses
					);
				}
			}
		};

		for (
			let ratItemIndex = 0;
			ratItemIndex < ratContainerChildren.length;
			ratItemIndex++
		) {
			let ratItem = ratContainerChildren[ratItemIndex];

			ratItem.addEventListener("click", () => {
				if (typeof cb === "function") {
					cb(ratItemIndex);
				}

				setRatingClassHandler(
					ratContainerChildren.length,
					ratItemIndex
				);
			});
		}
	}
}
