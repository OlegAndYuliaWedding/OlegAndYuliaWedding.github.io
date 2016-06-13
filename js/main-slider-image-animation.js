	'use strict';
	
	// MAIN SLIDER-FLEXSLIDER
	//==================================================================================
	$(window).load(function() {
		$('#main-slider.flexslider').flexslider(
		{
			animation : "fade",
			controlNav: false,
			directionNav: true,
			slideshowSpeed: 10000,  
			animationSpeed:2000,
			pauseOnAction: false,
			animationLoop: true, 
			pauseOnHover: true,
			start:function(slider){
				if( !device.tablet() && !device.mobile() || isIE11desktop() ) {
					//Loop Animation 
					$('.slides').find(".flex-active-slide > .loop-animation").addClass("animate");
				}
			},
			after:function(){
				if( !device.tablet() && !device.mobile() || isIE11desktop() ) {
					//Loop Animation
					$('.slides').find("li > .loop-animation").removeClass("animate");
					$('.slides').find(".flex-active-slide > .loop-animation").addClass("animate");
				}			
			}		
			
		});
	});
	
	// Check FIREFOX 
	//----------------------------------------------------------------------------------
	var is_firefox = function is_firefox() {
		if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1){
			return 1;
		}
	}
	
	// Check IE11 (Not Windows Phone)
	///----------------------------------------------------------------------------------
	var isIE11desktop = function isIE11desktop() {	
 		if (!!navigator.userAgent.match(/Trident\/7\./) && window.navigator.userAgent.indexOf("Windows Phone") < 0) {
   		 	return 1;
		}
	}
	
	if (is_firefox() || isIE11desktop()){
		$('.flexslider .slides').addClass("css-fade");
	}
	