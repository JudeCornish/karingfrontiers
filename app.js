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
