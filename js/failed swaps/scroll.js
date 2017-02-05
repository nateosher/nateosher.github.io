$(document).ready(function(){
	$(document).scroll(function(){
		// For debugging purposes
		// console.log($(this).scrollTop());
		$('#less').css('color', 'rgb(' + ($(this).scrollTop()/2) + ',' + ($(this).scrollTop()/2) + ',' + ($(this).scrollTop()/2) + ')');
		if($(this).scrollTop() > 700){
			$('#less').css('color', 'white');
		}
		$('#gitbutton').css('color', 'rgb(' + ($(this).scrollTop()/2) + ',' + ($(this).scrollTop()/2) + ',' + ($(this).scrollTop()/2) + ')');
		if($(this).scrollTop() > 700){
			$('#gitbutton').css('color', 'white');
		}

		$('#penbutton').css('color', 'rgb(' + ($(this).scrollTop()/2) + ',' + ($(this).scrollTop()/2) + ',' + ($(this).scrollTop()/2) + ')');
		if($(this).scrollTop() > 700){
			$('#penbutton').css('color', 'white');
		}
	});
});