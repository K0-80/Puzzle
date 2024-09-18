const sides = document.querySelectorAll(".side");
const tl = gsap.timeline({ repeat: -1 });

function animateTiles(i) {
  tl.to(
    `.side-${i} .tile`,
    {
      duration: 0.1,
      scale: 0.4,
      rotate: 90,
      z: "-50vmin",
      yoyo: true,
      repeat: 1,
      repeatDelay: 0.5,
      stagger: {
        amount: 0.6,
        grid: "auto",
        from: "edges"
      }
    },
    i * 0.1
  );
}

[...sides].forEach((face, i) => animateTiles(i));
