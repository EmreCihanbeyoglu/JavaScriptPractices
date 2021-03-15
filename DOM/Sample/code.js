var headingText = document.getElementById("heading")
console.log(headingText)

//yukaridan asagi inerken buldugu birinciyi alir
var paragraphText = document.getElementsByClassName("content")[0]
console.log(paragraphText)

//class ismi asagida verilmis olan butun elementleri alir. 
var paragraphText = document.getElementsByClassName("content")

//ortusenlerin hepsinii alir.
var heading2Text = document.getElementsByTagName("h2")

//ortusenler icinde 2.siradakini alir
var headingText = document.getElementsByTagName("h2")[0]


console.log(document.body) //body elementinin tamamnin verir, outer html seklinde
console.log(document.title) //sayfanin basligini doner
console.log(document.URL) //sayfanin url doner
console.log(document.head) //head elementini doner. oueter HTMl seklinde


//element icindeki text algilandi diger onu dondu. 
var h1Text = document.getElementById("heading").firstChild 
console.log(h1Text)

//cikti olarak parentnode ile element arasinda farkli bir sey gozlemlemedim
var h1Sib = document.getElementById("heading").parentNode
console.log(h1Sib)

var h1Sib = document.getElementById("heading").parentElement
console.log(h1Sib)


//eger elementler arasinda bosluk varsa onlar da eleemnt olarak algilanir.
//o yuzden eger bunu kullanacaksan elementler arasindaki boslugu kaldir. 
var h1Par = document.getElementById("heading").nextSibling
console.log(h1Par)