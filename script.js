$(document).ready(function() {


	$('#about').click(function(){

		$('html, body').animate({
        scrollTop: $("#aboutPG").offset().top
    }, 1000);
	});

	$('#visButton').click(function(){

		$('html, body').animate({
        scrollTop: $("#visualizations").offset().top
    }, 1000);
	});

	$('#disButton').click(function(){

		$('html, body').animate({
        scrollTop: $("#predictor").offset().top
    }, 1000);
	});

});