$(document).ready(function(){
	console.log("Started");
	var $obj = $('#please');
	var list = ["I like to eat food",
	"purple cow android muffin angle",
	"Sometimes like to throw food",
	"Now for something completely different",
	"And for something somewhat different"];

	var listLength = list.length;
	var count = 0;

	var first = list[0].split(" ");
	console.log("first: ",first.length);
	for(var i = 0; i < first.length; i++){
		// console.log(i)
		$obj.append($('<span/>',{text:first[i],class:"pleaseSpan"}));
	}

	list = $obj.find("span");

	function compare(newPhrase, oldPhrase){
		newPhrase = newPhrase.split(" ");
		oldPhrase = oldPhrase.split(" ");

		var results = [];
		var counter = 0;

		for(var i = 0; i < newPhrase.length; i++){
			for(var j = counter+1; j < oldPhrase.length; j++){
				if(newPhrase[i] === oldPhrase[j]){
					(function(){
						var temp = j;
						results.push(temp);
					}());
					counter = j;
					break;
				}
			}
		}
		return results;
	}

	(function loop(){
		$obj.children().eq( count ).animate({ width: list.eq( count ).width() });
	}());

	// (function loop(){
	// 	// console.log(count);
	// 	$obj.animate({ width: list.eq( count ).width() });
	// 	list.stop().fadeOut().eq( count ).fadeIn().delay(3000).show(0, loop);
	// 	count = ++count % listLength;
	// }());
});