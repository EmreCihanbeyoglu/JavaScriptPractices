function fizzBuzz(smaller, greater){
    if(!checkSmaller){
        console.log("you should enter smaller one first")
        return
    }

    for(var number = smaller; number <= greater; number++){
        var divideBy3 = isDividable(number, 3)
        var divideBy5 = isDividable(number, 5)
        if(divideBy3 && divideBy5){
            console.log("FizzBuzz")
        }else if(divideBy5){
            console.log("Buzz")
        }else if(divideBy3){
            console.log("Fizz")
        }else{
            console.log(number)
        }
    }


}

function checkSmaller(smaller, greater){
    if(smaller > greater){
        return false
    }
    return true
}

function isDividable(number, divider){
    if(number % divider === 0){
        return true
    }
    return false
}

fizzBuzz(0,5)

