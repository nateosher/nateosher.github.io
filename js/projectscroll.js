// projectscroll.js
// a script for controlling the scroll on the projects page of my website

document.addEventListener("DOMContentLoaded", function(){
	var nav  = document.getElementById("navArrow");
	var git	 = document.getElementById("gitbutton");
	var link = document.getElementById("linkedinbutton");
	var td   = document.getElementById("testDiv");

	var sections = [];
	sections.push(td);


	nav.addEventListener("click", function(){
		Velocity(nav, "scroll", {duration : 500, offset : 65});
		// Velocity(git, {color : "#ffffff", duration : 200});
		// Velocity(link, {color : "#ffffff", duration : 200});
		// Velocity(nav, {border : "#40px solid white", duration : 200});
	});
});