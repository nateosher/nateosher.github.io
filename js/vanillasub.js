// vanillasub.js
// a re-write of the simple swapping algorithm in vanilla js
// Inspired by substituteteacher.js by Dan Schlosser:
// http://schlosser.github.io/substituteteacher.js/

document.addEventListener("DOMContentLoaded", function(){
	var actions = ["studied math",
	"intern",
	"drum",
	"make websites",
	"studied (some) philosophy",
	"like to stay active",
	"tutor"];

	var locations = ["Carleton College",
	"DoneGood",
	undefined,
	undefined,
	"Carleton College",
	undefined,
	"City on a Hill Charter School"];

	var colors = ["#0000FF", "#00FF00", "#FF0000","#DC143C", "#9A32CD", 
				  "#00EE76", "#7FFF00", "#CDCD00", "#FFA500", "#FF4500"];

	// Estimate widths
	var widths = actions.map(function(e){
		return e.length*18;
	});

	var counter = 1;

	for(var i = 0; i < actions.length; i++){
		var acSpan = "<span id='ac" + i.toString() + "' class='stretch'>" + actions[i] + "</span>";
		document.getElementById("action")
			.insertAdjacentHTML("afterbegin",acSpan);
		var c1 = Math.floor(Math.random()*(colors.length));
		document.getElementById("ac" + i.toString()).style.color = colors[c1];
		if(i !== 0){
			document.getElementById("ac" + i.toString()).style.display = "none";
			document.getElementById("ac" + i.toString()).style.opacity = 0;
		}
	}

	for(var i = 0; i < locations.length; i++){
		if(locations[i]){
			var locSpan = "<span id='loc" + i.toString() + "' class='stretch'>" + locations[i] + "</span>";
			document.getElementById("location")
				.insertAdjacentHTML("afterbegin",locSpan);
			var c2 = Math.floor(Math.random()*(colors.length));
			c2 = (c1 == c2 ? c2 + 1 % colors.length : c2);
			document.getElementById("loc" + i.toString()).style.color = colors[c2];
			if(i !== 0){
				document.getElementById("loc" + i.toString()).style.display = "none";
				document.getElementById("loc" + i.toString()).style.opacity = 0;
			}
		}
	}

	function AnimationLoop(){
		var c1 = Math.floor(Math.random()*(colors.length));
		var c2 = Math.floor(Math.random()*(colors.length));
		c2 = (c1 == c2 ? c2 + 1 % colors.length : c2);
		var prev = (counter > 0 ? counter - 1 : actions.length - 1);
		// Hide previous divs
		Velocity(document.getElementById("ac" + prev.toString()),
			{ opacity: 0 }, {duration : 1000 });
		document.getElementById("ac" + prev.toString()).style.display = "none";
		if(locations[prev]){
			Velocity(document.getElementById("loc" + prev.toString()),
				{ opacity: 0 }, {duration : 1000 });
			document.getElementById("loc" + prev.toString()).style.display = "none";			
		}

		// Show new divs
		var newWidth = widths[counter]
		Velocity(document.getElementById("action"),
			{ width : newWidth }, {duration : 500 });		
		Velocity(document.getElementById("ac" + counter.toString()),
			{ opacity: 1 }, {duration : 1000 });
		document.getElementById("ac" + counter.toString()).style.color = colors[c1];
		document.getElementById("ac" + counter.toString()).style.display = "inline";
		if(locations[counter]){
			Velocity(document.getElementById("loc" + counter.toString()), 
				{ opacity: 1 }, {duration : 1000 });
			document.getElementById("loc" + counter.toString()).style.color = colors[c2];
			document.getElementById("loc" + counter.toString()).style.display = "inline";
			document.getElementById("at").style.display = "inline";
			Velocity(document.getElementById("at"), 
				{ opacity: 1}, { duration : 1000 });
		}else{
			document.getElementById("at").style.opacity = 0;
		}

		widths[counter] = document.getElementById("ac" + counter.toString()).offsetWidth;
		// Test
		// console.log(widths)

		counter = (counter + 1) % actions.length;
	}

	var loop = window.setInterval(AnimationLoop, 4000);

});