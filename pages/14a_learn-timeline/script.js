import gsap from "gsap";

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
    const cardImg = card.querySelector("img");
    const info = card.querySelector(".info");

    gsap.set(cardImg, { y: 500, opacity: 0 });
    gsap.set(info, { y: 500, opacity: 0 });

    const tl = gsap.timeline({ paused: true });

    tl.to(cardImg, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power4.out",
    }).to(info, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power4.out",
    });

     let isPlayed = false;

    card.addEventListener("click", () => {
        if (!isPlayed) {
            tl.play();
        } else {
            tl.reverse();
        }
        isPlayed = !isPlayed;
    });
});