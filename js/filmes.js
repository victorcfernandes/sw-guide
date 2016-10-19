function filmsParser(filme){

	displayFilm(filme);
}

function displayFilm(filme){
	resetContent();
	var counter = 0;

	for (property in filme) {
		counter++;
		if(counter > 100){ // only display 8 attributes
			return;
		}
		if (filme.hasOwnProperty(property)) {
			listProperty(property, filme);
		}
	}
}


 /* se URL
 	Separe por ,
 	Acesse objeto
 	print primeira propriedade
 	*/