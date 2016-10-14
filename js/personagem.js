function getPersonagem(id){
	getJson(APIBaseURL + "people/" + id + "/", personagemParser);
}


function personagemParser(xhr){
	personagem = JSON.parse(xhr.response);

	//call films JSON
	for (var i = 0; i < personagem.films.length; i++) {
		getJson(personagem.films[i], filmsParser);
	}
	displayPersonagem(personagem);
}

function displayPersonagem(personagem){
	var counter = 0;
	for (property in personagem) {
		counter++;
		if(counter > 8){ // only display 8 attributes
			return;
		}
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
	filmNode = document.createElement("li");
	filmAnchor = document.createElement('a');
	filmAnchor.setAttribute('href', 'film/' +  film.episode_id);
	textNode = document.createTextNode(film.title);

	filmAnchor.appendChild(textNode);
	filmNode.appendChild(filmAnchor);
	node.appendChild(filmNode);
}


getPersonagem(1);