//converting string to a number

var num = "5"

var newNum = Number(num)

newNum = Number("5.5")  //5.5 sayisini doner
newNum = Number("0.5") //0.5 doner
newNum = Number("     0.5") // 0.5 doner. Bastaki bosluklari ihmal eder. 

newNum = Number("t5") //NaN seklinde bir sey doner. Butun karakterlerin rakam olmasi gerekir. 



//int olarak parse etmek

var num = ""
num = parseInt ("5") // int 5 doner
num = parseInt("5.5") // int 5 doner
num = parseInt("0.5") // int 0 doner
num = parseInt(" 5") // int 5 doner. bosluk ihmal edilir.


//float olarak parse etme

var num = ""

num = parseFloat("5") //float 5 doner
num = parseFloat("5.5") //float 5.5 doner
num = parseFloat("0.5") //float 0.5 doner
num = parseFloat(" 5") //float 5 doner. Bosluk ihmal edilir. 
