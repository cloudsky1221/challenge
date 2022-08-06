const container = document.querySelector(".container");
const images = document.querySelectorAll(".img");

const left = document.querySelector(".left");
const right = document.querySelector(".right");
const circles = document.querySelectorAll(".circle");

let i = 0;

left.addEventListener("click", e => {
    i--
    if (i == -1){
        i = images.length - 1
    }
    move(i)
})

right.addEventListener("click", e => {
    i++
    if (i == images.length){
        i = 0
    }
    move(i)
})

for (let j=0;j<circles.length;j++) {
    circles[j].addEventListener("click", k => {
        i = j
        move(j)
    })
}

function move(position) {
    circles.forEach((element,index) => {
        element.style.backgroundColor = "white"
    });
    circles[position].style.backgroundColor = "blue";
    newPosition = position * 25
    container.style.transform = `translate(-${newPosition}rem)`;
}

move(0)