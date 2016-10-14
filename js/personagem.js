function getPersonagem(id){
	getJson(APIBaseURL + "people/" + id + "/", personagemParser);
}


function personagemParser(xhr){
	personagem = JSON.parse(xhr.response);

	//call films JSON
	for (var i = 0; i < personagem.films.length; i++) {
		getJson(personagem.films[i], filmsParser);
	}
	console.log(personagem);
	displayPersonagem(personagem);
}

function displayPersonagem(personagem){
	for (property in personagem) {
		if (personagem.hasOwnProperty(property)) {
			var node = document.getElementById('attr-list');
			var liNode = document.createElement("li");
			var textNode = property.replace('_', ' ') + ': '+ personagem[property];
			liNode.appendChild(document.createTextNode(textNode));
			node.appendChild(liNode);
		}
	}
}

function displayFilms(film){
	var node = document.getElementById('films');
	console.log(film);
	filmNode = document.createElement("li");
	filmAtrrList = document.createElement("ul");
	for(property in film){
		filmAtrr = document.createElement("li");
		textNode = property.replace('_', ' ') + ': '+ film[property];
		filmAtrr.appendChild(document.createTextNode(textNode));
		filmAtrrList.appendChild(filmAtrr);

	}
	filmNode.appendChild(filmAtrrList);
	node.appendChild(filmNode);
}


getPersonagem(1);