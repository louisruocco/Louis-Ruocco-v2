const icons = document.querySelectorAll(".nav i");
const project = document.querySelectorAll(".project");

let num = 0;

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

function slideInAlt (element, top){
    const topPosition = element.getBoundingClientRect().top;
    const windowPosition = window.innerHeight / top;
    if(topPosition < windowPosition){
        element.classList.add("slide-in-alt");
    }
}

function elementAppear(element){
    element.addEventListener("mouseover", (e) => {
        const parent = e.target.parentElement
        if(parent.tagName == "A"){
            const desc = parent.children[1]
            desc.style.transition = "1s ease"
            desc.style.opacity = 1;
        }

        element.addEventListener("mouseout", () => {
            const desc = parent.children[1];
            desc.style.transition = "1s ease"
            desc.style.opacity = 0;
        })
    })
}

window.addEventListener("load", () => {
    const title = document.querySelector(".title");
    const subtitle = document.querySelector(".subtitle");
    const grids = document.querySelectorAll(".background-div");
    const links = document.querySelectorAll(".links");
    const nav = document.querySelector(".nav");

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
    const portfolioTitle = document.querySelector(".portfolio-title");
    const portfolioText = document.querySelector(".portfolio-text");

    pushDownAppear(aboutTitle, 2);
    pushDownAppear(portfolioTitle, 2);
    
    slideIn(aboutText, 2.5);
    slideInAlt(selfie, 2.25);
    slideIn(portfolioText, 2.5);
 
    project.forEach(box => {
        const topPosition = box.getBoundingClientRect().top;
        const windowPosition = window.innerHeight / 0;
        if(topPosition < windowPosition){
            setTimeout(() => {
                box.classList.add("slide-in");
            }, num += 200)
        }
    })
});

icons.forEach(icon => {
    icon.addEventListener("mouseover", (e) => {
        const parent = e.target.parentElement
        if(parent.tagName == "A"){
            const desc = parent.children[1]
            desc.style.transition = "1s ease"
            desc.style.opacity = 1;
        }

        icon.addEventListener("mouseout", () => {
            const desc = parent.children[1];
            desc.style.transition = "1s ease"
            desc.style.opacity = 0;
        })
    })
})

project.forEach(box => {
    box.addEventListener("mouseover", () => {
        box.style.marginTop = "-20px"
        box.style.transition = ".1s ease";
    })

    box.addEventListener("mouseout", () => {
        box.style.marginTop = "0px"
        box.style.transition = ".3s ease";
    })
})