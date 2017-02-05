$(document).ready(function(){
	// for swapping
	var swap = function(){
		var newSentence = sentences[Math.floor(Math.random() * sentences.length)];
		$('#sub').html(newSentence);
		$('#sub').animate({
			"opacity" : "1"
		}, 1500);
	}

	var sentences = ["I make websites", 
	"I make beer", 
	"I study math at Carleton College", 
	"I like to stay active", 
	"I like video games",
	"I love pugs",
	"I speak rather quietly",
	"I intern at DoneGood"];
	// Initial sentence set
	var newSentence = sentences[Math.floor(Math.random() * sentences.length)];
	$('#sub').html(newSentence);

	// animation loop
	window.setInterval(function(){
		$('#sub').animate({
			"opacity" : "0"
		}, 1500);
		setTimeout(swap, 1500);
	}, 5000);
});