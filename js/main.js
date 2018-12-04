// Rolamento deslizante por link
$('a[href*="#"]').on('click', function (e) {
	e.preventDefault();

	$('html, body').animate({
		scrollTop: $($(this).attr('href')).offset().top
	}, 500, 'linear');
});

//Rolagem deslizante por botão
$(".btn-confirmar").click(function() {
    $('html, body').animate({
        scrollTop: $("#event-form").offset().top
    }, 1000);
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
	}, 200);
});