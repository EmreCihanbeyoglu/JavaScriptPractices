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

document.getElementById("b2").addEventListener("click", btn2Pressed)

function btn2Pressed(){
    console.log("Button 2 was pressed")
    document.getElementById("p3").innerHTML = "Button 2 pressed"
}


//input box icindeki text'te degisiklik oldugunda
document.getElementById("i2").addEventListener("change", text2Typed)

function text2Typed(){
    console.log("text2 was typed")
    if(document.getElementById("i2").value == "123"){
        document.getElementById("p4").innerHTML = "valid password"
    }else{
        document.getElementById("p4").innerHTML = "invalid password"
    }
}

//mouse element uzerine geldiginde 
document.getElementById("p4").addEventListener("mouseover", moused)

function moused(){
    document.getElementById("p4").innerHTML = " you have been moused"
}

//asagidaki sekilde tiklanma olayi gerceklestirilen butonun id'sine ve
//diger ozelliklerine ulasabiliriz. 
document.getElementById("b2").addEventListener("click", (e) => {
    console.log(e.target.id)
})