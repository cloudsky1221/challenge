const container = document.querySelector(".main-container")

function cat() {
    container.replaceChildren()
    const xhttp1 = new XMLHttpRequest();
    xhttp1.onload = () => {
        const catFact = JSON.parse(xhttp1.responseText).fact;
        const para = document.createElement("p");
        para.classList.add("text");

        if (!catFact){
            para.innerText = "Facts exhausted"
        } else {
            para.innerText = `${catFact}`;
        }
        container.appendChild(para);
    }
    xhttp1.open("GET", "https://catfact.ninja/fact");
    xhttp1.send()
}

function dog() {
    container.replaceChildren()
    const xhttp2 = new XMLHttpRequest();
    xhttp2.onload = function () {
        const url = JSON.parse(this.responseText).message;
        const image = document.createElement("div");
        image.classList.add("image");

        if (!url){
            image.innerText = "Sorry! No Image." 
        } else {
            image.style.backgroundImage = `url('${url}')`;
        }
        container.appendChild(image)
    }
    xhttp2.open("GET", "https://dog.ceo/api/breeds/image/random");
    xhttp2.send();
}