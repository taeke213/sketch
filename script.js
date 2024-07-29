let container = document.getElementById("container")
let butblack = document.getElementById("black")
let butwhite = document.getElementById("white")
let butred = document.getElementById("red")
let butblue = document.getElementById("blue")
let butyellow = document.getElementById("yellow") 
let customcol = document.getElementById("customcolor")
let resetbut = document.getElementById("reset")

let color = "black"
let check = true

for(let num = 0; num < 4000; num +=1){
    const box = document.createElement("div")
    box.classList.add("box")
    box.textContent = "d"
    box.addEventListener(("mouseover"),() => {
        if(check == true)
        box.style.background = color
})

    container.appendChild(box)
}

document.addEventListener('keydown', (event) => {
    if (event.key == 'Shift') {
        check = false
    }
});
document.addEventListener('keyup', (event) => {
    if (event.key == 'Shift') {
        check = true
    }
});

butblack.addEventListener(("click"), () => {
    color = "black"
})
butwhite.addEventListener(("click"), () => {
    color = "white"
})
butred.addEventListener(("click"), () => {
    color = "red"
})
butblue.addEventListener(("click"), () => {
    color = "blue"
})
butyellow.addEventListener(("click"), () => {
    color = "yellow"
})
customcol.addEventListener(("change"), () => {
    color = document.getElementById("customcolor").value
})
resetbut.addEventListener(("mousedown"), () => {
    let squares = container.querySelectorAll("div")
    squares.forEach((div) => (div.style.backgroundColor = "white"))

})