$(document).ready(function () {

	// galeria este declansata de click pe div
	/*$('.galerie').click(function(){
		$('.galerie img:eq(1)').animate({
			'left': 0
		}, 500, function (){
			$('.galerie img:eq(0)').css({'left':'-400px'})
			$('.galerie').append($('.galerie img:eq(0)'))
		});
	});*/

	//galeria este declansata automat la fiecare 2 secunde
	var x = setInterval(function () {
		$('.galerie img:eq(1)').animate({
			'left': 0
		}, 700, function () {
			$('.galerie img:eq(0)').css({ 'left': '-400px' })
			$('.galerie').append($('.galerie img:eq(0)'))
		});
	}, 2500)

	$('.galerie').click(function () {
		clearInterval(x);
	});

});
