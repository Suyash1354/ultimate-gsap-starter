import gsap from "gsap";

const card = document.querySelector("#card");

card.addEventListener("mouseenter", () => {
  gsap.to(card, {
    rotationY: "180",
    duration: 0.5,
    ease: "sine.out",
    delay: 0.1,
  });
});

card.addEventListener("mouseleave", () => {
  gsap.to(card, {
    rotationY: "0",
    duration: 0.5,
    ease: "sine.in",
  });
});
