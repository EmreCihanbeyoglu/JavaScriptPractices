//sorting an array

var arr = ["b", "a", "c"]

arr.sort()
console.log(arr)



//reversing an array
arr.reverse()
console.log(arr)

//sorting number array ----> sayilarda bu method tam calismiyor. Guvenme
var num = [25,5,100]
num.sort()


//eger rakamlarda siralama yapmak istoyrsan asagidakini kullanabilirsin. Compare fonksiyonu seklinde calisir. 

num.sort(function(a,b){return a-b}) // bu sekilde olmasi gerektigi gibi kucukten buyuge alirsin. 
num.sort(function(a,b){return b - a}) // bu sekilde olmasi gerektigi gibi buyukten kucuge alirsin. 