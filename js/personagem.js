function getPersonagem(id){
	getJson(APIBaseURL + "people/" + id + "/", personagemParser);
}



function personagemParser(xhr){
	personagem = JSON.parse(xhr.response);
	personagem.parsedFilms = [];

	//call films JSON
	for (var i = 0; i < personagem.films.length; i++) {
		getJson(personagem.films[i], filmsParser);
		console.log(personagem.films[i]);

	}
	console.log(personagem);
}

function displayPersonagem(personagem){
	for (property in personagem) {
		if (personagem.hasOwnProperty(property)) {
			node = document.getElementById('attr-list');
			liNode = document.createElement("li");
			textNode = property.replace('_', ' ') + ': '+ personagem[property];
			liNode.appendChild(document.createTextNode(textNode));
			node.appendChild(liNode);
		}
		
	}
}


getPersonagem(2);
