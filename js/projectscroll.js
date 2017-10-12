// projectscroll.js
// a script for controlling the scroll on the projects page of my website

document.addEventListener("DOMContentLoaded", function(){
	var nav  = document.getElementById("navArrow");
	var git	 = document.getElementById("gitbutton");
	var link = document.getElementById("linkedinbutton");
	var pocket = document.getElementById("PocketPal");
	var clicker = document.getElementById("ClickGame");
	var personal = document.getElementById("Personal");
	var pocketCard = document.getElementById("pocket-card");
	var clickerCard = document.getElementById("clicker-card");
	var personalCard = document.getElementById("personal-card");

	var cards = document.querySelectorAll(".card");
	var colorTexts = document.querySelectorAll(".colorText");
	var cardHeadings = document.querySelectorAll(".cardHeading");
	var cardTexts = document.querySelectorAll(".cardText");

	var w=window;
	var d=document;
	var e=d.documentElement;
	var g=d.getElementsByTagName('body')[0];
	var x=w.innerWidth;
	var y=w.innerHeight;

	// TODO: Color text assignment HERE 

	pocket.style.height = String(y + 10) + "px";
	clicker.style.height = String(y + 10) + "px";
	personal.style.height = String(y + 10) + "px";

	function whenResized(){
		x=w.innerWidth;
		y=w.innerHeight;
		pocket.style.height = String(y + 10) + "px";
		clicker.style.height = String(y + 10) + "px";
		personal.style.height = String(y + 10) + "px";
		for(var i = 0; i < cards.length; i++){
			cards[i].style.height = "60%";
			cards[i].style.width = "60%";
		}

		document.getElementById("projects1").style.height = String(
												   Math.max((y - 190 - 50),
												   	350)) + 'px';
		document.removeEventListener("scroll", onScrollFunction, false);
		function onScrollFunction(){
			var yCoord = document.documentElement.scrollTop || 
							window.pageYOffset;
			var offset = 0;
			console.log(yCoord);
			if(y <= 350){
				offset = 590;
			}
			if(yCoord < 0.4*y + offset){
				bigify(pocketCard);
				lightsOn();
			}else if(yCoord >= 0.4*y + offset && yCoord < 1.4*y + offset){
				smallify(pocketCard);
				bigify(clickerCard);
				bigify(personalCard);
			}else if(yCoord >= 1.4*y + offset && yCoord < 2.4*y + offset){
				bigify(pocketCard);
				smallify(clickerCard);
				bigify(personalCard);
			}else if (yCoord >= 2.4*y + offset){
				lightsOff();
				bigify(pocketCard);
				bigify(clickerCard);
				smallify(personalCard);
			}
		}
	}

	w.onresize = whenResized;


	nav.addEventListener("click", function(){
		Velocity(pocket, "scroll", {duration : 500});
	});

	document.getElementById("projects1").style.height = String(
														Math.max((y - 190 - 50),350)) 
														+ 'px';

	function smallify(card){
		card.style.padding = "0 0 0 0";
		card.style.boxShadow = "0 7px 14px #050505";
		return 0;
	}

	function bigify(card){
		card.style.padding = "7% 17% 7% 17%";
		card.style.boxShadow = "none";
		return 0;
	}

	function lightsOn(){
		document.body.style.backgroundColor = 'white';
		return 0;
	}

	function lightsOff(){
		document.body.style.backgroundColor = 'black';
		return 0;
	}

	function onScrollFunction(){
		var yCoord = document.documentElement.scrollTop || 
						window.pageYOffset;
		var offset = 0;
		console.log(yCoord);
		if(y <= 350){
			offset = 400;
		}
		if(yCoord < 0.4*y + offset){
			bigify(pocketCard);
			lightsOn();
		}else if(yCoord >= 0.4*y + offset && yCoord < 1.4*y + offset){
			smallify(pocketCard);
			bigify(clickerCard);
			bigify(personalCard);
		}else if(yCoord >= 1.4*y + offset && yCoord < 2.4*y + offset){
			bigify(pocketCard);
			smallify(clickerCard);
			bigify(personalCard);
		}else if (yCoord >= 2.4*y + offset){
			lightsOff();
			bigify(pocketCard);
			bigify(clickerCard);
			smallify(personalCard);
		}
	}

	document.addEventListener('scroll', onScrollFunction, false);
});