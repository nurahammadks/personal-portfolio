$(document).ready(function(){
	$('button').click(function(){
		$('.content-section-q a').fadeToggle(500);
		return false
	});
	WOW = new WOW({
		boxClass                  :       'wow',      //default
		animateClass              :       'animated', //default
		offset                    :       0,          //default
		mobile                    :       true,       //default
		live                      :       true        //default
	})
	WOW.init();
	$('.mobile-menu').click(function(){
		$('nav').fadeToggle(300);
		return false
	});
});