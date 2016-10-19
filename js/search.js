form = document.getElementById('searchForm');

form.addEventListener('submit', function(e){
	e.preventDefault();
	search();
});

function search(){
	var type = document.getElementById('selectInput').value;
	var searchVal = document.getElementById('searchInput').value;

	getJson(APIBaseURL + type + "/?search=" + searchVal, searchParse);
}

function searchParse(obj){
	if (obj.count < 1) { // if no object is found
		console.log('not found');
		return; //toDO show not found message
	}
	obj = obj.results[0];
	type = obj.url.split("/")[4]; //get the type in the url parameter
	console.log(type);
	var callback;

	switch (type) {
		case "people":
			callback = personagemParser;
			break;
		case "planets":
			callback = planetParser;
			break;
		case "films":
			callback = filmParser;
			break;
		default:
			console.log("erro"); //toDO implement other types
			return;
	}

	callback(obj);
}