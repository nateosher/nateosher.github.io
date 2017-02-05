$(document).ready(function(){
	var $obj = $('#please');
	var list = ["success",
	"disaster",
	"fluke",
	"???",
	"as;dlkfjasl;kdfjls;da"];
	var listLength = list.length;
	var count = 0;

	for(var i = 0; i < list.length; i++){
		$obj.append($('<span/>',{text:list[i]}));
	}

	list = $obj.find("span").hide();
	console.log(list);

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
		$obj.animate({ width: list.eq( count ).width() });
		list.stop().fadeOut().eq( count ).fadeIn().delay(3000).show(0, loop);
		count = ++count % listLength;
	}());
});