


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
  
 
//load header and footer

$(function(){
	$('#header').load('header.html', function () {
	  $('ul.nav li a[href="' + window.location.pathname + '"]', this).parent().addClass('active').siblings().removeClass('active');
	}); 
	$('#footer').load('footer.html'); 
  });



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
		sScrollTop();
		wResize();
	});


}());



// init Masonry
var $grid = $('.grid').masonry({
	itemSelector: '.grid-item',
	percentPosition: true,
	columnWidth: '.grid-sizer'
  });
  // layout Masonry after each image loads
  $grid.imagesLoaded().progress( function() {
	$grid.masonry();
  });  
  

//   Cafe Carousel
$('.carousel').carousel({
	interval: 4000

  });
