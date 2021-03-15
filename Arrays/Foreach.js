var arr = [1,2,3,4,5]

arr.forEach(funky)

function funky(value, index, array){
    console.log(index + ": " + value + " & " + array[index] + "\n")
}