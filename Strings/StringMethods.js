//to find out lenght of a string

var name = "emre"
name.length

//using indexes and searching

var sentence ="I say hello and you say hello"
sentence.indexOf("hello")  //6 verecek -- index 0'dan baslar. 

//last occurance of a string part  --- eger aranan string ana string icinde yoksa -1 doner

sentence.lastIndexOf("hello") // 24 verecek 

//search --- indexof gibi calisir. Ilk occurance'i verir. 
sentence.search("hello")


//taking a slice  --- son index alinmiyor. Ana stringæde degisiklik yok
var str = "Happy, Excited, Calm"

var s1 = str.slice(7,14)
var s2 = str.slice(7) // 7.index'ten baslayarak sona kadar hespni alir. 
console.log(s1)


//substring() methodu
var str = "Happy, Excited, Calm"

var s1 = str.substring(7,14)
var s2 = str.substring(7) // 7.index'ten baslayarak sona kadar hespni alir. 
console.log(s1)


//substr() methodu

var str = "Happy, Excited, Calm"

var s1 = str.substr(7,14) // ikinci parametre alinacak karakter sayisini belirtir, son karakter index ini degil. 
var s2 = str.substr(7) // 7.index'ten baslayarak sona kadar hespni alir. 
console.log(s1)
