function getFilme(id){
	getJson(APIBaseURL + "films/" + id + "/", filmeParser);
}

function searchFilme(search){
	getJson(APIBaseURL + "films/" + "?search=" + search, getSearchObject);

}

 function getSearchObject(search){

 	var film = search.results[0];

 	filmeId=film.url.charAt(film.url.length-2); //grabs the ID for the movie
 	getFilme(filmeId); 

 }


function filmTitle(filme) {

	var filmTitle = document.getElementsByClassName("title")[0];

	filmTitle.innerText = "Star Wars: " + filme.title;
	

	var node = document.getElementsByClassName("whichEpisode")[0];
	//var episode = document.createElement("h1");
	node.appendChild(document.createTextNode("Episode " +filme["episode_id"]));


	
	//node.appendChild(episode);

}


function filmeParser(filme){
	//call films getJSON
	for (var i = 0; i < filme.characters.length; i++) {
		getJson(filme.characters[i], displayCharactersInMovie);

	}
	filmTitle(filme);

}

function displayCharactersInMovie(character) {
	var node = document.getElementsByClassName("charactersContainer")[0];
	var liNode = document.createElement("li");
	liNode.appendChild(document.createTextNode(character.name));
	
	
	node.appendChild(liNode);
}

searchItem = window.prompt("Which is your favorite SW movie?")
searchFilme(searchItem);
