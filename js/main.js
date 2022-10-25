

// Closing mobile menu 
let showMobileList = document.querySelector('.show-mobile-list-btn');
let closeMobileList = document.querySelector('.close-mobile-links a');
let mobileMenu =  document.querySelector('.links-list-mobile-holder');
showMobileList.onclick = () => {
    if(!mobileMenu.classList.contains('show')) {
        mobileMenu.classList.add('show')
    } 
}
closeMobileList.onclick = () => {
    if(mobileMenu.classList.contains('show')) {
        mobileMenu.classList.remove('show')
    } 
}

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