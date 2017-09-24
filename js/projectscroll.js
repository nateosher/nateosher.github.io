// projectscroll.js
// a script for controlling the scroll on the projects page of my website

document.addEventListener("DOMContentLoaded", function(){
	var nav  = document.getElementById("navArrow");
	var git	 = document.getElementById("gitbutton");
	var link = document.getElementById("linkedinbutton");
	var pocket = document.getElementById("PocketPal");
	var pocketCard = document.getElementById("pocket-card");
	var clickerCard = document.getElementById("clicker-card");


	nav.addEventListener("click", function(){
		Velocity(nav, "scroll", {duration : 500, offset : 55});
		// Velocity(git, {color : "#ffffff", duration : 200});
		// Velocity(link, {color : "#ffffff", duration : 200});
		// Velocity(nav, {border : "#40px solid white", duration : 200});
	});

	// document.addEventListener('scroll', function(){
	// 	var yCoord = document.documentElement.scrollTop || 
	// 					window.pageYOffset;
	// 	console.log(yCoord);
	// });

	document.addEventListener('scroll', function(){
		var yCoord = document.documentElement.scrollTop || 
						window.pageYOffset;
		if(yCoord < 400){
			pocketCard.style.padding = "7% 17% 7% 17%"
			pocketCard.style.boxShadow = "none"
		}else if(yCoord >= 400 && yCoord < 1200){
			pocketCard.style.padding = "0 0 0 0";
			clickerCard.style.padding = "7% 17% 7% 17%";
			pocketCard.style.boxShadow = "0 7px 14px #050505";
			clickerCard.style.boxShadow = "none";
		}else if(yCoord >= 1200){
			pocketCard.style.padding = "7% 17% 7% 17%";
			clickerCard.style.padding = "0 0 0 0";
			pocketCard.style.boxShadow = "none";
			clickerCard.style.boxShadow = "0 7px 14px #050505";
		}
		// }else if(yCoord <= 700){
		// 	pocket.style.border = "50px solid #FF9912;"
		// }
	});
});