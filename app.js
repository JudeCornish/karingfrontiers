const selectElement = (element) => document.querySelector(element);

selectElement(".menu-icons").addEventListener("click", () => {
	selectElement("nav").classList.toggle("active");
});

$(function () {
	$(".testimonials").slick({
		infinite: true,
		speed: 800,
		autoplay: true,
		autoplayspeed: 20000,
		slidesToShow: 1,
		arrows: true,
		responsive: [
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
					dots: true,
				},
			},
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		],
	});
});

var animation = bodymovin.loadAnimation({
	container: document.getElementById("animated-book-img"), // Required
	path: "/resources/img/books.json", // Required
	renderer: "svg", // Required
	loop: true, // Optional
	autoplay: true, // Optional
	name: "Hello World", // Name for future reference. Optional.
});

var animation = bodymovin.loadAnimation({
	container: document.getElementById("animated-heart-img"), // Required
	path: "/resources/img/heart2.json", // Required
	renderer: "svg", // Required
	loop: true, // Optional
	autoplay: true, // Optional
	name: "Hello World", // Name for future reference. Optional.
});

// Detect request animation frame
var scroll =
	window.requestAnimationFrame ||
	// IE Fallback
	function (callback) {
		window.setTimeout(callback, 1000 / 60);
	};
var elementsToShow = document.querySelectorAll(".show-on-scroll");

function loop() {
	elementsToShow.forEach(function (element) {
		if (isElementInViewport(element)) {
			element.classList.add("is-visible");
		} else {
			element.classList.remove("is-visible");
		}
	});

	scroll(loop);
}

// Call the loop for the first time
loop();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
	// special bonus for those using jQuery
	if (typeof jQuery === "function" && el instanceof jQuery) {
		el = el[0];
	}
	var rect = el.getBoundingClientRect();
	return (
		(rect.top <= 0 && rect.bottom >= 0) ||
		(rect.bottom >=
			(window.innerHeight || document.documentElement.clientHeight) &&
			rect.top <=
				(window.innerHeight || document.documentElement.clientHeight)) ||
		(rect.top >= 0 &&
			rect.bottom <=
				(window.innerHeight || document.documentElement.clientHeight))
	);
}
