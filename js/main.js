// Accessing document property
console.log(document.title)

// finding an element by id
const infoPara = document.getElementById("info")

console.log(infoPara)

//console.dir(infoPara) // if console.log() shows us the string version of the object we can use console.dir() method.

infoPara.textContent += "Shyaka"

let container = document.querySelector(".container")
console.log(container)

// using style object of an element
container.style.maxWidth = "800px"
container.style.margin= "0 auto"

// finding all elements using css selector
let allNodes = document.querySelectorAll(".type")
console.log(allNodes)

allNodes[2].style.background = "cyan"

for (let eachNode of allNodes) {
    eachNode.style.border = "1px solid black"
}

const fakeConsole = document.getElementById("box")
fakeConsole.setAttribute("style", `
background-color: blue;
padding: 10px;
border: 1px solid black`)

fakeConsole.innerHTML += "<p>This is a fake console, where we can output our information</p>"

fakeConsole.innerHTML += "The above URL is"