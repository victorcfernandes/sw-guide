function getFilme(id){
	getJson(APIBaseURL + "films/" + id + "/", filmeParser);
}



function filmTitle(filme) {

	var node = document.getElementsByClassName("whichEpisode")[0];
	//var episode = document.createElement("h1");
	node.appendChild(document.createTextNode(filme["title"]));

	console.log(node);

	
	//node.appendChild(episode);

}


function filmeParser(filme){
	//call films getJSON
	for (var i = 0; i < filme.characters.length; i++) {
		getJson(filme.characters[i], displayCharactersInMovie);

	}
	console.log(filme);

	filmTitle(filme);

}

function displayCharactersInMovie(character) {
	var node = document.getElementsByClassName("charactersContainer")[0];
	var liNode = document.createElement("li");
	liNode.appendChild(document.createTextNode(character.name));
	
	
	node.appendChild(liNode);
}

getFilme(1);