import gsap from "gsap";

const repeat = document.querySelector(".repeat")

const animate = gsap.from(".card",{
    y:100,
    duration:1,
    ease:"expo.out",
    stagger:.2
})

repeat.addEventListener("click", ()=>{

    animate.restart()
})
