// comparison.js

function compare(newPhrase, oldPhrase){
	newPhrase = newPhrase.split(" ");
	oldPhrase = oldPhrase.split(" ");

	var results = [];
	var counter = 0;

	for(var i = 0; i < newPhrase.length; i++){
		for(var j = counter; j < oldPhrase.length; j++){
			if(newPhrase[i] === oldPhrase[j]){
				(function(){
					var temp = j;
					results.push(temp);
				}());
				counter++;
				break;
			}
		}
	}
	return results;
}

compare("This is string asdf", "is This string asdf");

