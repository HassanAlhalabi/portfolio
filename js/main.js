// Page Loader
window.addEventListener("load", () => {
  document.getElementById("page-loader").style.display = "none";
});

// GSAP ANIMATION

// Plugins Register
gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(ScrollTrigger);

const headerAnimation = gsap.timeline();

const freeAnimation = gsap.timeline();

ScrollTrigger.create({
  trigger: "header",
  pin: true,
  scrub: true,
  start: "top top",
  end: "+=1000",
  pinSpacing: false,
});

// ****************************************************************** //
// ***************************** Header ***************************** //
// ****************************************************************** //

headerAnimation.fromTo(
  "#header-star1",
  {
    top: "100%",
    right: "random(0,200)",
  },
  {
    top: "-100%",
    right: "random(1000,2000)",
    duration: 2,
    repeat: -1,
    repeatDelay: 3,
    ease: "linear",
    repeatRefresh: true,
  }
);

headerAnimation.to("#my-name", {
  y: "800px",
  x: "400px",
  duration: 0.1,
  scrollTrigger: {
    scrub: 0.5,
    start: "top 5%",
  },
});

headerAnimation.to("#my-job", {
  y: "800px",
  x: "-400px",
  duration: 0.1,
  scrollTrigger: {
    scrub: 0.5,
    start: "top 5%",
  },
});

headerAnimation.to("#astro", {
  x: "1000px",
  duration: 0.1,
  scrollTrigger: {
    scrub: 1,
    start: "top 100px",
  },
});

headerAnimation.to("#alien-space-ship", {
  top: "-1000px",
  left: "-1000px",
  duration: 0.1,
  scrollTrigger: {
    scrub: 1,
    start: "top 100px",
  },
});

headerAnimation.fromTo(
  "#astro-fly",
  {
    top: "70%",
    left: "random(0,200)",
  },
  {
    top: "-100%",
    left: "random(1500,1800)",
    duration: 5,
    repeat: -1,
    repeatDelay: 3,
    ease: "linear",
    repeatRefresh: true,
  }
);

freeAnimation.to("#alien-space-ship", {
  y: "10%",
  yoyo: true,
  repeat: -1,
});

freeAnimation.from("#my-name, #my-job", {
  top: 0,
  duration: 1,
});

// ****************************************************************** //
// ***************************** Skills ***************************** //
// ****************************************************************** //

const skillsDesktopAnime = gsap.timeline();
const skillsMobileAnime = gsap.timeline();

// Desktop Animation //
const skillsDesktopAstroFlyTrigger = () => {
  skillsDesktopAnime.to("#skills-astro-fly", {
    top: "30%",
    left: "120%",
    duration: 2,
  });
};

const skillsDesktopRoverTrigger = () => {
  gsap.to("#rover", {
    y: "-1px",
    duration: 0.1,
    repeat: -1,
    yoyou: true,
  });
  skillsDesktopAnime.from(
    "#rover",
    {
      right: "100%",
    },
    "<1"
  );
};

const skillsDesktopListAnimeTrigger = () => {
  skillsDesktopAnime.fromTo(
    ".skills-list",
    {
      y: "-50%",
      opacity: 0,
    },
    {
      y: "0px",
      opacity: 1,
      duration: 0.4,
      stagger: 0.4,
    },
    "<.1"
  );
};

const skillsDesktopAnimationTrigger = () => {
  skillsDesktopAstroFlyTrigger();
  skillsDesktopRoverTrigger();
  skillsDesktopListAnimeTrigger();
  return skillsDesktopAnime;
};

const createDesktopScrollTrigger = () =>
  ScrollTrigger.create({
    animation: skillsDesktopAnimationTrigger(),
    trigger: "#skills",
    pin: true,
    anticipatePin: 1,
    scrub: true,
    start: "top top",
    end: "+=3000",
  });

// Mobile Animation
const skillsMobileAstroFlyTrigger = () => {
  skillsMobileAnime.to("#skills-astro-fly", {
    top: "30%",
    left: "220%",
    duration: 2,
  });
};

