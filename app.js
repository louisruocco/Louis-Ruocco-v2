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
    }, 2750)

    setTimeout(() => {
        slideIn(subtitle, 0);
    }, 3750)

})

window.addEventListener("scroll", () => {
    const aboutTitle = document.querySelector(".about-title");
    const aboutText = document.querySelector(".about-text");
    const selfie = document.querySelector(".selfie");
    const portfolioTitle = document.querySelector(".portfolio-title");
    const portfolioText = document.querySelector(".portfolio-text");
    const cvTitle = document.querySelector(".cv-title");
    const cvText = document.querySelector(".cv-text");
    const cvImage = document.querySelector(".cv-image");

    pushDownAppear(aboutTitle, 1.5);
    setTimeout(() => {
        slideIn(aboutText, 1.5);
        slideInAlt(selfie, 1.5);
    }, 1500)

    pushDownAppear(portfolioTitle, 1.5);
    setTimeout(() => {
        slideIn(portfolioText, 1.5);
    }, 1500)

    const topPosition = portfolioTitle.getBoundingClientRect().bottom;
    const windowPosition = window.innerHeight / 1;
    if(topPosition < windowPosition){
        project.forEach(box => {
            setTimeout(() => {
                box.classList.add("slide-in");
            }, num += 100)
        })
    }

    pushDownAppear(cvTitle, 1.5);
    setTimeout(() => {
        slideIn(cvText, 1.5);
        slideIn(cvImage, 1.5);
    }, 1500)
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