function getObject(type, id, callback){
  var URI = type + '/' + id;
  var cachedObj = sessionStorage.getItem(URI);
  if (cachedObj === null) {
    console.log("made request!");
    getJson(APIBaseURL + URI + "/", callback);
  }
  else {
    console.log('got cached obj!');
    cachedObj = JSON.parse(cachedObj);
    callback(cachedObj);
  }
}

function getJson(url, callback){
	var xhr = new XMLHttpRequest();
	xhr.open("GET", url, true);
	xhr.send();
	xhr.onreadystatechange = function(){
		if (xhr.readyState !== 4) {
			//throw new Error('waiting server response');
      return;
		}
    
    var obj = JSON.parse(xhr.response);
    if (obj.hasOwnProperty('count')) { // check if is search
      obj = obj.results[0];
      xhr.response = xhr.response[0];
      if(obj == undefined){
        throw new Error("Not Found");
      }
    }
    var uri = obj.url.split("/");
    uri = uri[4] + "/" + uri[5];
    sessionStorage.setItem(uri, xhr.response);
		callback(obj);
	}
}

function toRoman(num) {  
  var result = '';
  var decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var roman = ["M", "CM","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I"];
  for (var i = 0;i<=decimal.length;i++) {
  // looping over every element of our arrays
    while (num%decimal[i] < num) {   
    // keep trying the same number until it won't fit anymore      
      result += roman[i];
      // add the matching roman number to our result string
      num -= decimal[i];
      // remove the decimal value of the roman number from our number
    }
  }
  return result;
}


function resetContent(){
  while (title.hasChildNodes()) {
    title.removeChild(title.lastChild);
  }
  while (attrList.hasChildNodes()) {
    attrList.removeChild(attrList.lastChild)
  }
  while (relatedFilms.hasChildNodes()) {
    relatedFilms.removeChild(relatedFilms.lastChild);
  }
}

function listProperty(property, personagem) {
  const liNode = document.createElement("li");
  const spanNode = document.createElement('span');
  const textNode = personagem[property];

  spanNode.appendChild(document.createTextNode(property.replace('_', ' ') + ': '));
  liNode.appendChild(spanNode);
  liNode.appendChild(document.createTextNode(textNode));
  attrList.appendChild(liNode);
}