document.getElementById("h1").innerHTML = "Welcome to my site!"
document.getElementById("p1").innerHTML = "My name is Emre"

var removedElement = document.getElementById("p2")
document.getElementById("main").removeChild(removedElement)

document.getElementById("p2").style.color = "blue"
document.getElementById("p2").innerHTML = "I love JavaScript"