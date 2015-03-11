var suggest = document.getElementById('suggestion');
var ask = document.getElementById('ask');
var lastRand = 0;
ask.addEventListener('click', function() {
	var rand = Math.floor(suggestions.length * Math.random());
	while(rand === lastRand) {
		rand = Math.floor(suggestions.length * Math.random());
	}
	setSuggestion(rand);
});

function setSuggestion(suggestionId) {
	if(suggestionId < 0) {
		suggestionId = 0;
	} else if(suggestionId >= suggestions.length) {
		suggestionId = suggestions.length - 1;
	}
	suggest.innerHTML = suggestions[suggestionId];
	lastRand = suggestionId;
	document.location.hash = "#" + suggestionId;
}

document.addEventListener("DOMContentLoaded", function(event) { 
	if(window.location.hash == "") {
		ask.click();
	} else {
		setSuggestion(window.location.hash.split('#')[1]);
	}
});
