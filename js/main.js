

// Closing mobile menu 
// let showMobileList = document.querySelector('.show-mobile-list-btn');
// let closeMobileList = document.querySelector('.close-mobile-links a');
// let mobileMenu =  document.querySelector('.links-list-mobile-holder');
// showMobileList.onclick = () => {
//     if(!mobileMenu.classList.contains('show')) {
//         mobileMenu.classList.add('show')
//     } 
// }
// closeMobileList.onclick = () => {
//     if(mobileMenu.classList.contains('show')) {
//         mobileMenu.classList.remove('show')
//     } 
// }

//Set skills Percentage

let skillBars = $('.skill-bar-percentage')
// let percentage = skillBar.getAttribute('data-percentage');
// skillBar.onclick = () => {
//     console.log(skillBars)
// }

skillBars.each(function(){
    $(this).css('width',''+$(this).data('percentage')+'%');
    $(this).find('span').text($(this).data('percentage')+' %')
});

// Show Back to top Button on 800px Scrolltop 
$(window).on('scroll',function() {
  if($(window).scrollTop() > 800) {
    $('#to-top').addClass('show');
  } else {
    $('#to-top').removeClass('show');
  }
})

//Back to Top Animate
$('#to-top').click(function(){
    $('html,body').animate({
        scrollTop: 0
    },1000);
});

// GSAP ANIMATION
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
        left: "random(1300,1500)",
        duration: 5,
        repeat: -1,
        repeatDelay: 3,
        ease: 'linear',
        repeatRefresh: true
    }
);


freeAnimation.to('#astro-fly',
    {   
        y: "10px",
        yoyo: true,
        repeat: -1,
        duration: .1,
    },
);

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
        x: "1600px",
        y: "300px",
        duration: 1,
        // scrollTrigger: {
        //     start: "800px center",
        //     scrub: true,
        // }
    },
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
        // scrollTrigger: {
        //     start: "50% 50%",
        //     // action
        //     scrub: true,
        //     toggleActions: "restart none none reverse",
        //     markers: true,
        // },
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
    end: "+=3000"
});

// gsap.fromTo('.mobile-skills .skills-list',
//     {
//         y: "-100%",
//         opacity: 0
//     },
//     {
//         y: "0px",
//         opacity: 1,
//         duration: .5,
//         scrollTrigger: {
//             //     start scroll-start
//             start: "30% center",
//             // action
//             toggleActions: "restart none none reverse",
//             // markers: true,
//         },
//         stagger: 1.2
//     },
// );




// gsap.fromTo('.rock',
//     {
//         y: "100%"
//     },
//     {
//         y: "10px",
//         duration: 1,
//         scrollTrigger: {
//             start: "center 30%",
//             // action
//             toggleActions: "restart none none reverse",
//             markers: true,
//         },
//         stagger: 1
//     },
// );