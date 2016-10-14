function getFilm(id){
	getJson(APIBaseURL + "films/" + id + "/", displayCrawler);
}



function displayCrawler(film){
	console.log(film);
	parentNode = document.getElementById("crawler");
	titleNode = document.getElementById("title");
	episodeNode = document.getElementById("episode");
	episode = document.createTextNode(toRoman(film.episode_id));
	title = document.createTextNode(film.title);
	text = document.createTextNode(film.opening_crawl);

	episodeNode.appendChild(episode);
	titleNode.appendChild(title);
	parentNode.appendChild(text);
}


getFilm(3);