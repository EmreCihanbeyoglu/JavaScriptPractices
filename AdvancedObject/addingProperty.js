//adding new property

var person = {
    firstName : "Emre",
    surname : "deneme"
}

person.age = 38

//deletging a property


delete person.surname

//a different way to add methods

var student = {
    firstName : "Emre",
    surName : "cihan",
    eating: function(){
        console.log("student eating")
    }
}

var teacher = {
    firstName : "Emre", 
    surname : "cihan",
    eating(){
        console.log("I am eating")
    }
}