$('nav a').click(function(e){
	e.preventDefault();
	var id =  $(this).attr('href');
		targetOffset = $(id).offset().top;
	$('html, body').animate({
		scrollTop: targetOffset -59
	}, 500);
		
});

/* navbar muda de cor ao scroll do mouse */
$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});

