function btnPressed(){
    console.log("button 1 was pressed")
    document.getElementById("p1").innerHTML="Button 1 pressed"
}

function txtTyped(){
    console.log("text was typed")
    if(document.getElementById("i1").value == "123"){
        document.getElementById("p2").innerHTML = "valid password"
    }else{
        document.getElementById("p2").innerHTML = "invalid password"
    }
}