var APIBaseURL = "http://swapi.co/api/";

var attrList = document.getElementById('attr-list');
var relatedFilms = document.getElementById('films');
var title = document.getElementById('title');

function getObject(type, id, callback){
  getJson(APIBaseURL + type + '/' + id + "/", callback);
}

function getJson(url, callback){
	var xhr = new XMLHttpRequest();
	xhr.open("GET", url, true);
	xhr.send();
	xhr.onreadystatechange = function(){
		if (xhr.readyState !== 4) {
			throw new Error('waiting server response');
		}
		var obj = JSON.parse(xhr.response);
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

function listProperty(property, obj) {
  console.log("text to see if theres html");
  console.log(obj);
  console.log(obj[property]);
  var liNode = document.createElement("li");
  var textNode = property.replace('_', ' ') + ': '+ obj[property];
  liNode.appendChild(document.createTextNode(textNode));
  attrList.appendChild(liNode);


}



