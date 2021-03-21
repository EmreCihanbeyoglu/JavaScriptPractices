/**
 * For 1 & 2, use the correct JavaScript Event.

1. When Button 1 is clicked:

    a. Paragraph 1 should be replaced with "Button 1 was clicked"

    b. An alert should appear with text "Button 1 was clicked"



2. When Text is typed into the first text field (and the cursor moved away):

    a. Paragraph 2 should display "Characters typed" + the number of characters.



For 3 & 4, use Event Listeners.

3. When Button 2 is clicked:

    a. Paragraph 3 should be removed



4. When Text is typed into the second text field:

    a. Paragraph 4 should change font size for each character entered


 */


function clickedMe(){
    document.getElementById("p1").innerHTML = "Button 1 was clicked"
    alert("button 1 is clicked")
}


function typedMe(){
    let numberOfChar = document.getElementById("i1").value.length
    document.getElementById("p2").innerHTML = numberOfChar + " charachters typed"
}


document.getElementById("b2").addEventListener("click", function(){
    document.body.removeChild(document.getElementById("p3"))
})

document.getElementById("i2").addEventListener("change", changeFontSize)

function changeFontSize(){
    let numberOfChar = document.getElementById("i2").value.length
    document.getElementById("p4").style.fontSize = numberOfChar + "em"
    
}