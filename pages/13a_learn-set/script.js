import gsap from "gsap";

gsap.set(".gsap-box",{
    opacity:0,
    x:100
})

gsap.to(".gsap-box",{
    opacity:1,
    x:0,
    duration:.8,
    ease:"circ.out"
})