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

		if (typeof dataIconName === "string") {
			if (!iconNames.find((iconName) => iconName === dataIconName)) {
				iconNames.push(dataIconName || "");
			}

			iconWidths.push(dataIconWidth || "");
			iconHeights.push(dataIconHeight || "");
			iconFills.push(dataIconFill || "");
		}
	});

	let iconNameElements = [];
	iconNames.forEach((iconName) => {
		if (iconName !== "" && iconName.indexOf(" ") === -1) {
			iconNameElements.push(
				Array.from(document.querySelectorAll(`[data-icon=${iconName}]`))
			);
		}
	});

	if (iconNameElements.length >= 1) {
		let prevNumber = 0;

		iconNameElements.forEach((iconNameElement, firstIndex) => {
			prevNumber += iconNameElement.length;

			iconNameElement.forEach((spanEl, secondIndex) => {
				const findIndex =
					secondIndex + prevNumber - iconNameElement.length;

				const getIconSvg = getIcon(
					iconNames[firstIndex],
					iconWidths[findIndex],
					iconHeights[findIndex],
					iconFills[findIndex]
				);

				spanEl.innerHTML = getIconSvg;
			});
		});
	}
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

		case "star":
			return `<svg width="${width || 24}" height="${
				height || 24
			}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.56 21C17.4001 21.0006 17.2423 20.9629 17.1 20.89L12 18.22L6.9 20.89C6.73439 20.9771 6.54768 21.0159 6.36108 21.0022C6.17448 20.9884 5.99548 20.9226 5.84443 20.8122C5.69338 20.7018 5.57634 20.5512 5.50661 20.3776C5.43689 20.2039 5.41727 20.0142 5.45 19.83L6.45 14.2L2.33 10.2C2.19813 10.0708 2.10523 9.90709 2.0619 9.72762C2.01857 9.54816 2.02656 9.36012 2.08494 9.18497C2.14332 9.00982 2.24976 8.8546 2.3921 8.73703C2.53445 8.61945 2.70697 8.54424 2.89 8.51999L8.59 7.68999L11.1 2.55999C11.1819 2.39092 11.3097 2.24833 11.4689 2.14856C11.6281 2.0488 11.8121 1.99588 12 1.99588C12.1879 1.99588 12.3719 2.0488 12.5311 2.14856C12.6903 2.24833 12.8181 2.39092 12.9 2.55999L15.44 7.67999L21.14 8.50999C21.323 8.53424 21.4956 8.60945 21.6379 8.72703C21.7802 8.8446 21.8867 8.99982 21.9451 9.17497C22.0034 9.35012 22.0114 9.53816 21.9681 9.71762C21.9248 9.89709 21.8319 10.0608 21.7 10.19L17.58 14.19L18.58 19.82C18.609 19.9675 18.6041 20.1197 18.5656 20.265C18.527 20.4103 18.4559 20.5449 18.3576 20.6586C18.2593 20.7723 18.1364 20.8622 17.9982 20.9213C17.86 20.9805 17.7101 21.0074 17.56 21Z" fill="${
				fillColor || "#FFCC33"
			}"/>
</svg>
`;

		case "video":
			return `<svg width="${width || 32}" height="${
				width || 32
			}" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d)">
<path d="M20.6308 13.131C20.5743 13.189 20.3609 13.437 20.1622 13.641C18.9971 14.924 15.9576 17.024 14.3668 17.665C14.1252 17.768 13.5144 17.986 13.188 18C12.8753 18 12.5772 17.928 12.2927 17.782C11.9381 17.578 11.6537 17.257 11.4978 16.878C11.3975 16.615 11.2416 15.828 11.2416 15.814C11.0857 14.953 11 13.554 11 12.008C11 10.535 11.0857 9.193 11.2133 8.319C11.228 8.305 11.3838 7.327 11.5543 6.992C11.867 6.38 12.4778 6 13.1315 6H13.188C13.6137 6.015 14.509 6.395 14.509 6.409C16.0141 7.051 18.9834 9.048 20.1768 10.375C20.1768 10.375 20.5129 10.716 20.659 10.929C20.887 11.235 21 11.614 21 11.993C21 12.416 20.8724 12.81 20.6308 13.131Z" fill="${
				fillColor || "#EF4129"
			}"/>
</g>
<defs>
<filter id="filter0_d" x="0" y="0" width="32" height="32" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
</defs>
</svg>
`;

		default:
			return "not found icon";
			break;
	}
}
