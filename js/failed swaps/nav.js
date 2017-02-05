$(document).ready(function(){
	var home = true;

	$("#homenav").click(function(){
		if(!home){
			$("#largeName").html("Nate Osher");
			$("#above").append("<div id='sub'></div>");
			home = true;
		}
	});

	$("#projectsnav").click(function(){
		if(home){
			$("#largeName").html("Projects");
			$("#sub").remove();
			home = false;
		}
	});
});