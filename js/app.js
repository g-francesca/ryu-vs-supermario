$(document).ready(function() {
	function playHadouken () {
	  $('#hadouken-sound')[0].volume = 0.5;
	  $('#hadouken-sound')[0].load();
	  $('#hadouken-sound')[0].play();
	}
	$('.ryu').on('mouseenter', function() {
		$('.ryu-still').hide();
		$('.ryu-cool').hide();
		$('.ryu-ready').show();
	})
	.on('mouseleave', function() {
		$('.ryu-ready').hide();
		$('.ryu-cool').hide();
		$('.ryu-still').show();
	})
	.on('mousedown', function() {
		// when we click on Ryu, the mouse already has to be over him, so that means we’ll need to hide div.ryu-ready, not div.ryu-still
	    $('.ryu-still').hide();
	    $('.ryu-ready').hide();
	    $('.ryu-cool').hide();
	    $('.ryu-throwing').show();
	    playHadouken();
	    $('.hadouken').show()
	    .animate(
			{'left': '160px'},
			800,
			function() {
				$(this).hide();
				$(this).css('left', '-212px');
				$('.savemario').addClass('animated fadeInRight');
				$('.mario-still').animate( 
					{'margin-top': '0'},
				 	200,
				 	function() {
				 		$('.mario-still').animate({'margin-top': '130px'}, 150);
				 	}
				)
			}
		);
  	})
  	.on('mouseup', function() {
	    $('.ryu-throwing').hide();
	    $('.ryu-ready').show();
  	});

  	$(document).on('keydown', function(e) {
  		if(e.keyCode === 88) {
  			$('.ryu-still').hide();
			$('.ryu-ready').hide();
  			$('.ryu-throwing').hide();
  			$('.ryu-cool').show();
  			$('.savemario').text('Thank you!');
  		}
  	}).on('keyup', function(e) {
  		if(e.keyCode === 88) {
  			$('.ryu-cool').hide();
  			$('.ryu-still').show();
  			$('.savemario').text('Plaese, press X to save my life!');
  		}
  	}); 
 })