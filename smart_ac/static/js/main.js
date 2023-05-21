"user strict";

$(document).ready(function () {

	//--Owl Carousel--//
	$(".capabilities__wrap").owlCarousel({
		loop: true,
		margin: 24,
		autoplayTimeout: 1000,
		autoplay: false,
		nav: false,
		dots: true,
		responsiveClass: true,
		navText: [
			'<i class="material-symbols-outlined">chevron_left</i>',
			'<i class="material-symbols-outlined">chevron_right</i>',
		],
		responsive: {
			0: {
				items: 1,
			},
			500: {
				items: 1,
			},
			767: {
				items: 2,
			},
			991: {
				items: 3,
			},
			1199: {
				items: 3,
			},
			1399: {
				items: 3,
			},
		},
	});
	$(".plan__wrapper").owlCarousel({
		loop: true,
		margin: 10,
		autoplayTimeout: 1000,
		autoplay: false,
		nav: true,
		dots: false,
		responsiveClass: true,
		navText: [
			'<i class="material-symbols-outlined">chevron_left</i>',
			'<i class="material-symbols-outlined">chevron_right</i>',
		],
		responsive: {
			0: {
				items: 1,
			},
			575: {
				items: 1,
			},
			767: {
				items: 2,
			},
			991: {
				items: 2,
			},
			1199: {
				items: 2,
			},
			1499: {
				items: 2,
			},
			1999: {
				items: 2,
			},
		},
	});
	$(".testimonial__wrap").owlCarousel({
		loop: true,
		margin: 20,
		autoplayTimeout: 1000,
		autoplay: false,
		nav: true,
		stagePadding: 0,
		dots: false,
		responsiveClass: true,
		navText: [
			'<i class="material-symbols-outlined">chevron_left</i>',
			'<i class="material-symbols-outlined">chevron_right</i>',
		],
		responsive: {
			0: {
				items: 1,
			},
			400: {
				items: 1,
			},
			767: {
				items: 2,
			},
			991: {
				items: 2,
			},
			1199: {
				items: 2,
			},
			1399: {
				items: 2,
			},
			1499: {
				items: 2,
			},
			1699: {
				items: 2,
			},
		},
	});
	$(".testimonial__wrap__two").owlCarousel({
		loop: true,
		margin: 20,
		autoplayTimeout: 1000,
		autoplay: false,
		nav: true,
		stagePadding: 0,
		dots: false,
		responsiveClass: true,
		navText: [
			'<i class="material-symbols-outlined">chevron_left</i>',
			'<i class="material-symbols-outlined">chevron_right</i>',
		],
		responsive: {
			0: {
				items: 1,
			},
			400: {
				items: 1,
			},
			767: {
				items: 1,
			},
			991: {
				items: 1,
			},
			1199: {
				items: 1,
			},
			1399: {
				items: 1,
			},
			1499: {
				items: 1,
			},
			1699: {
				items: 1,
			},
		},
	});
	$(".testimonial__wrap__wided").owlCarousel({
		loop: true,
		margin: 20,
		autoplayTimeout: 1000,
		autoplay: false,
		nav: true,
		stagePadding: 0,
		dots: false,
		responsiveClass: true,
		navText: [
			'<i class="material-symbols-outlined">chevron_left</i>',
			'<i class="material-symbols-outlined">chevron_right</i>',
		],
		responsive: {
			0: {
				items: 1,
			},
			400: {
				items: 1,
			},
			767: {
				items: 1,
			},
			991: {
				items: 1,
			},
			1199: {
				items: 1,
			},
			1399: {
				items: 1,
			},
			1499: {
				items: 1,
			},
			1699: {
				items: 1,
			},
		},
	});
	$(".testi__three__wrap").owlCarousel({
		loop: true,
		margin: 20,
		autoplayTimeout: 1000,
		autoplay: false,
		nav: false,
		stagePadding: 0,
		dots: true,
		responsiveClass: true,
		navText: [
			'<i class="material-symbols-outlined">chevron_left</i>',
			'<i class="material-symbols-outlined">chevron_right</i>',
		],
		responsive: {
			0: {
				items: 1,
			},
			400: {
				items: 1,
			},
			767: {
				items: 1,
			},
			991: {
				items: 1,
			},
			1199: {
				items: 1,
			},
			1399: {
				items: 1,
			},
			1499: {
				items: 1,
			},
			1699: {
				items: 1,
			},
		},
	});
	$(".include__benefits__wrap").owlCarousel({
		loop: true,
		margin: 24,
		autoplayTimeout: 1000,
		autoplay: false,
		nav: true,
		dots: false,
		responsiveClass: true,
		navText: [
			'<i class="material-symbols-outlined">chevron_left</i>',
			'<i class="material-symbols-outlined">chevron_right</i>',
		],
		responsive: {
			0: {
				items: 1,
			},
			500: {
				items: 1,
			},
			767: {
				items: 2,
			},
			991: {
				items: 3,
			},
			1199: {
				items: 3,
			},
			1399: {
				items: 3,
			},
		},
	});
	$(".success__story__wrap").owlCarousel({
		loop: true,
		margin: 24,
		autoplayTimeout: 1000,
		autoplay: false,
		nav: true,
		dots: false,
		responsiveClass: true,
		navText: [
			'<i class="material-symbols-outlined">chevron_left</i>',
			'<i class="material-symbols-outlined">chevron_right</i>',
		],
		responsive: {
			0: {
				items: 1,
			},
			570: {
				items: 2,
			},
			767: {
				items: 2,
			},
			991: {
				items: 3,
			},
			1199: {
				items: 3,
			},
			1399: {
				items: 3,
			},
		},
	});
	$(".blog__details__wrap").owlCarousel({
		loop: true,
		margin: 24,
		autoplayTimeout: 1000,
		autoplay: false,
		nav: true,
		dots: false,
		responsiveClass: true,
		navText: [
			'<i class="material-symbols-outlined">chevron_left</i>',
			'<i class="material-symbols-outlined">chevron_right</i>',
		],
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 2,
			},
			767: {
				items: 2,
			},
			991: {
				items: 3,
			},
			1199: {
				items: 3,
			},
			1399: {
				items: 3,
			},
		},
	});
	$(".edu__client").owlCarousel({
		loop: true,
		margin: 1,
		autoplayTimeout: 1000,
		autoplay: false,
		nav: true,
		dots: false,
		responsiveClass: true,
		navText: [
			'<i class="material-symbols-outlined">chevron_left</i>',
			'<i class="material-symbols-outlined">chevron_right</i>',
		],
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 1,
			},
			767: {
				items: 1,
			},
			991: {
				items: 1,
			},
			1199: {
				items: 1,
			},
			1399: {
				items: 1,
			},
		},
	});
	//--Owl Carousel--//

	//--Header Menu--//
	$(".header-bar").on("click", function (e) {
		$(".main-menu, .header-bar").toggleClass("active");
	});
	$(".main-menu li a").on("click", function (e) {
		var element = $(this).parent("li");
		if (element.hasClass("open")) {
			element.removeClass("open");
			element.find("li").removeClass("open");
			element.find("ul").slideUp(300, "swing");
		} else {
			element.addClass("open");
			element.children("ul").slideDown(300, "swing");
			element.siblings("li").children("ul").slideUp(300, "swing");
			element.siblings("li").removeClass("open");
			element.siblings("li").find("li").removeClass("open");
			element.siblings("li").find("ul").slideUp(300, "swing");
		}
	});
	//menu top fixed bar
	var fixed_top = $(".header-section");
	$(window).on("scroll", function () {
		if ($(this).scrollTop() > 220) {
			fixed_top.addClass("menu-fixed animated fadeInDown");
			fixed_top.removeClass("slideInUp");
			$("body").addClass("body-padding");
		} else {
			fixed_top.removeClass("menu-fixed fadeInDown");
			fixed_top.addClass("slideInUp");
			$("body").removeClass("body-padding");
		}
	});
	//menu top fixed bar
	$(".scrollToTop").on("click", function () {
		$("html, body").animate(
			{
				scrollTop: 0,
			},
			700
		);
		return false;
	});
	//--Header Menu--//
	
	// password hide//
	$(".toggle-password, .toggle-password2, .toggle-password3, .toggle-password4, .toggle-password5").click(function() {
		$(this).toggleClass("fa-eye fa-eye-slash");
		var input = $($(this).attr("id"));
		if (input.attr("type") == "password") {
			input.attr("type", "text");
		} else {
			input.attr("type", "password");
		}
	});
	// password hide//

	//Serach Popup
	$('#search, #search2').click(function() {
		$('.search-form, .search-form2').animate({right: 0}, 50);
		$('.search-popup, .search-popup2').show();
		$('.search-bg, .search-bg2').click(function() {
			$('.search-popup, .search-popup2').hide();
			$('.search-form, .search-form2').animate({right: '-100%'}, 50);
		});
		});
	//--Search Popup--//

	// cart popup //
      // cart
	  let quantity = 0;
	  let price = 0;
	  $(".cart-item-quantity-amount, .product-quant").html(quantity);
	  $(".total-price, .product-pri").html(price.toFixed(2));
	  $(".cart-increment, .cart-incre").on("click", function() {
		  if (quantity <= 4) {
			  quantity++;
			  $(".cart-item-quantity-amount, .product-quant").html(quantity);
			  var basePrice = $(".base-price, .base-pri").text();
			  $(".total-price, .product-pri").html((basePrice * quantity).toFixed(2));
		  }
	  });

	  $(".cart-decrement, .cart-decre").on("click", function() {
		  if (quantity >= 1) {
			  quantity--;
			  $(".cart-item-quantity-amount, .product-quant").html(quantity);
			  var basePrice = $(".base-price, .base-pri").text();
			  $(".total-price, .product-pri").html((basePrice * quantity).toFixed(2));
		  }
	  });

	  $(".cart-item-remove>a").on("click", function() {
		  $(this).closest(".cart-item").hide(300);
	  });

	  // payment method
	  var paymentMethod = $("input[name='pay-method']:checked").val();
	  $(".payment").html(paymentMethod);
	  $(".checkout__radio-single").on("click", function() {
		  var paymentMethod = $("input[name='pay-method']:checked").val();
		  $(".payment").html(paymentMethod);
	  });

	//--Magnifiqpopup--//
	$('.video-btn').magnificPopup({
		type: 'iframe',
		callbacks: {
			
	  	}
	});
	//--Magnifiqpopup--//

	//--Odometer--//
	$(".odometer-item").each(function () {
		$(this).isInViewport(function (status) {
			if (status === "entered") {
				for (
					var i = 0;
					i < document.querySelectorAll(".odometer").length;
					i++
				) {
					var el = document.querySelectorAll(".odometer")[i];
					el.innerHTML = el.getAttribute("data-odometer-final");
				}
			}
		});
	});
	//--Odometer--//

	//--Wow Animation--//
	new WOW().init();
	//--Wow Animation--//

	//--On hover img change--//
	$(document).ready(function () {
  
		//save big images
		  var $bigItem = $('.image-big-list-item');
		//save small images
		  var $smallItem = $('.image-small-list-item');
		//click and moseenter function on small image
		//you could delete one eventlistener
		  $smallItem.on('click mouseenter', function () {
			//remove active class from all items
			  $bigItem.removeClass('active');
			  $smallItem.removeClass('active');
			//add active class to item as small item's index
			  $bigItem.eq($(this).index()).addClass('active');
			  $smallItem.eq($(this).index()).addClass('active');
		  });
		
	   });
	//--On hover img change--//

	//--Preloader--//
	setTimeout(function(){
		$('.preloader__wrap').fadeToggle();
	}, 1000);
	//--Preloader--//

	//Dark Light Template Area//
	$(".mode--toggle").on("click", function () {
		setTheme(localStorage.getItem("theme"));
	});
	if (localStorage.getItem("theme") == "light-theme") {
		localStorage.setItem("theme", "light-theme");
	} else {
		localStorage.setItem("theme", "light-theme");
	}
	setTheme(localStorage.getItem("theme"));
	function setTheme(theme) {
		if (theme == "light-theme") {
			localStorage.setItem("theme", "light-theme");
			$("html").addClass(theme);
			$(".mode--toggle").find("img").attr("src", "img/moon.png");
		} else {
			localStorage.setItem("theme", "light-theme");
			$("html").removeClass("light-theme");
			$(".mode--toggle").find("img").attr("src", "img/moon.png");
		}
	}
	//Dark Light Template Area//

	//
	function getVals(){
		// Get slider values
		let parent = this.parentNode;
		let slides = parent.getElementsByTagName("input");
		  let slide1 = parseFloat( slides[0].value );
		  let slide2 = parseFloat( slides[1].value );
		// Neither slider will clip the other, so make sure we determine which is larger
		if( slide1 > slide2 ){ let tmp = slide2; slide2 = slide1; slide1 = tmp; }
		
		let displayElement = parent.getElementsByClassName("rangeValues")[0];
			displayElement.innerHTML = "$" + slide1 + " - $" + slide2;
	}
	  
	window.onload = function(){
	// Initialize Sliders
	let sliderSections = document.getElementsByClassName("range-slider");
		for( let x = 0; x < sliderSections.length; x++ ){
			let sliders = sliderSections[x].getElementsByTagName("input");
			for( let y = 0; y < sliders.length; y++ ){
			if( sliders[y].type ==="range" ){
				sliders[y].oninput = getVals;
				// Manually trigger event first time to display values
				sliders[y].oninput();
			}
			}
		}
	}

	

});


