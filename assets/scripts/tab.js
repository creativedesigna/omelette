const tabHandler = (tabGroupName, activeClass) => {
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
			tabItem.classList.add(activeClass);
			activeItemIndex = index;
			tabItems[index].classList.add("d-block");
		} else {
			tabItems[index].classList.add("d-none");
		}

		tabItem.addEventListener("click", (event) => {
			event.preventDefault();

			Array.from(tabGroupNameItems)[activeItemIndex].classList.remove(
				activeClass
			);

			Array.from(tabItems)[activeItemIndex].classList.remove("d-block");
			Array.from(tabItems)[activeItemIndex].classList.add("d-none");

			Array.from(tabItems)[index].classList.add("d-block");

			activeItemIndex = index;
			tabItem.classList.add(activeClass);
		});
	});
};
