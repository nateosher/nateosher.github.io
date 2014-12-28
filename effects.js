// Effects/ etc.

$(document).ready(function(){

	$('.box1').hover(
		function(){
			$(this).addClass('box1Change');
		},
		function(){
			$(this).removeClass('box1Change');
		}
	);

	$('li').hover(
		function(){
			$(this).animate({height: '+=100px'}, 500);
 		},
		function(){
			$(this).animate({height: '-=100px'}, 500);
		}
	);

	$('.pug').hover(
		function(){
			$(this).addClass('pugChange');
 		},
		function(){
			$(this).removeClass('pugChange');
		}
	);
});