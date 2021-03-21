//BobJones << Pascal notation
//bobJones << camel case

var me = {
    firstName : "emre",
    lastName : "cihan",
    myName(){
        console.log(this.firstName + " " + this.lastName)
    }
}

var bestFriend = {
    firstName : "mhmt",
    lastName : "cihan",
    myName(){
        console.log(this.firstName + " " + this.lastName)
    }
}

// yukaridaki gibi ayni ozellikteki object'leri ayri ayri olusturmak mantikli degil
//bunun icin constructor seklindeki function yazilir
//const ismi Pascal notation'a uygun olacak sekilde buyuk harfle baslar

function Person(first, last){
    this.firstName = first
    this.lastName = last
    this.myName = function(){
        console.log(this.firstName + " " + this.lastName)
    }
}

var me = new Person("emre", "cihan")
me.myName()