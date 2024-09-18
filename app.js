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




// Nope... Unless it isn't supported...
import gsap from 'https://cdn.skypack.dev/gsap@3.12.0'
import { ScrollTrigger } from 'https://cdn.skypack.dev/gsap@3.12.0/ScrollTrigger'

if (!CSS.supports('animation-timeline: scroll()') && matchMedia('(prefers-reduced-motion: no-preference)')) {
  gsap.registerPlugin(ScrollTrigger)

  const scrub = 0.5
  const trigger = 'main'

  gsap.set('p > span', {
    '--progress': 0,
    backgroundPositionX: 'calc(-200vmax + (var(--progress) * 200vmax)), calc(-200vmax + (var(--progress) * 200vmax)), 0',
    color: 'transparent',
  })
  gsap.to('p > span', {
    '--progress': 1,
    scrollTrigger: {
      trigger,
      scrub,
      start: 'top top',
      end: 'top top-=75%'
    }
  })
  gsap.to('p > span', {
    color: 'white',
    scrollTrigger: {
      trigger,
      scrub,
      start: 'top top-=75%',
      end: 'bottom bottom'
    }
  })
} 


