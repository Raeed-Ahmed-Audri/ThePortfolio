$(window).on("load", function(){

	$(".loader").fadeOut(1000, function(){
		$(".loader").fadeOut(750);

	});

	$(".items").isotope({
	        filter: "*",
	        animationOptions: {
	            duration: 1500,
	            easing: 'linear',
	            queue: false,
	        }
	    });

})







$(document).ready(function(){
	
	$('#slides').superslides({
		animation: 'fade',
		play: 3500,
		pagination: false
	});

	var typed = new Typed(".typed", {
		strings: [ "Electrical Engineer", "Project Coordinator", "Student."],
		typeSpeed: 70,
		loop: true,
		startDelay: 1000,
		showCursor: false
	})




	$('.owl-carousel').owlCarousel({
		loop:true,
		margin:10,
		items: 4,
		dots:true,
		nav: true,
		responsive:{
		    0:{
		        items:1
		    },
		    480:{
		        items:2
		    },
		    768:{
		        items:3

		    },
		    938:{
		        items:4
			}
		}
			
	});

	
	var skillsTopOffset = $(".skillsSection").offset().top;
	$(window).scroll(function(){


		if(window.pageYOffset > skillsTopOffset - $(window).height()+300) {
			console.log(window.pageYOffset)

			$('.chart').easyPieChart({
            easing: 'easeInOut',
            barColor: '#fff',
            trackColor: false,
            scaleColor: false,
            lineWidth: 4, 
            size: 152,
            onStep: function( from, to , percent){
            	$(this.el).find('.percent').text(Math.round(percent));
            }
        });

		}
	});

	//$("[data-fancybox]").fancybox();
	  //$("[data-fancybox-portfolio]").fancybox();


	 
	 

	    $("#filters a").click(function() {
	    	event.preventDefault();
	        $("#filters .current").removeClass("current");
	        $(this).addClass("current");

	        var selector = $(this).attr("data-filter");

	        $(".items").isotope({
	            filter: selector,
	            animationOptions: {
	                duration: 1500,
	                easing: 'linear',
	                queue: false,
	            }
	        });

	        return false;
	   })
			const nav = $("#navigation"); // Use the correct selector here
			const navTop = nav.offset().top;
			const $window = $(window); // Add this line to declare the $window variable

			$window.on("scroll", stickyNavigation);

			function stickyNavigation() {
			  var body = $("body");

			  if ($(window).scrollTop() >= navTop) {
			  	body.css("padding-top", nav.outerHeight() +"px");
			    body.addClass("fixedNav");
			  } else {
			  	body.css("padding-top", 0);
			    body.removeClass("fixedNav");
			  }
			}


});
		


(function() {
    if (history.scrollRestoration) {
        history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
})();


