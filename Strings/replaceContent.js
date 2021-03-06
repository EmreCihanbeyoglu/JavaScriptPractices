//replacing content

var str = "I have turkey for lunch and turkey for dinner."
var lunch = str.replace("turkey", "pasta") // sadece ilkini degistirecek, ikinciye dokunmayacak. Case-sesntive'dir. 
console.log(lunch) 

lunch = str.replace(/Turkey/i, "pasta") // case-insenstive olarak degisiklik yapar. Yani buyuk kucuk farketmeden ilk uyani degistirir. 

lunch = str.replace(/turkey/g, "pasta") // butun uyanlari degistirir. Case'-sensitve olarak bakar. 

lunch = str.replace(/Turkey/gi, "pasta") // butun uyanlari case-insensitive olarakdegistirir. 

//lower and upper letters

var word = "happy"

var upperWord = word.toUpperCase() 
var lowerWord = word.toLowerCase();


//trim() methodu
var sentence = "    Hello World!    "
var clean = sentence.trim()  // bastaki ve sondaki bosluk karakterlerini kaldiri. Aradakilere dokunmaz, 
