import gsap from "gsap";

const bar = document.querySelectorAll(".bar");

bar.forEach((bar, index) => {
  gsap.fromTo(
    bar,
    {
      scaleY: 0.4,
    },
    {
      scaleY: 1.4,
      duration: 0.5,
      ease: "sine.out",
      repeat: -1,
      yoyo: true,
      delay: index * 0.1,
    },
  );
});
