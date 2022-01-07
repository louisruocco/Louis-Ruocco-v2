const grids = document.querySelectorAll(".background-div");
const links = document.querySelectorAll(".links");
const nav = document.querySelector(".nav");

let num = 0;

grids.forEach(grid => {
    setTimeout(() => {
        grid.style.backgroundColor = "black";
    }, num += 100)
});

links.forEach(link => {
    setTimeout(() => {
        link.classList.add("appear");
    }, num += 500)
})

setTimeout(() => {
    nav.classList.add("appear");
}, 750)

function pushDownAppear (element, top){
    const topPosition = element.getBoundingClientRect().top;
    const windowPosition = window.innerHeight / top;
    if(topPosition < windowPosition){
        element.classList.add("push-down-appear");
    }
}

function slideIn (element, top){
    const topPosition = element.getBoundingClientRect().top;
    const windowPosition = window.innerHeight / top;
    if(topPosition < windowPosition){
        element.classList.add("slide-in");
    }
}

window.addEventListener("load", () => {
    const title = document.querySelector(".title");
    const subtitle = document.querySelector(".subtitle");
    setTimeout(() => {
        pushDownAppear(title, 0);
    }, 4000)
    setTimeout(() => {
        slideIn(subtitle, 0);
    }, 5000)
})