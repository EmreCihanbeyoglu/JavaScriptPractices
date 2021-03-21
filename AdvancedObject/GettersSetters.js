var person ={
    firstName : "emre", 
    lastName : "cihan",
    get getFirstName(){
        return this.firstName
    },
    get getLastName(){
        return this.lastName
    },
    set setFirstName(value){
        this.firstName = value
    },
    set setLastname(value){
        this.lastName = value
    }
}