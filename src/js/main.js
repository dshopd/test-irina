$(document).ready(function() {

$("#js-scale-number").keyup(function () {
	if( $(this).val() < 1000 ) {
		var value = $(this).val();
	
		var transform = Math.round(value/5.55);

		var pos ='rotate(' + transform + 'deg)';
		$("#js-scale-number").css('border','none' );
		$("#js-pos").css("transform", pos )
	} else {
		$("#js-scale-number").css('border','1px solid red' );
		$("#js-scale-number").empty();
	}
	
}).keyup();


});
