//converting from number to string

var num = 1234

var str = num.toString()

str = (123).toString()

str = (123.5).toString()


// ondalik kisimdaki basamak sayisini belirleme
var x = 5.556

x.toFixed(2) //ondalik kisimdaki olacak basamak sayisina gore yuvarlama yapar. 

x.toPrecision(2) //sadece ondalik kisim degil, butun sayinin basamak sayisini beirtrl, Mesela yandaki 5.6 verecek