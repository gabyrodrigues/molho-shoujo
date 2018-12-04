// Rolamento deslizante
$('a[href*="#"]').on('click', function (e) {
	e.preventDefault();

	$('html, body').animate({
		scrollTop: $($(this).attr('href')).offset().top
	}, 500, 'linear');
});

// Girar fotos em ação do hover
var hoverTimeout;
$('.photo-grid-item').hover(function() {
	clearTimeout(hoverTimeout);
	$(this).addClass('flipped');
}, function() {
	var $self = $(this);
	hoverTimeout = setTimeout(function() {
		$('.photo-grid-item').removeClass('flipped');
	}, 1600);
});