$(document).ready(function(){
	
	// Single page menu
	$(".navbar .nav-link").on('click', function(event) {
		var hash = this.hash;
		if (this.hash !== "") {
			event.preventDefault();
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 1000, function(){
				window.location.hash = hash;
			});
		} 
	});
	
	$(document).click(function (event) {
		var clickover = $(event.target);
		var _opened = $(".navbar-collapse").hasClass("show");
		if (_opened === true && !clickover.hasClass("navbar-toggler")) {
			$(".navbar-toggler").click();
		}
	});
	
	// Fixed Menu On scroll
	$(window).bind('scroll', function () {
    if ($(window).scrollTop() > 0) {
			$('.main_header').addClass('fixed');
		} else {
			$('.main_header').removeClass('fixed');
		}
	});
	
	var swiper = new Swiper( '.swiper-container.two', {
		pagination: '.swiper-pagination',
		spaceBetween: 30,
		paginationClickable: true,
		loop: true,
		centeredSlides: true,
		slidesPerView: 3,
		breakpoints: {
			640: {
			  slidesPerView: 1,
			  spaceBetween: 20,
			},
			768: {
			  slidesPerView: 2,
			  spaceBetween: 25,
			},
			1024: {
			  slidesPerView: 3,
			  spaceBetween: 30,
			},
		}
	});
	
});