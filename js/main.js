//google map

function initMap() {
	// map options
	var options = {
	   zoom: 12,
	   center: {lat:40.054522, lng:-83.000063}
	}
	// new map
	var map = new google.maps.Map(document.getElementById('map'), options);
	// add marker
	var infowindow = new google.maps.InfoWindow({
		content: "Clintonville Natural Foods <br> 4398 Indianola Avenue,<br> Columbus, Ohio 43214, United States"
	});
	
	var marker = new google.maps.Marker({ 
		map:map, 
		animation: google.maps.Animation.DROP,
		position:{lat:40.054522, lng:-83.000063},
		title: 'Clintonville Natural Foods'
   });
   
   google.maps.event.addListener(marker, 'mouseover', function() {
	infowindow.open(map,marker);
  });
  }
  
 


$(function(){
	$('#header').load('header.html', function () {
	  $('ul.nav li a[href="' + window.location.pathname + '"]', this).parent().addClass('active').siblings().removeClass('active');
	}); 
	$('#footer').load('footer.html'); 
  });

// $(function(){
// 	$("#header").load("header.html"); 
// 	$("#footer").load("footer.html"); 
//   });
// $(document).ready(function() {
// 	// get current URL path and assign 'active' class
// 	var pathname = window.location.pathname;
// 	$('ul.nav li > a[href="/'+pathname+'"]').parent().addClass('active');
// });


;(function () {
	
	'use strict';

	// iPad and iPod detection	
	var isiPad = function(){
	  return (navigator.platform.indexOf("iPad") != -1);
	};

	var isiPhone = function(){
	    return (
	      (navigator.platform.indexOf("iPhone") != -1) || 
	      (navigator.platform.indexOf("iPod") != -1)
	    );
	};

	
	// Fast Click for ( Mobiles/Tablets )
	var mobileFastClick = function() {
		if ( isiPad() && isiPhone()) {
			FastClick.attach(document.body);
		}
	};

	var menuAnimate = function(o, mleft, duration, mul) {
		var navLi = $('#nav > ul > li');
		navLi.each( function(k){
			var el = $(this);
			setTimeout(function() {
				el.velocity(
					{ opacity: o, marginLeft: mleft }, 
					{ duration: duration }
				);
			},  k * mul );
		});
		
	};

	var burgerMenu = function() {
		$('body').on('click', '.js-nav-toggle', function(){
			$('#nav > ul > li').css({ marginLeft: -50, opacity: 0 });
			$(this).toggleClass('active');
			
			var mainNav = $('#main-nav');
			mainNav.slideToggle(400).toggleClass('active');
			$('body').css({"marginTop": "100"});

			if ( mainNav.hasClass('active') ) {
				menuAnimate(1, 0, 400, 200);	
			} else {
				menuAnimate(0, -50, 1, 0);	
			}

		});
	};

	var mobileMenuState = function() {
		if ( $(window).width() > 768 ) {
			$('#main-nav').removeClass('active').show();
			$('#nav > ul > li').css({
				opacity: 1,
				marginLeft: 0
			})
		} else {
			$('.js-nav-toggle').removeClass('active');
			$('#main-nav').hide();
		}
	};

	var wResize = function() {
		mobileMenuState();
		$(window).resize(function(){
			mobileMenuState();
		});
	};


	// Easy Repsonsive Tabs
	var responsiveTabs = function(){
		$('#tab-feature').easyResponsiveTabs({
	      type: 'default',
	      width: 'auto', 
	      fit: true, 
	      inactive_bg: '',
	      active_border_color: '',
	      active_content_border_color: '',
	      closed: 'accordion',
	      tabidentify: 'hor_1'
	            
	    });
	    $('#tab-feature-center').easyResponsiveTabs({
	      type: 'default',
	      width: 'auto',
	      fit: true, 
	      inactive_bg: '',
	      active_border_color: '',
	      active_content_border_color: '',
	      closed: 'accordion', 
	      tabidentify: 'hor_1' 
	      
	    });
	    $('#tab-feature-vertical').easyResponsiveTabs({
	      type: 'vertical',
	      width: 'auto',
	      fit: true,
	      inactive_bg: '',
	      active_border_color: '',
	      active_content_border_color: '',
	      closed: 'accordion',
	      tabidentify: 'hor_1'
	    });
	};

	// Owl Carousel
	var owlCarouselFeatureSlide = function() {
		$('.owl-carousel').owlCarousel({
			animateOut: 'fadeOut',
			autoplay: true,
			autoplayTimeout: 5000,
			autoHeight: true,
			items: 1,
		    margin: 0,
		    responsiveClass: true,
		    nav: true,
			dots: true,
			loop:true,
			// smartSpeed: 500,
			navText : ["<i class='icon icon-chevron-left'></i>","<i class='icon icon-chevron-right'></i>"]
		});
	};

	var cafeCarousel = function(){
		$('.carousel-cafe').owlCarousel({
			autoplay: true,
			autoplayTimeout: 3000,
			autoplayHoverPause: true,
			autoHeight: true,
			loop: true,
			margin: 30,
			stagePadding: 0,
			nav: false,
			dotsEach: true,
			slideSpeed: 500,
			// navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
			responsive:{
				0:{
					items: 1
				},
				600:{
					items: 3
				},
				1000:{
					items: 3
				}
			}
		});
	}

	var productCarousel = function(){
		$('.carousel-product').owlCarousel({
		loop: true,
		margin: 10,
		nav: true,
		navText: [
		  "<i class='fa fa-caret-left'></i>",
		  "<i class='fa fa-caret-right'></i>"
		],
		autoplay: true,
		autoplayHoverPause: true,
		responsive: {
		  0: {
			items: 1
		  },
		  600: {
			items: 3
		  },
		  1000: {
			items: 5
		  }
		}
	  });
	}
	

	// MagnificPopup
	var magnifPopup = function() {
		$('.image-popup').magnificPopup({
			type: 'image',
		  gallery:{
		    enabled:true
		  }
		});
	};

	// Smooth Scroll Top
	var sScrollTop = function () {

		$(window).scroll(function(){
			if ($(window).scrollTop() > 100 ) {
				$('.gotop').show();
			} else {
				$('.gotop').hide();
			}
		});
		$('.gotop').click(function(event){

		    $('html, body').animate({
		        scrollTop: 0
		    }, 500);

		    event.preventDefault();
		    return false;
		});
	};


	

	$(function(){
		burgerMenu();
		mobileFastClick();
		responsiveTabs();
		magnifPopup();
		owlCarouselFeatureSlide();
		cafeCarousel();
		productCarousel();
		sScrollTop();
		wResize();
	});


}());