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

	// node = document.getElementById('films');
	// filmNode = document.createElement("li");
	// filmAtrrList = document.createElement("ul");
	// for(property in film){
	// 	filmAtrr = document.createElement("li");
	// 	textNode = property.replace('_', ' ') + ': '+ film[property];
	// 	filmAtrr.appendChild(document.createTextNode(textNode));
	// 	filmAtrrList.appendChild(filmAtrr);

	// }
	// filmNode.appendChild(filmAtrrList);
	// node.appendChild(filmNode);
	personagem.parsedFilms.push(film);
	//return film;
}