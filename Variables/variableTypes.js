function deneme(){
    var degisken = "deneme"
}

console.log(degisken)

//if statement icinde tanimlanmis degiskenler if disinda tanimlanmis gibi davraniyor. Yani local degil. 
if(true){
    var degisken = "deneme"
}

console.log(degisken)

//switch icinde tanimlanan var tipi degiskenler swicth disinda tanimlanmis gibi oluyor. Yani local degil. 
var key = "anahtar"
switch(key){
    case "anahtar":
        var degisken = "deneme"
        console.log(degisken + " switch icindeyim")
        break;
    default:
        degisken = "deneme degil"
        break;
}

console.log(degisken)


//switch icinde tanimlanan let tipi degiskenler sadece switch icinde gecerlidir.
var key = "anahtar"
switch(key){
    case "anahtar":
        let degisken = "deneme"
        console.log(degisken + " switch icindeyim")
        break;
    default:
        degisken = "deneme degil"
        break;
}

console.log(degisken) //hata verir cunku let block scope bir dgeisken tipidir. 


//if icinde tanimlanmis degiskenler sadece if block icinde gecerlidir. Disardan erisilemez. 
if(true){
    let degisken = "deneme"
}

console.log(degisken) //hata verir. cunku let sadece block icinde gecerli



var key = "anahtar"
switch(key){
    case "anahtar":
        let degisken = "deneme"
        console.log(degisken + " switch icindeyim")
        key = "anahtar degerini degistirdim"
        break;
    default:
        degisken = "deneme degil"
        break;
}
console.log(key)
console.log(degisken)

//asagidaki durumda block scoped oldugu icin let, disardaki degiskenden farkli gibi davranir. 
let greeting ="say hi"
if(true){
    let greeting = "say Hello instead"
    console.log(greeting)
}
console.log(greeting) //"say hi" doner. Yani block icindekinden etkilenmez. 

//Fakat asagidakinde ikisinden de "Say Hello instead" seklinde donoer. Global scope oldugu icin bu sekilde davranir. 
var greeting ="say hi"
if(true){
    var greeting = "say Hello instead"
    console.log(greeting)
}
console.log(greeting)

