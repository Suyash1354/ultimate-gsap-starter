import gsap from "gsap";

const animate = gsap.to(".box", {
  rotation: 360,
  borderRadius: "50%",
  duration: 5,
  ease: "circ.out",
  paused:true
});

const play = document.querySelector(".play");
const pause = document.querySelector(".pause");
const resume = document.querySelector(".resume");
const restart = document.querySelector(".restart");
const reverse = document.querySelector(".reverse");
const kill = document.querySelector(".kill");
const repeat = document.querySelector(".repeat")
const yoyo = document.querySelector(".yoyo");

play.addEventListener("click", () => {
  animate.play();
});

pause.addEventListener("click", () => {
  animate.pause();
});

resume.addEventListener("click", () => {
  animate.resume();
});

restart.addEventListener("click", () => {
  animate.restart();
});

reverse.addEventListener("click", () => {
  animate.reverse();
});

kill.addEventListener("click", () => {
  animate.kill();
});

yoyo.addEventListener("click", () => {
  animate.yoyo(true);
});


repeat.addEventListener("click",()=>{
    animate.repeat(2)
})

