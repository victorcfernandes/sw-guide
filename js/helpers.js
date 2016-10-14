var APIBaseURL = "http://swapi.co/api/";

function getJson(url, callback){
	var xhr = new XMLHttpRequest();
	xhr.open("GET", url, true);
	xhr.send();
	xhr.onreadystatechange = function(){
		if (xhr.readyState !== 4) {
			throw new Error('waiting server response');
		}

		callback(xhr);
	}	
}

function filmsParser(xhr){
	var film = JSON.parse(xhr.response);

	displayFilms(film);
}