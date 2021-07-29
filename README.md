# blogr-landing-animation-page

This is the [blogr-landing-animation-page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)

## Main Overview

The overview of the project is to build out the landing page of susnnyside creative site. The site is responsive for both mobile,tablet and a desktop version of the design.

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
  The designs were created to the following widths:

- Mobile: 375px
  -Tablet: 768px
- Desktop: 1440px

### Screenshot

![active desktop desgin](/images/desktop-design.jpg)
![mobile desgin](images/mobile-design.jpg)
![mobile menu desgin](images/mobile-menu.jpg)

### Links

- Solution URL: [solution URL ](https://github.com/victoriaodemakin/blogr-landing-animation-page)
- Live Site URL: [live site URL ](https://victoriaodemakin.github.io/blogr-landing-animation-page/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- GSAP Js
- ScrollTrigger Plugin
- Mobile-first workflow
- [Javascript](https://reactjs.org/) - JS library

### What I learned

In this section i recap over some of my major learnings while working through this project. Writing these code providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```html
 <div class="hamburger" id="showmobile">
            <span class="burger"></span>
            <span class="burger"></span>
            <span class="burger"></span>
          </div>
        </header>
        <nav class="navigation" id="nav">
          <ul class="nav-header">
            <li class="product nav-list">
              <a href="#product">
                Product<img
                  src="images/icon-arrow-dark.svg"
                  alt="click to see sub-menu"
                  class="dark-arrow"
                />
                <img
                  src="/images/icon-arrow-light.svg"
                  alt="click to see sub-menu"
                  class="light-arrow"
                />
              </a>

              <ul id="nav-links">
                <li><a href="#">Overview</a></li>
                <li><a href="#">Pricing </a></li>
                <li><a href="#">Marketplace </a></li>
                <li><a href="#">Features </a></li>
                <li><a href="#">Integrations</a></li>
              </ul>
            </li>

            <li class="company nav-list">
              <a href="#company">
                Company<img
                  src="images/icon-arrow-dark.svg"
                  alt="click to see sub-menu"
                  class="dark-arrow"
                />
                <img
                  src="images/icon-arrow-light.svg"
                  alt="click to see sub-menu"
                  class="light-arrow"
                />
              </a>
              <ul id="nav-links">
                <li><a href="#">About </a></li>
                <li><a href="#">Team </a></li>
                <li><a href="#">Blog </a></li>
                <li><a href="#"></a>Careers</li>
              </ul>
            </li>
```

```css
*,
*::after,
*::before {
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  --white-snow: hsl(0, 4%, 90%);
  --white-text: hsl(0, 0%, 100%);
  --red-cta-text: hsl(356, 100%, 66%);
  --red-cta-hover: hsl(355, 100%, 74%);
  --blue-heading: hsl(208, 49%, 24%);
  --footer-text-blue: hsl(240, 2%, 79%);
  --footer-bg: hsl(240, 10%, 16%);
  --body-text: hsl(207, 13%, 34%);
  --intro-bg: hsla(13, 100%, 72%, 0.9);
  --cta-mobile: hsla(353, 100%, 62%, 1);
  --body-blue-bg: hsl(237, 17%, 21%);
  --dark-blue-bg: hsl(237, 23%, 32%);
  --font1: "Ubuntu", sans-serif;
  --font2: "Overpass", sans-serif;
}
html:focus-within {
  scroll-behavior: smooth;
}
/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
body {
  width: 100%;
  font-family: "Ubuntu", sans-serif;
  font-family: "Overpass", sans-serif;
}
main {
  width: 100%;
}
.anime {
}

.intro {
  background: linear-gradient(var(--intro-bg), var(--cta-mobile)),
    url(images/bg-pattern-intro.svg);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;

  padding: 1em 1em 3em 1em;
  border-bottom-left-radius: 6rem;
  margin-bottom: 6em;
}

.hamburger {
  width: 40px;
  cursor: pointer;
  display: block;
}
.burger {
  width: 70%;
  height: 3px;
  background: white;
  display: block;
  border-radius: 10px;
  transition: all 0.3s;
  position: relative;
}
/* this is an adjacent selector which means any element following thre preceeding defined element is affect */
.burger + .burger {
  margin-top: 5px;
}
/* this is the active class which will be defined in the js when toggle is needed of class burger */
.hamburger.active .burger:nth-child(1) {
  animation: top 0.3s ease forwards;
}
.burger:nth-child(1) {
  animation: top-2 0.3s ease forwards;
}

.hamburger.active .burger:nth-child(2) {
  animation: scaled 0.3s ease forwards;
}
.burger:nth-child(2) {
  animation: scaled-2 0.3s ease forwards;
}
.hamburger.active .burger:nth-child(3) {
  animation: bottom 0.3s ease forwards;
}
.burger:nth-child(3) {
  animation: bottom-2 0.3s ease forwards;
}
/* definding the keyframes for the animation */
@keyframes top {
  0% {
    top: 0;
    transform: rotate(0deg);
  }
  50% {
    top: 4px;
    transform: rotate(0deg);
  }
  100% {
    top: 20px;

    transform: rotate(45deg);
  }
}
```

```js
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
});
```

### Continued development

All other future projects will be focused on using Vue.Js Framework.which is found useful that to refine and perfect future project
