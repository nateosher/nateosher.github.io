// Effects/ etc.

$(document).ready(function(){

	$('.header').hover(
		function(){
			$(this).addClass('change');
		},
		function(){
			$(this).removeClass('change');
		}
	);

	$('.box1').hover(
		function(){
			$(this).addClass('box1Change');
		},
		function(){
			$(this).removeClass('box1Change');
		}
	);

	$('.box2').hover(
		function(){
			$(this).addClass('box2Change');
		},
		function(){
			$(this).removeClass('box2Change');
		}
	);

	$('li').hover(
		function(){
			$(this).animate({height: '+=100px'}, 500);
			$(this).addClass('buttonSelect');
 		},
		function(){
			$(this).animate({height: '-=100px'}, 500);
			$(this).removeClass('buttonSelect');
		}
	);
});