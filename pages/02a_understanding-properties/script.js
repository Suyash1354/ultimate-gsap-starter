import gsap from "gsap";

gsap.to(".box",{
    rotation:360,
    scale:1.2,
    borderRadius:"50%",
    ease:"power1.inOut",
    repeat:-1,
    yoyo:true,
    repeatDelay:.5,
    duration:.5,
    
    
})