progressBar: () => {
	const pline = document.querySelectorAll(".progressbar.line");
	const pcircle = document.querySelectorAll(".progressbar.semi-circle");
	pline.forEach(e => {
		var line = new ProgressBar.Line(e, {
			strokeWidth: 6,
			trailWidth: 6,
			duration: 3000,
			easing: 'easeInOut',
			text: {
				style: {
					color: 'inherit',
					position: 'absolute',
					right: '0',
					top: '-30px',
					padding: 0,
					margin: 0,
					transform: null
				},
				autoStyleContainer: false
			},
			step: (state, line) => {
				line.setText(Math.round(line.value() * 100) + ' %');
			}
		});
		var value = e.getAttribute('data-value') / 100;
		new Waypoint({
			element: e,
			handler: function() {
				line.animate(value);
			},
			offset: 'bottom-in-view',
		})
	});
	pcircle.forEach(e => {
		var circle = new ProgressBar.SemiCircle(e, {
			strokeWidth: 6,
			trailWidth: 6,
			duration: 2000,
			easing: 'easeInOut',
			step: (state, circle) => {
				circle.setText(Math.round(circle.value() * 100));
			}
		});
		var value = e.getAttribute('data-value') / 100;
		new Waypoint({
			element: e,
			handler: function() {
				circle.animate(value);
			},
			offset: 'bottom-in-view',
		})
	});
}





