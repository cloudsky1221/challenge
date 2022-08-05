const select = document.querySelector("#categoryFilter");
const sorting = document.querySelector("#sorting");
const uList = document.querySelector(".container ul");
const button = document.querySelector("button");

const data = [
    {name:"Lassi",category:"Food",value:4},
    {name:"Jet",category:"Object",value:18},    
    {name:"Cat",category:"Animal",value:20},
    {name:"Horse",category:"Animal",value:22},    
    {name:"Kite",category:"Object",value:1},
    {name:"Ball",category:"Object",value:6},    
    {name:"Mango",category:"Food",value:20},
    {name:"Fan",category:"Object",value:10},    
    {name:"Apple",category:"Food",value:6},
    {name:"Ice-Cream",category:"Food",value:3},    
    {name:"Book",category:"Object",value:28},
    {name:"Dog",category:"Animal",value:24},    
]

function dataShow() {
    switch (sorting.value){
        case "nameIncrease":
            data.sort((a,b) => a.name > b.name)
            break
        case "nameDecrease":
            data.sort((a,b) => a.name < b.name)
            break
        case "valueIncrease":
            data.sort((a,b) => a.value - b.value)
            break
        case "valueDecrease":
            data.sort((a,b) => b.value - a.value)
            break
    }
    data.forEach(e => {
        const listObject = document.createElement("li");
        const nameObject = document.createElement("div");
        nameObject.classList.add("name");
        nameObject.innerText = `${e.name}`;
        const categoryObject = document.createElement("div");
        categoryObject.classList.add("category");
        categoryObject.innerText = `${e.category}`;
        const valueObject = document.createElement("div");
        valueObject.classList.add("value");
        valueObject.innerText = `${e.value}`;
        listObject.appendChild(nameObject)
        listObject.appendChild(categoryObject)
        listObject.appendChild(valueObject)
        uList.appendChild(listObject)
    })
}

button.addEventListener("click", () => {
    const array = [];
    uList.replaceChildren()
    dataShow()
    const nameValue = select.value;
    const option = document.querySelectorAll(".category");
    option.forEach(e => {
        array.push(e)
    })
    if (nameValue === "none") {
        array.forEach(e => {
            e.parentElement.style.display = "flex"
        })
    } else if (nameValue === "Animal") {
        array.filter(e => {
            repeat(e.innerText == "Animal", e)
        })
    } else if (nameValue === "Food") {
        array.filter(e => {
            repeat(e.innerText == "Food", e)
        })
    } else if (nameValue === "Object") {
        array.filter(e => {
            repeat(e.innerText == "Object", e)
        })
    }
})

function repeat(yesNo,element) {
    if (yesNo) {
        element.parentElement.style.display = "flex";
    } else if (!yesNo) {
        element.parentElement.style.display = "none";
    }
}

dataShow()