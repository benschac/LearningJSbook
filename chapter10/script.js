$(document).ready(function() {
	// buind a click event to the only button element in the document
	$('button').click( function() {
		$('.module').animate({
			'height' : '0px'
		}, 1000, function() {

			// after animation is complete, change the button text
			$('button').text('now what, smart guy?');
		});
	});

});