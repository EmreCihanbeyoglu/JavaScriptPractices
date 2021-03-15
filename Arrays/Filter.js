//array filter Filter() methodu icine bir fonksiyon ismi yaziyorsun sonra da onu tanimliyorsun. 
//Tanimlarken 3 deger pass ediyorsun. Bu method ile return yapiyorsun. 


var num = [1,5,10,12,15]

var even = num.filter(isEven)

function isEven(value, index, array){
    return value % 2 == 0
}
