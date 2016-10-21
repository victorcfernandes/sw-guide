function personagemParser(personagem){
	//call homeworld getJSON
	console.log(personagem);
	getObject('planets', personagem.homeworld.split("/")[5], displayHomeWorld);
	//call films getJSON
	for (var i = 0; i < personagem.films.length; i++) {
		getObject("films", personagem.films[i].split("/")[5], displayRelatedFilms);
	}

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

function displayRelatedFilms(film){
	const filmNode = document.createElement("li");
	const filmAnchor = document.createElement('a');
	const textNode = document.createTextNode(film.title);

	filmAnchor.setAttribute('href', "#");
	filmAnchor.addEventListener('click', function(){getJson(film.url, filmParser)});
	filmAnchor.appendChild(textNode);
	filmNode.appendChild(filmAnchor);
	relatedFilms.appendChild(filmNode);
	console.log("displayFILMS")
}

function displayHomeWorld(planet){
	var liNode = document.createElement("li");
	var planetAnchor = document.createElement("a");
	planetAnchor.setAttribute("href", "#");
	planetAnchor.addEventListener('click', function(){getJson(planet.url, planetParser)});
	var textNode = document.createTextNode(planet.name);
	var liText = document.createTextNode("Homeworld: ");
	var spanNode = document.createElement("span");

	spanNode.appendChild(liText);
	planetAnchor.appendChild(textNode);
	liNode.appendChild(spanNode);
	liNode.appendChild(planetAnchor);
	attrList.appendChild(liNode);
}

getObject("people", 1, personagemParser);