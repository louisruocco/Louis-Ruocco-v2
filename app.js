const projectBoxes = document.querySelectorAll(".project");
const portfolio = document.querySelector(".projects");

function scrollAppear(element, top){
    const topPosition = element.getBoundingClientRect().top
    const windowPosition = window.innerHeight / top;

    if(topPosition < windowPosition){
        element.classList.add("appear")
    }
}

function slideIn(title, text, top){
    const topPosition = title.getBoundingClientRect().top
    const windowPosition = window.innerHeight / top;

    if(topPosition < windowPosition){
        title.classList.add("slide");
        text.classList.add("slide-other");
    }
}

window.addEventListener("scroll", () => {
    const nav = document.querySelector(".nav");
    const aboutTitle = document.querySelector(".about-title");
    const aboutText = document.querySelector(".about-text");
    const portfolioTitle = document.querySelector(".portfolio-title");
    const portfolioText = document.querySelector(".portfolio-text");
    const projects = document.querySelector(".projects");

    scrollAppear(nav, 1);
    scrollAppear(projects, 2);

    slideIn(aboutTitle, aboutText, 2.5)
    slideIn(portfolioTitle, portfolioText, 2.5)
});

projectBoxes.forEach(box => { 
    box.addEventListener("mouseover", (e) => {
        if(e.target.classList == "project"){
            const text = e.target.children[1];
            text.classList.add("appear");
        }
    })
})