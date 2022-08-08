const screen = document.querySelector(".screen");
const numPad = document.querySelectorAll("ul li");

let firstValue = "";

let arraySign = [];

document.addEventListener("keyup", e => {
    // console.log(e.key,firstValue.length)
    switch (e.key) {
        case "1":
            firstValue += "1"
            changeShade(0)
            break
        case "2":
            firstValue += "2"
            changeShade(1)
            break
        case "3":
            firstValue += "3"
            changeShade(2)
            break
        case "4":
            firstValue += "4"
            changeShade(4)
            break
        case "5":
            firstValue += "5"
            changeShade(5)
            break
        case "6":
            firstValue += "6"
            changeShade(6)
            break
        case "7":
            firstValue += "7"
            changeShade(8)
            break
        case "8":
            firstValue += "8"
            changeShade(9)
            break
        case "9":
            firstValue += "9"
            changeShade(10)
            break
        case "0":
            firstValue += "0"
            changeShade(13)
            break
        case "+":
            changeShade(3)
            zeroValue = firstValue
            firstValue = ""
            arraySign.push("+")
            break
        case "-":
            changeShade(7)
            zeroValue = firstValue
            firstValue = ""
            arraySign.push("-")
            break
        case "*":
            changeShade(11)
            zeroValue = firstValue
            firstValue = ""
            arraySign.push("*")
            break
        case "/":
            changeShade(15)
            zeroValue = firstValue
            firstValue = ""
            arraySign.push("/")
            break
        case ".":
            changeShade(14)
            firstValue += "."
            break
        case "c":
            firstValue = ""
            changeShade(12)
            break
        case "Backspace":
            let tempVar = ""
            for (let i=0;i<firstValue.length-1;i++){
                tempVar += firstValue[i]
            }
            firstValue = tempVar
            break
    }
    screen.innerText = `${firstValue}`;
    if (!zeroValue){
        zeroValue = "0"
    }
    if (e.key == "Enter") {
        if (arraySign[0] == "+") {
            arraySign.pop()
            add(zeroValue,firstValue)
        } else if (arraySign[0] == "-") {
            arraySign.pop()
            subtract(zeroValue,firstValue)
        } else if (arraySign[0] == "*") {
            arraySign.pop()
            multiply(zeroValue,firstValue)
        } else if (arraySign[0] == "/") {
            arraySign.pop()
            divide(zeroValue,firstValue)
        }
        firstValue = ""
    }
})

function changeShade(pos) {
    numPad[pos].style.backgroundColor = "gray"
    setTimeout(() => {
        numPad[pos].style.backgroundColor = "white"
    },100)
}

function add(a,b) {
    const total = parseInt(a) + parseInt(b)
    screen.innerText = `${total}`
}
function subtract(a,b) {
    const total = parseInt(a) - parseInt(b)
    console.log(total)
    screen.innerText = `${total}`
}
function multiply(a,b) {
    const total = parseInt(a) * parseInt(b)
    console.log(total)
    screen.innerText = `${total}`
}
function divide(a,b) {
    const total = parseInt(a) / parseInt(b)
    console.log(total)
    screen.innerText = `${total}`
}