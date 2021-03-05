
var square = ""

for(var i = 0; i < 4; i++){
    for(var j = 0; j < 4; j++){
        square = square + "*"
    }
    
    console.log(square)
    if(i == 3){
        break;
    }
    square = ""
}