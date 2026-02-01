import gsap from "gsap";

const reactions = document.querySelectorAll(".reactions button");

reactions.forEach((btn, idx) => {
  btn.addEventListener("click", () => {
    gsap.fromTo(
      btn,
      { y: 0, rotationY: 0 },
      {
        y: -80,
        rotationY: 360,
        duration: 0.5,
        onComplete: () => {
          gsap.to(btn, {
            y: -90,
            opacity: 0,
          });
        },
      },
    );
  });
});
