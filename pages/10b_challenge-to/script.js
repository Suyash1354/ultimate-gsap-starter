import gsap from "gsap";

gsap.to(".toast", {
  y: -200,
  opacity: 1,
  stagger: 0.8,

  onComplete: () => {
    gsap.to(".toast", {
      y: 0,
      opacity: 0,
      delay: 2,
      stagger: 0.8,
    });
  },
});
