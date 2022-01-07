const grids = document.querySelectorAll(".background-div");
const links = document.querySelectorAll(".links");
const nav = document.querySelector(".nav");

let num = 0;

grids.forEach(grid => {
    setTimeout(() => {
        grid.style.backgroundColor = "black";
    }, num += 90)
});

links.forEach(link => {
    setTimeout(() => {
        link.classList.add("slide-in");
    }, num += 400)
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
    }, 3500)
    setTimeout(() => {
        slideIn(subtitle, 0);
    }, 4500)
})

window.addEventListener("scroll", () => {
    const aboutTitle = document.querySelector(".about-title");
    const aboutText = document.querySelector(".about-text");
    const selfie = document.querySelector(".selfie");
    pushDownAppear(aboutTitle, 2);
    setTimeout(() => {
        aboutText.classList.add("slide-in")
    }, 1500)
    setTimeout(() => {
        selfie.classList.add("slide-in-alt");
    }, 2500)
})