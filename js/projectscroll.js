// projectscroll.js
// a script for controlling the scroll on the projects page of my website

document.addEventListener("DOMContentLoaded", function(){
	var nav  = document.getElementById("navArrow");
	var git	 = document.getElementById("gitbutton");
	var link = document.getElementById("linkedinbutton");
	var pocket = document.getElementById("PocketPal");
	var pocketCard = document.getElementById("pocket-card");
	var clickerCard = document.getElementById("clicker-card");
	var personalCard = document.getElementById("personal-card");


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

	function smallify(card){
		card.style.padding = "0 0 0 0";
		card.style.boxShadow = "0 7px 14px #050505";
	}

	function bigify(card){
		card.style.padding = "7% 17% 7% 17%";
		card.style.boxShadow = "none";
	}

	document.addEventListener('scroll', function(){
		var yCoord = document.documentElement.scrollTop || 
						window.pageYOffset;
		if(yCoord < 400){
			bigify(pocketCard);
		}else if(yCoord >= 400 && yCoord < 1200){
			smallify(pocketCard);
			bigify(clickerCard);
			bigify(personalCard);
		}else if(yCoord >= 1200 && yCoord < 1800){
			bigify(pocketCard);
			smallify(clickerCard);
			bigify(personalCard);
		}else if (yCoord >= 1800){
			bigify(pocketCard);
			bigify(clickerCard);
			smallify(personalCard);
		}
		// }else if(yCoord <= 700){
		// 	pocket.style.border = "50px solid #FF9912;"
		// }
	});
});