function displayCrawler(film){
	const parentNode = document.getElementById("crawler");
	const titleNode = document.getElementById("title");
	const episodeNode = document.getElementById("episode");
	const episode = document.createTextNode(toRoman(film.episode_id));
	const title = document.createTextNode(film.title);
	const text = document.createTextNode(film.opening_crawl);

	episodeNode.appendChild(episode);
	titleNode.appendChild(title);
	parentNode.appendChild(text);
}

getObject('films', 3, displayCrawler);