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
			$(this).addClass('boxChange');
		},
		function(){
			$(this).removeClass('boxChange');
		}
	);

	$('#box3').hover(
		function(){
			$(this).addClass('boxChange');
		},
		function(){
			$(this).removeClass('boxChange');
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