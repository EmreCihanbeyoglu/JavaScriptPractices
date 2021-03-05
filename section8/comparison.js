//Comparison operators
// == equal to
// === equal to but with type
// != not equal
// ! == not equal


if(1 == 1){
    console.log("They are the same")
}

var asnwer = prompt("What is your name?")

if(answer == "Emre"){
    console.log("your are here")
}


var giftName = prompt("What should I buy for  my wife")

if(giftName == "roses"){
    console.log(giftName + " " + "sound good")
}else if(giftName == "jewelry"){
    console.timeLog(giftName + " " + "sound good")
}else{
    console.log("it is OK.")
}

var container = []

var people = ["emre", "mehmet"]
console.log(people)


var container = ["red", "blue", "orange"]



var container = []

var answer = prompt("What is your answer?")
container.push(answer)

answer = prompt("What is your second?")
container.push(answer)


for(var i = 0; i < 3; i++){
    answer = prompt("What is your " + i + "th answer?")
    container.push(answer)
}

answer = prompt("6 th answer")
container.splice(0, 0, answer)
container
container.pop()
container

