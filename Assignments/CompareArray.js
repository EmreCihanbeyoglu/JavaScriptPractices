function compareElements(array){
   
    for(var i = 0; i < array.length; i++){
        let count = 0;
        var left = array[i]
        for(var j = 0; j < array.length; j++){
            if(left == array[j]){
                count++
            }
        }
        console.log("I have " + count + "of" + array[i] + " " + " in my array")
    }
}

compareElements([1,2,3,4])
compareElements(["emre", "emre", "ali"])
