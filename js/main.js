

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
$(window).on('scroll',function(){
  console.log()
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
    },1000)
});

// GSAP ANIMATION
gsap.registerPlugin(ScrollTrigger);

const animation = gsap.timeline();

// Stars Animation

animation.fromTo('#header-star1',
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

// Header Text Animation

gsap.from('#my-name, #my-job',{
    top: 0,
    duration: 1
})

animation.to('#my-name',{
    y: '800px',
    x: "400px",
    duration: .1,
    scrollTrigger: {
        scrub: .5,
        start: 'top 5%'
    }
})

animation.to('#my-job',{
    y: '800px',
    x: "-400px",
    duration: .1,
    scrollTrigger: {
        scrub: .5,
        start: 'top 5%'
    }
})

animation.to('#astro',{
    x: "1000px",
    duration: .1,
    scrollTrigger: {
        scrub: 1,
        start: 'top 100px'
    }
});

animation.to('#alien-space-ship',{
    x: "-1000px",
    y: "-1000",
    duration: .1,
    scrollTrigger: {
        scrub: 1,
        start: 'top 100px'
    }
});

gsap.to('#alien-space-ship',
    {
        y: "10%",
        yoyo: true,
        repeat: -1
    },
);


animation.fromTo('#astro-fly',
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
