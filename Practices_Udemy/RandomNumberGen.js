/**
 * 
 * You should create a function that takes in 2 numbers. The min and max.

    I want only whole numbers. No decimals.
 */
var min = 2
var max = 5

 function randomNumberGen(min, max){
    return Math.floor(Math.random() * (max - min) + min)
 }

 var randomNumber = randomNumberGen(min, max)
 console.log(randomNumber)