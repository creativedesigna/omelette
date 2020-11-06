(function showIcon() {
	const spans = Array.from(document.querySelectorAll("span"));

	const iconNames = [];
	const iconWidths = [];
	const iconHeights = [];
	const iconFills = [];

	spans.forEach((span) => {
		const dataIconName = span.getAttribute("data-icon");
		const dataIconWidth = span.getAttribute("data-width");
		const dataIconHeight = span.getAttribute("data-height");
		const dataIconFill = span.getAttribute("data-fill");

		iconNames.push(dataIconName || "");
		iconWidths.push(dataIconWidth || "");
		iconHeights.push(dataIconHeight || "");
		iconFills.push(dataIconFill || "");
	});

	iconNames.forEach((iconName, index) => {
		let iconNameElement;
		if (iconName !== "" && iconName.indexOf(" ") === -1) {
			iconNameElement = document.querySelector(`[data-icon=${iconName}]`);
		}

		const getIconSvg = getIcon(
			iconName,
			iconWidths[index],
			iconHeights[index],
			iconFills[index]
		);

		if (iconNameElement) {
			iconNameElement.innerHTML = getIconSvg;
		}
	});
})();

function getIcon(iconName, width, height, fillColor) {
	switch (iconName) {
		case "profile":
			return `<svg width="${width || 24}" height="${
				height || 24
			}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="11.579" cy="7.27803" r="4.77803" stroke="${
				fillColor || "#200E32"
			}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.00002 18.7013C3.99873 18.3654 4.07385 18.0336 4.2197 17.7311C4.67736 16.8157 5.96798 16.3306 7.03892 16.1109C7.81128 15.9461 8.59431 15.836 9.38217 15.7814C10.8408 15.6533 12.3079 15.6533 13.7666 15.7814C14.5544 15.8366 15.3374 15.9467 16.1099 16.1109C17.1808 16.3306 18.4714 16.77 18.9291 17.7311C19.2224 18.3479 19.2224 19.0639 18.9291 19.6807C18.4714 20.6418 17.1808 21.0812 16.1099 21.2917C15.3384 21.4633 14.5551 21.5766 13.7666 21.6304C12.5794 21.731 11.3866 21.7494 10.1968 21.6853C9.92221 21.6853 9.65677 21.6853 9.38217 21.6304C8.59663 21.5772 7.81632 21.464 7.04807 21.2917C5.96798 21.0812 4.68652 20.6418 4.2197 19.6807C4.0746 19.3746 3.99955 19.04 4.00002 18.7013Z" stroke="${
				fillColor || "#200E32"
			}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

		case "bag":
			return `<svg width="${width || 24}" height="${
				height || 24
			}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.48626 21.5H15.8341C18.9004 21.5 21.2528 20.3925 20.5847 15.9348L19.8066 9.89363C19.3947 7.66937 17.976 6.81812 16.7311 6.81812H6.55262C5.28946 6.81812 3.95308 7.73345 3.4771 9.89363L2.69907 15.9348C2.13157 19.8891 4.4199 21.5 7.48626 21.5Z" stroke="${
				fillColor || "#200E32"
			}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.34896 6.59848C7.34896 4.21241 9.28325 2.27812 11.6693 2.27812V2.27812C12.8183 2.27325 13.9219 2.72628 14.7361 3.53703C15.5503 4.34778 16.008 5.44947 16.008 6.59848V6.59848" stroke="${
				fillColor || "#200E32"
			}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.70365 11.102H8.74942" stroke="${
				fillColor || "#200E32"
			}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.5343 11.102H14.5801" stroke="${
				fillColor || "#200E32"
			}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

		default:
			return "not found icon";
			break;
	}
}
