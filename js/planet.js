function planetParser(planet){
	displayPlanet(planet);
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