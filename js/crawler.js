function getFilm(id){
	getJson(APIBaseURL + "films/" + id + "/", displayCrawler);
}



function displayCrawler(film){
	//console.log(film);
	parentNode = document.getElementById("crawler");
	titleNode = document.getElementById("title");

	title = document.createTextNode(film.title);
	text = document.createTextNode(film.opening_crawl);

	titleNode.appendChild(title);
	parentNode.appendChild(text);
}


getFilm(1);