const burger = document.querySelector(".hamburger");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
});

var showmobile = document.getElementById("showmobile");
var nav = document.getElementById("nav");

showmobile.addEventListener("click", function (e) {
  nav.classList.toggle("navigation");
  e.preventDefault();
});

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
  toggleActions: "play pause resume reset",
  scroller: "body",
});
const timeline = gsap.timeline();
timeline
  .from(".intro", {
    opacity: 0,
    duration: 0.5,
    y: -100,
    ease: "power3.inOut",
    backgroundPosition: "200px 0px",
  })

  .from(".header", {
    opacity: 0,
    duration: 1,
    x: -20,
    ease: "expo.inOut",
    stagger: 0.4,
  })

  .from(
    ".nav-list",
    { opacity: 0, duration: 0.5, x: -20, ease: "expo.inOut", stagger: 0.5 },
    "<0,5"
  )

  .from(".head-text", { opacity: 0, x: -20, ease: "expo.inOut", stagger: 0.5 });

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".info",
    start: "top center",
  },
  opacity: 0,
  x: -20,
  ease: "power1.in",
  stagger: 0.4,
  scoller: ".info",
  triggerActions: "play pause resume restart",
  scrub: 1,
});
tl.from(".info-area", {
  y: 20,
  opacity: 0,
  duration: 0.8,
  ease: "power2.in",
})

  .from(".info-bg", {
    x: 50,
    opacity: 0,
    duration: 0.8,
    ease: "power4.inOut",
  })

  .from(".illustration", {
    x: 200,
    opacity: 0,
    duration: 0.8,
    ease: "power4.inOut",
  })

  .from(
    ".info-text",
    {
      y: -20,
      opacity: 0,
      duration: 0.5,
      ease: "power4.inOut",
    },
    "<0.2"
  )
  .from(
    ".info-para",
    {
      y: 100,
      opacity: 0,
      duration: 0.5,
      ease: "power4.inOut",
    },
    "<0.2"
  )

  .from(".info-text2", {
    y: -20,
    opacity: 0,
    duration: 0.5,
    ease: "power4.inOut",
  })
  .from(".info-para2", {
    y: 100,
    opacity: 0,
    duration: 0.5,
    ease: "power4.inOut",
  });

let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".state",
    start: "center bottom",
    end: "bottom top",
  },
  opacity: 0,
  x: -20,
  ease: "power1.in",
  stagger: 0.4,
  scrub: 1,
});

tl2
  .fromTo(
    ".phones2",
    {
      opacity: 1,
      y: -100,
      ease: "expo.inOut",
      duration: 0.5,
      yoyo: true,
      repeat: -1,
      repeatDelay: 1,
    },
    {
      opacity: 1,
      y: 0,
      ease: "expo.inOut",
      duration: 0.5,
      yoyo: true,
      repeat: -1,
      repeatDelay: 1,
    }
  )

  .fromTo(
    ".phones",
    {
      opacity: 1,
      y: -20,
      ease: "expo.inOut",
      duration: 0.5,
      yoyo: true,
      repeat: -1,
      repeatDelay: 0.5,
    },
    {
      opacity: 1,
      y: 10,
      ease: "expo.inOut",
      duration: 0.5,
      yoyo: true,
      repeat: -1,
      repeatDelay: 0.5,
    },
    "<"
  )

  .from(".state-content", {
    x: 200,
    opacity: 0,
    duration: 0.5,
    ease: "power4.inOut",
  })
  .from(
    ".state-head",
    {
      y: -20,
      opacity: 0,
      duration: 0.5,
      ease: "power4.inOut",
    },
    "<0.5"
  )
  .from(".state-para", {
    y: 100,
    opacity: 0,
    duration: 0.5,
    ease: "power4.inOut",
  });
let tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".free",
    start: "top 70%",
    end: "bottom top",
  },
  opacity: 0,
  x: -20,
  ease: "power4.in",
});
tl3
  .from(
    ".circle-laptop",
    {
      x: 300,
      opacity: 0,
      duration: 0.8,
      ease: "power4.inOut",
      stagger: 0.5,
    },
    "+=1"
  )
  .from(
    ".circle-laptop2",
    {
      x: 300,
      opacity: 0,
      duration: 0.8,
      ease: "power4.inOut",
    },
    "-=1"
  )
  .from(".text-content", {
    x: -200,
    opacity: 0,
    duration: 0.5,
    ease: "power4.inOut",
    stagger: 0.5,
  })

  .from(
    ".text-content2",
    {
      x: -200,
      opacity: 0,
      duration: 0.5,
      ease: "power4.inOut",
      stagger: 0.5,
    },
    "<0.2"
  );