const skillsMobileRoverTrigger = () => {
  gsap.to("#rover", {
    y: "-1px",
    duration: 0.1,
    repeat: -1,
    yoyou: true,
  });
  skillsMobileAnime.from(
    "#rover",
    {
      right: "100%",
    },
    "<1"
  );
};

const skillsMobileListAnimeTrigger = () => {
  skillsMobileAnime.to(".skills-list", {
    y: "0",
    opacity: 1,
    stagger: 0.5,
    duration: 5,
  });
};

const skillsMobileAnimationTrigger = () => {
  skillsMobileAstroFlyTrigger();
  skillsMobileRoverTrigger();
  skillsMobileListAnimeTrigger();
  return skillsMobileAnime;
};

const createMobileScrollTrigger = () =>
  ScrollTrigger.create({
    animation: skillsMobileAnimationTrigger(),
    trigger: "#skills",
    pin: true,
    scrub: true,
    start: "top top",
  });

ScrollTrigger.matchMedia({
  // desktop
  "(min-width: 800px)": function () {
    createDesktopScrollTrigger();
  },

  // mobile
  "(max-width: 799px)": function () {
    createMobileScrollTrigger();
  },
});

// ****************************************************************** //
// ***************************** Portfolio ************************** //
// ****************************************************************** //

const portfolioAnime = gsap.timeline();

portfolioAnime.fromTo(
  "#portfolio-astro-fly",
  {
    top: "30%",
    left: "calc(100% + 200px)",
  },
  {
    top: "90%",
    left: "-100%",
    duration: 2,
  }
);

ScrollTrigger.create({
  animation: portfolioAnime,
  trigger: "#portfolio",
  pin: true,
  // pinSpacing: false,
  anticipatePin: 1,
  scrub: true,
  start: "top top",
  end: "+=2000",
});

freeAnimation.to(".space-rock", {
  y: "10%",
  yoyo: true,
  repeat: -1,
  duration: 1,
  ease: "ease-in-out",
});

const planetsAnime = gsap.timeline();

planetsAnime.fromTo(
  ".planet",
  {
    top: "30%",
    left: "10%",
  },
  {
    duration: 4,
    motionPath: {
      path: "M -28 30 C 913 17 707 288 -286 580",
    },
  }
);

planetsAnime.fromTo(
  ".projects-list",
  {
    y: "-50%",
    opacity: 0,
  },
  {
    y: "0px",
    opacity: 1,
    duration: 0.4,
    stagger: 0.4,
  },
  "<.1"
);

ScrollTrigger.create({
  animation: planetsAnime,
  trigger: "#portfolio",
  // pinSpacing: false,
  anticipatePin: 1,
  scrub: 1,
  start: "top top",
  end: "+=2000",
});

// ****************************************************************** //
// ***************************** Contact **************************** //
// ****************************************************************** //

const contactAnime = gsap.timeline();

contactAnime.fromTo(
  "#contact-astro-fly",
  {
    top: "0px",
    left: "-100px",
  },
  {
    top: "90%",
    left: "100%",
    motionPath: {
      path: "M -28 30 C 486 62 384 193 676 62 C 1165 185 799 305 1285 237 C 1437 62 1734.3333 341.6667 1960 386",
    },
    duration: 1.5,
  }
);

contactAnime.to(".astro-to-march", {
  left: "65%",
  duration: 1,
});

ScrollTrigger.create({
  animation: contactAnime,
  trigger: "#contact-me",
  pin: true,
  // pinSpacing: false,
  anticipatePin: 1,
  scrub: 1,
  start: "top top",
  end: "+=2000",
});

const explode = () => {
  return freeAnimation.fromTo(
    ".boom",
    {
      transform: "scale(0)",
      opacity: 1,
    },
    {
      transform: "scale(1)",
      opacity: 0,
      duration: 0.4,
      stagger: 0.1,
      repeat: 1,
    }
  );
};
