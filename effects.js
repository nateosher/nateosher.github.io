// Effects/ etc.

$(document).ready(function(){

	$('.box').hover(
		function(){
			$(this).addClass('boxChange');
		},
		function(){
			$(this).removeClass('boxChange');
		}
	);

	$('.button').hover(
		function(){
			$(this).animate({height: '+=20px'}, 200);
 		},
		function(){
			$(this).animate({height: '-=20px'}, 200);
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

	// $('.sideMenu').hover(
	// 	function(){
	// 		$(this).animate({left: '+=375px'}, 500);
	// 	},
	// 	function(){
	// 		$(this).animate({left: '-=375'}, 500);
	// 	}
	// );

	// $('.sideMenu ul li').hover(
	// 	function(){
	// 		$(this).addClass('boxChange');
	// 	},
	// 	function(){
	// 		$(this).removeClass('boxChange');
	// 	}
	// );

});