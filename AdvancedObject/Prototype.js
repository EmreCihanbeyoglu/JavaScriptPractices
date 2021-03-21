//const icine sonradan yeni bir property eklemek icin kullanilir.

function Person(first, last){
    this.firstName = first
    this.lastname = last
    this.myName = function(){
        console.log(this.firstName + " " + this.lastname)
    }
}

Person.prototype.country = "Turkey"
Person.prototype.eating = function(){
    console.log(this.firstName + "  " + "I am eating")
}
