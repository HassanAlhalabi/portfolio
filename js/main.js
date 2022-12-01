
// Page Loader
window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('page-loader').style.display = 'none';
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
    pinSpacing: false
});

// Stars Animation

headerAnimation.fromTo('#header-star1',
    {
        top: "100%",
        right: "random(0,200)"
    },
    {
        top: "-100%",
        right: "random(1000,2000)",
        duration: 2,
        repeat: -1,
        repeatDelay: 3,
        ease: 'linear',
        repeatRefresh: true
    }
);

headerAnimation.to('#my-name',{
    y: '800px',
    x: "400px",
    duration: .1,
    scrollTrigger: {
        scrub: .5,
        start: 'top 5%'
    }
})

headerAnimation.to('#my-job',{
    y: '800px',
    x: "-400px",
    duration: .1,
    scrollTrigger: {
        scrub: .5,
        start: 'top 5%'
    }
})

headerAnimation.to('#astro',{
    x: "1000px",
    duration: .1,
    scrollTrigger: {
        scrub: 1,
        start: 'top 100px'
    }
});

headerAnimation.to('#alien-space-ship',
    {
        top: "-1000px",
        left: "-1000px",
        duration: .1,
        scrollTrigger: {
            scrub: 1,
            start: 'top 100px'
        }
    }
);

headerAnimation.fromTo('#astro-fly',
    {
        top: "70%",
        left: "random(0,200)"
    },
    {
        top: "-100%",
        left: "random(1500,1800)",
        duration: 5,
        repeat: -1,
        repeatDelay: 3,
        ease: 'linear',
        repeatRefresh: true
    }
);


// freeAnimation.to('#astro-fly',
//     {   
//         y: "10px",
//         yoyo: true,
//         repeat: -1,
//         duration: .1,
//     },
// );

freeAnimation.to('#alien-space-ship',
    {
        y: "10%",
        yoyo: true,
        repeat: -1
    },
);

freeAnimation.from('#my-name, #my-job',{
    top: 0,
    duration: 1
})



// Skills

const skillsAnime = gsap.timeline();

skillsAnime.to('#skills-astro-fly',
    {
        top: "30%",
        left: "calc(100% + 40px)",
        duration: 2,
    },
);

gsap.to('#rover',{
    y: '-1px',
    duration: .1,
    repeat: -1,
    yoyou: true
})

skillsAnime.from('#rover',
    {
        right: "100%"
    },
    "<1"
);


skillsAnime.fromTo('.d-skills-list',
    {
        y: "-50%",
        opacity: 0
    },
    {
        y: "0px",
        opacity: 1,
        duration: .4,
        stagger: .4
    },
    "<.1"
);

ScrollTrigger.create({
    animation: skillsAnime,
    trigger: "#skills",
    pin: true,
    anticipatePin: 1,
    scrub: true,
    start: "top top",
    end: "+=3000",
});


const portfolioAnime = gsap.timeline();

portfolioAnime.fromTo('#portfolio-astro-fly',
    {
        top: "30%",
        left: "calc(100% + 200px)",
    },
    {
        top: "90%",
        left: "-100%",
        duration: 2,
    },
);

ScrollTrigger.create({
    animation: portfolioAnime,
    trigger: "#portfolio",
    pin: true,
    // pinSpacing: false,
    anticipatePin: 1,
    scrub: true,
    start: "top top",
    end: "+=2000"
});

const planetsAnime = gsap.timeline();

planetsAnime.fromTo(".planet", 
    {
        top: "30%",
        left: "10%",
    },
    {
        // top: "10%",
        // left: "40%",
        duration: 4,
        motionPath: { 
            path: "M -28 30 C 913 17 707 288 -445 656"
          }
    },
);

planetsAnime.fromTo('.projects-list',
    {
        y: "-50%",
        opacity: 0
    },
    {
        y: "0px",
        opacity: 1,
        duration: .4,
        stagger: .4
    },
    "<.1"
);

ScrollTrigger.create({
    animation: planetsAnime,
    trigger: "#portfolio",
    // pinSpacing: false,
    anticipatePin: 1,
    scrub: .5,
    start: "top top",
    end: "+=1000",
});







