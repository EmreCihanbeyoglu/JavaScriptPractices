// bir objedir js'de.

var newDate = new Date() //browser'daki o andaki degeri string olarak alir. Snapchat gibi. 

//getting parts of a date

newDate.getFullYear()
newDate.getMonth() //2 january 0'dan basliyor. 
newDate.getDate() //28

var today = (newDate.getMonth() + 1) + "-" + newDate.getDate() + "-" + newDate.getFullYear()

newDate.getHours() //10 ...  24 hour oc'lcok
newDate.getMinutes() // 13
newDate.getSeconds() // 12

//setting new dates

newDate.setFullYear(2023) //tarihi verilen degere gore gunceller. Ama guncelleme yaparken gercek takvim degerelrini kulanir. 
// yani ayni tarih hangi gune denk geliyorsa onu verir. 

newDate.setMonth(0, 1) // 1 ocak yapar tarihi

newDate.setDate(15) // gunu 15 yapar


//eger zamanla alakali hesaplama yapman gerekiyorsa (zaman farkini alma vs) asagidakini kullanabilirisn. 

newDate.getTime() // ms since Jan 1, 1970
newDate.setTime(63826846486246726547) // 


