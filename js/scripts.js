function getJson(url, callback){
	xhr = new XMLHttpRequest();
	xhr.open("GET", url, true);
	xhr.send();
	xhr.onreadystatechange = callback;
}

function personagemParser(){
	if (xhr.readyState !== 4) {
		throw new Error('waiting server response');
	}
	personagem = JSON.parse(xhr.response);
	for (property in personagem) {
		if (personagem.hasOwnProperty(property)) {
			node = document.getElementById('attr-list');
			liNode = document.createElement("li");
			textNode = property.replace('_', ' ') + ': '+ personagem[property];
			liNode.appendChild(document.createTextNode(textNode));
			node.appendChild(liNode);
		}
		
	}
	//call films JSON
	for (var i = 0; i < personagem.films.length; i++) {
		getJson(personagem.films[i], filmsParser);
	}
	return personagem;
}

function filmsParser(){
	if (xhr.readyState !==4){
		throw new Error('waiting server response');
	}

	film = JSON.parse(xhr.response);
	node = document.getElementById('films');
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


personagem = getJson("http://swapi.co/api/people/1/", personagemParser);