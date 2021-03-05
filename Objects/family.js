//family tree

var family = {
    father : {
        firstName : "Thomas",
        lalstName : "Wayne",
        isAlive: false
    },
    mother: {
        firstName : "Martha",
        isAlive: false
    }, 
    children: [
        {
            firstName: "Bruce",
            lastName: "Wayne",
            isAlive: true
        },
        {
            firstName: "dBruce2",
            lastName: "Wayne",
            isAlive: true
        }
    ], 

    butler: {
        firstName: "Alfred",
        lastName: "Pennywrth",
        isAlive: true
    }, 
    isRich: true

}


//methods (object icinde fonksiyon tanimlayaboliriz. Buna method denir.)

var library = {
    book: "javascript is fun", 
    checkOut: function(){
        console.log("You have checked out the book " + this.book)
    },
    checkIn: function(number){
        console.log("we have checked " + number + " books")
    }
}