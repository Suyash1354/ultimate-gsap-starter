import gsap from "gsap";

const showToastLoop = () => {
  gsap.to(".toast", {
    y: -150,
    opacity: 1,
    duration: 1,
    ease: "power4.out",
    onComplete: () => {
      gsap.to(".toast", {
        delay: 2.5,
        y: -0,
        opacity: 0,
        duration: 1,
        ease: "power4.in",
      });
    },
  });
};

showToastLoop();
