$(document).ready(function() {
	function playHadouken () {
	  $('#hadouken-sound')[0].volume = 0.5;
	  $('#hadouken-sound')[0].load();
	  $('#hadouken-sound')[0].play();
	}
	$('.ryu').on('mouseenter', function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.on('mouseleave', function() {
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	})
	.on('mousedown', function() {
		// when we click on Ryu, the mouse already has to be over him, so that means we’ll need to hide div.ryu-ready, not div.ryu-still
	    $('.ryu-ready').hide();
	    $('.ryu-throwing').show();
	    playHadouken();
	    $('.hadouken').show()
	    .animate(
			{'left': '300px'},
			800,
			function() {
			$(this).hide();
			$(this).css('left', '-212px');
			}
		);
  	})
  	.on('mouseup', function() {
	    $('.ryu-throwing').hide();
	    $('.ryu-ready').show();
  	});
 })