function personagemParser(personagem){
	//call films getJSON
	document.getElementById("panelTitle1").innerHTML="Related Movies";
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
	const filmNode = document.createElement("li");
	const filmAnchor = document.createElement('a');
	const textNode = document.createTextNode(film.title);

	filmAnchor.setAttribute('href', "#");
	filmAnchor.addEventListener('click', function(){getJson(film.url, filmParser)});
	filmAnchor.appendChild(textNode);
	filmNode.appendChild(filmAnchor);
	relatedFilms.appendChild(filmNode);
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