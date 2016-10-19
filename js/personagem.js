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
	resetContent();
	var counter = 0;
	var titleText = document.createTextNode('Character');
	title.appendChild(titleText);
	for (property in personagem) {
		counter++;
		if(counter > 8){ // only display 8 attributes
			return;
		}
		if (personagem.hasOwnProperty(property)) {
			listProperty(property, personagem);
		}
	}
}

function displayFilms(film){
	filmNode = document.createElement("li");
	filmAnchor = document.createElement('a');
	filmAnchor.setAttribute('href', "#" /*'films/' +  film.episode_id*/);
	filmAnchor.addEventListener('click', function(){getObject('films', film.episode_id, filmsParser)});
	textNode = document.createTextNode(film.title);

	filmAnchor.appendChild(textNode);
	filmNode.appendChild(filmAnchor);
	relatedFilms.appendChild(filmNode);
}

function displayHomeWorld(planet){
	var liNode = document.createElement("li");
	var planetAnchor = document.createElement("a");
	planetAnchor.setAttribute("href", "#" /*"planets/" + planet.url.slice(-2)*/);
	var id = parseInt(planet.url.slice(-2 , -1));
	planetAnchor.addEventListener('click', function(){getObject('planets', id, planetParser)});
	var textNode = document.createTextNode(planet.name);
	var liText = document.createTextNode("Homeworld: ");

	planetAnchor.appendChild(textNode);
	liNode.appendChild(liText);
	liNode.appendChild(planetAnchor);
	attrList.appendChild(liNode);
}

getObject("people", 1, personagemParser);
// console.log(window.location.pathname);
