$(document).ready(function() {
	$('.portfolioLinks ul li').each(function(){
		var thisID = $(this).attr('id');
		var correspondingBg = '#linksBg div[bg='+thisID+']';
		$(this).hover(function(){
			$(correspondingBg).addClass('bg-active');
		},function(){
			$(correspondingBg).removeClass('bg-active');
		});
	});
});

$(window).scroll(function(){

	var windowScrollTop = $(this).scrollTop();

	if ($(window).scrollTop() > 60) {
	    $('#logoWrapId').addClass('shift');
	} else {
	    $('#logoWrapId').removeClass('shift');
	}

});







