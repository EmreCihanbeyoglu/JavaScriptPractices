/**
 * 1. An object named "restaurantMenu"

2. Properties that contains

    a. The name of the restaurant

    b. The items that the restaurant sells which includes the names and prices. Price can just be a number. Limit this to 5 items.

    c. A method that lists out all the menu items with their prices via an alert.

    d. A method that allows the user to select which menu item that the user wants to order via a prompt. Simply alert the menu item back to the user.
 */

var restaurantMenu = {
    name: "Good Restaurant",
    items: [
        {
            name: "rice",
            price: 3
        },
        {
            name: "fruit",
            price: 4
        },
        {
            name: "soup",
            price: 6
        },
        {
            name: "chicken",
            price: 2
        },
        {
            name: "roast",
            price: 5
        }
    ],

    listOutItemsWithPrice: function(){
        let alertText = ""
        for(let i = 0; i < this.items.length; i++){
            alertText = alertText + this.items[i].name + " , price: " + this.items[i].price + "\n" 
        }
        alert(alertText)
    }, 

    selectAnItemFromMenu: function(){
        let wantedItem = prompt("What would you like to eat?")
        alert(wantedItem)
    }
}