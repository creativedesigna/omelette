// eslint-disable-next-line
function initialize() {
	AOS.init();
}

const mapSelector = document.getElementById("map");
// eslint-disable-next-line
function initMap() {
	// The location of Uluru
	const uluru = {
		lat: Number(mapSelector.getAttribute("data-lat")),
		lng: Number(mapSelector.getAttribute("data-lng")),
	};
	// The map, centered at Uluru
	const map = new google.maps.Map(mapSelector, {
		zoom: 5,
		center: uluru,
	});
	// The marker, positioned at Uluru
	new google.maps.Marker({
		position: uluru,
		map: map,
	});
}
