let container = document.getElementById("container")
let check = true

for(let num = 0; num < 256; num +=1){
    const box = document.createElement("div")
    box.classList.add("box")
    box.textContent = "d"
    box.addEventListener(("mouseover"),() => {
        if(check == true)
        box.style.background = "black"
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