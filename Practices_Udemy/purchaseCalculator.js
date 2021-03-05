/**
 * Prompt asking for the amount the user is paying.  Also tell the user how much they owe.

A function that takes the amount the user paying

The function should subtract the amount payed from the original cost

The function should return the difference from the calculation

You then need a statement that will give 1 of 3 different responses. You can just use the console.log() statement.

You gave the exact amount.

You gave too much. Your change due is $x.xx.

You gave too little. You still owe $x.xx.
 */

var paidAmount = prompt("You owe $500. How much do you want to pay:")
var totalCost = 500

function calculator(amount){
    return totalCost - amount
}

var lastStatus = calculator(paidAmount)
if(lastStatus == 0){
    console.log("You gave the exact amount")
}else if(lastStatus < 0){
    console.log("You gave too much. Your change due is $" + (-lastStatus))
} else {
    console.log("You gave too little. You still owe $" + lastStatus)
}
