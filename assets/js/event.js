$(document).ready(function(){
    $(".design-cont").hover(function(){
        $(".dev-cont > h3").hide();
        $(".dev-cont > .work-btn").hide();
    }, function(){
	    $(".dev-cont > h3").show();
	    $(".dev-cont > .work-btn").show();
    });
    
    $(".dev-cont").hover(function(){
        $(".design-cont > h3").hide();
        $(".design-cont > .work-btn").hide();
    }, function(){
	    $(".design-cont > h3").show();
	    $(".design-cont > .work-btn").show();
    });
    
    $(".gal-img").hover(function(){
	    $(".gal-img").addClass("grayscale-gallery");
	    $(this).removeClass("grayscale-gallery");
	}, function(){
		$(".gal-img").removeClass("grayscale-gallery");	    
    });
    
//     Darkens Nav link color on scroll down
    
    $(window).scroll(function(){
	    if ($(document).scrollTop() > 100) {
			$('a.nav-link').addClass('text-scroll');
  		} else {
  			$('a.nav-link').removeClass('text-scroll');
  		}
    });
});