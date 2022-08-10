const size = document.querySelector("#size");
const weight = document.querySelector("#weight");
const color = document.querySelector("#color");
const bgcolor = document.querySelector("#bgcolor");
const align = document.querySelector("#align");
const button = document.querySelector("#button");
const textBox = document.querySelector("#myText")

let common = [size.value,weight.value,color.value,bgcolor.value,align.value]

button.addEventListener("click", e => {
    makeChange(size.value,weight.value,color.value,bgcolor.value,align.value)
    common = [size.value,weight.value,color.value,bgcolor.value,align.value]
})

function makeChange(a,b,c,d,e) {
    common.forEach(element => {
        textBox.classList.remove(element)
    })
    textBox.classList.add(a,b,c,d,e)
}