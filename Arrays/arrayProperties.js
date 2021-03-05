var container = [] //ilk tanimlama 
var people = ["Emre", "Ali"] // tanimlama sirasinda elemanlar verilebilir. 
var numbers = [1, 2, 3, 4, "Deneeme"] // Farkli tip degiskenler ayni array icinde saklanabilir. 
people.pop() //en son elemani cikartir array icinden - Bos array'de hata vermiyr
people.push("yeni eleman") //sona yeni bir eleman ekler

numbers.unshift("purple") //array 0 indeksine pass edilen elemani ekler.
numbers.shift() // array icindeki ilk elemani atar - Bos aarray'de ahat vermiyor.

people.splice(0, 1, "splice ile ekledim") // 0 numarali index'teki elemani sildim. Oraya yeni elemani ekledim.
people.splice(0, 1, "yeni1", "yeni2", 3) // 0 numarali index'teki elemani sildim. 0 numarali indeksten baslayarak yeni elemanlari ekledim
people.splice(0, 1) // remove first element (index 0)

numbers.slice(2) //verilen index numarasindan baslayarak elemanlardan yeni bir array doner. yen bir array degiskeni tannimlanmali
//eski array uzerinde bir degisiklik olmaz. Sadece yeni bi array elde edilmis olur. Mesela ustte index 2 ve sonrasi alinir. 




