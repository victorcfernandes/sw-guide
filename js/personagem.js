function getPersonagem(id){
	getJson(APIBaseURL + "people/" + id + "/", personagemParser);
}


function personagemParser(personagem){
	//call films getJSON
	for (var i = 0; i < personagem.films.length; i++) {
		getJson(personagem.films[i], displayFilms);
	}

	//call homeworld getJSON
	getJson(personagem.homeworld, displayHomeWorld);

	displayPersonagem(personagem);
}

function displayPersonagem(personagem){
	var counter = 0;
	var node = document.getElementById('attr-list');
	for (property in personagem) {
		counter++;
		if(counter > 8){ // only display 8 attributes
			return;
		}
		if (personagem.hasOwnProperty(property)) {
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
	filmAnchor.setAttribute('href', "#" /*'films/' +  film.episode_id*/);
	filmAnchor.addEventListener('click', function(){loadAnotherObject(film.episode_id)});
	textNode = document.createTextNode(film.title);

	filmAnchor.appendChild(textNode);
	filmNode.appendChild(filmAnchor);
	node.appendChild(filmNode);
}

function displayHomeWorld(planet){
	var node = document.getElementById('attr-list');
	var liNode = document.createElement("li");
	var planetAnchor = document.createElement("a");
	planetAnchor.setAttribute("href", "#" /*"planets/" + planet.url.slice(-2)*/);
	var id = parseInt(planet.url.slice(-2 , -1));
	planetAnchor.addEventListener('click', function(){loadAnotherObject(id)});
	var textNode = document.createTextNode(planet.name);
	var liText = document.createTextNode("Homeworld: ");

	planetAnchor.appendChild(textNode);
	liNode.appendChild(liText);
	liNode.appendChild(planetAnchor);
	node.appendChild(liNode);
}

getPersonagem(1);
// console.log(window.location.pathname);
