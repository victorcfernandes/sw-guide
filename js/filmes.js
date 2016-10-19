
function filmParser(filme){
	displayFilm(filme);
	document.getElementById("panelTitle1").innerHTML="Related Characters";

	for (var i=0; i<filme.characters.length; i++) {
		getJson(filme.characters[i], displayCharacters);
	}

}

function displayFilm(filme){
	resetContent();
	var counter = 0;

	for (property in filme) {
		counter++;
		if(counter > 6){ // only display 8 attributes
			return;
		}
		if (filme.hasOwnProperty(property)) {
			listProperty(property, filme);
		}
	}
}


function displayCharacters(character){

	const filmNode = document.createElement("li");
	const filmAnchor = document.createElement('a');
	const textNode = document.createTextNode(character.name);

	filmAnchor.setAttribute('href', "#");
	filmAnchor.addEventListener('click', function(){getJson(character.url, personagemParser)});
	filmAnchor.appendChild(textNode);
	filmNode.appendChild(filmAnchor);
	relatedFilms.appendChild(filmNode);
}

function displayPlanet(planet){
	resetContent();
	var counter = 0;
	title.innerHTML = 'Planet';
	var node = document.getElementById('attr-list');
	node.innerHTML = '';
	for (property in planet) {
		counter++;
		if(counter > 8){ // only display 8 attributes
			return;
		}
		if (planet.hasOwnProperty(property)) {
			listProperty(property, planet);
		}
	}
}
