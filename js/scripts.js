function getJson(url, callback){
	xhr = new XMLHttpRequest();
	xhr.open("GET", url, true);
	xhr.send();
	xhr.onreadystatechange = callback;
}


function personagemParser(){
	if (xhr.readyState !== 4) {
		throw new Error('waiting server response');
	}
	var json = JSON.parse(xhr.response);
	console.log(json);
	for (var property in json) {
		if (json.hasOwnProperty(property)) {
			node = document.getElementById('attr-list');
			liNode = document.createElement("li");
			liNode.appendChild(document.createTextNode( property.replace('_', ' ') + ': '+ json[property]));
			node.appendChild(liNode);
		}
		
	}
}


personagem = getJson("http://swapi.co/api/people/1/", personagemParser);

//document.write('<h1>' + personagem.name + '</h1>');
// document.write('<p>Altura:' + personagem.height + '</p>');

// planeta = getJson(personagem.homeworld);
// teste = document.getElementById('planet');
// teste.appendChild(document.createTextNode(planeta.name));

// films = personagem.films;

// for (var i = films.length - 1; i >= 0; i--) {
// 	films[i] = getJson(films[i]);
// }

// document.write('<h2>'+ films[3].title +'</h2>');
// document.write('<p>' + films[3].opening_crawl + '</p>');