const option = document.querySelectorAll("[name='answers']");
const check = document.querySelector(".submit");
const para = document.querySelector("p");


check.addEventListener("click", () => {
    option.forEach((element) => {
        if (element.checked){
            para.innerText = `${element.value}`
        }
    })
})