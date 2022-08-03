const bars = document.querySelectorAll(".bar");

[1,3,2,2,1,1,3].forEach((e,i) => {
    bars[i].style.height = `${e}rem`
})