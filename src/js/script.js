 window.onload = function () {
     let window_Width = window.innerWidth ? window.innerWidth : $(window).width();
     //preloader
     
     let preloader = $('.preloader');
     
     window.setTimeout(function () {
         
         window.setTimeout(function () {$('.preloader__item-1').addClass('item--active')})
         window.setTimeout(function () {$('.preloader__item-2').addClass('item--active')},600)
         window.setTimeout(function () {$('.preloader__item-3').addClass('item--active')},1100)
         window.setTimeout(function () {$('.preloader__item-4').addClass('item--active')},1600)
         window.setTimeout(function () {$('.preloader__item-5').addClass('item--active')},2100)
         window.setTimeout(function () {$('.preloader__item-6').addClass('item--active')},2600)
         window.setTimeout(function () {$('.preloader__item-7').addClass('item--active')},3100)
         window.setTimeout(function () {$('.preloader').addClass('disactivating')},4500)
         window.setTimeout(function () {$('.preloader').addClass('deleting')},7000)
        
         
    },1000)
     
     
     
     //menu stars mark
     const menu = document.querySelectorAll('.menu__stars');
     
     menu.forEach(function(e){
        
        let mark = e.getAttribute("data-mark");
        const array = [...e.getElementsByClassName('star')];
        let i =0;
        while(i < mark){
            
            $(array[i]).addClass('star--active'); 
            i++;
        }
         });
     //reviews stars mark
     const reviewsItem = document.querySelectorAll('.reviews__item');
     
     reviewsItem.forEach(function(e){
        
        let mark = e.getAttribute("data-mark");
        const array = [...e.getElementsByClassName('star')];
        let i =0;
        while(i < mark){
            
            $(array[i]).addClass('star--active'); 
            i++;
        }
         });
     
     //slider
     $('.slider__container').on('init', function (event, slick) {
        $('.controls__nav').append('<span class="currentSlider">1</span>/<span class="allSliders">' + slick.slideCount + '</span>');
    });
     
     $('.slider__container').slick({
        infinite: true,
        speed: 500,
        fade: true,
        nextArrow: document.querySelector('.arrow--next'),
        prevArrow: document.querySelector('.arrow--prev')
      });
     
     $('.slider__container')
        .on('afterChange', function (event, slick, currentSlide, nextSlide) {
            $('.currentSlider').html(currentSlide + 1);
        });
     
     
     
     
     
     //slider reviews
     
     $('.reviews__slider').slick({
        arrows:false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        responsive: [
          {
            breakpoint: 480,
            settings: {
                slidesToShow: 1
            }
          },
          {
            breakpoint: 680,
            settings: {
                slidesToShow: 2
            }   
          }
        ]
     });
     
     //header
     $(window).scroll(function () {
    if (window.scrollY>document.getElementById('header').scrollHeight) {
        $("#header").addClass('header--active');
        
    } else {
        $("#header").removeClass('header--active')
        
    }
     });
     
     //buttons which go to different sections on the site
     //variables:
     let headerHeight = document.getElementById('header').scrollHeight;
     let firstHeight = document.querySelector('.first').scrollHeight;
     let featuresHeight = document.querySelector('.features').scrollHeight;
     let aboutHeight = document.querySelector('.about').scrollHeight;
     let menuHeight = document.querySelector('.menu').scrollHeight;
     let sliderHeight = document.querySelector('.slider').scrollHeight;
     let reviewsHeight = document.querySelector('.reviews').scrollHeight;
     
     let sliderMargin = parseInt($('.slider').css('margin-top'));
     let reviewsMargin = parseInt($('.reviews').css('margin-top'));
     
     
     //first to menu
     $('.to-menu').click(e =>{
         e.preventDefault();
         $('html,body').animate({scrollTop:firstHeight + featuresHeight + aboutHeight - headerHeight - 20},1000);
     });
     $('.to-about').click(e =>{
        e.preventDefault();
        $('html,body').animate({scrollTop:firstHeight + featuresHeight},1000);
     });
     $('.to-app').click(e =>{
        e.preventDefault();
        $('html,body').animate({scrollTop:firstHeight + featuresHeight + aboutHeight + menuHeight + sliderHeight + reviewsHeight + sliderMargin + reviewsMargin},1000);
     });
     $('.to-gallery').click(e =>{
        e.preventDefault();
        $('html,body').animate({scrollTop:firstHeight + featuresHeight + aboutHeight + menuHeight},1000);
     });
     
     
     //show full menu
     
     
     let menuItemsList = document.querySelector('.menu__wrapper').children.length;
     let menuItemHeight = document.querySelector('.menu__item').offsetHeight;
     let rowHeight = 380;
     let columns = 3;
     let gap = 65;
     let shadow = 55;
     let menuHeightDefault = menuItemHeight + shadow;
     
     if(window_Width < 550){
         gap= 30;
         columns = 1;
     }
     if(window_Width > 550 && window_Width < 950){
         gap = 60;
         columns = 2;
         menuItemsList /= 2;
     }
     if(window_Width >= 950){
         columns = 3;
         menuItemsList /= 3;
     } 
     
     
     
     
     document.documentElement.style.setProperty('--height', menuHeightDefault + 'px'); 
     document.documentElement.style.setProperty('--col', columns); 
     document.documentElement.style.setProperty('--gap', gap + 'px');
     document.documentElement.style.setProperty('--rowHeight', rowHeight + 'px');
     document.documentElement.style.setProperty('--rows', Math.floor(menuItemsList));
    
     $('#showMenu').click(e =>{
        e.preventDefault();
        
        if($('.menu__wrapper').hasClass('menu__wrapper--active')){
            
        document.querySelector('.menu__wrapper').style.height = menuHeightDefault + 'px';
        $('.menu__wrapper').removeClass('menu__wrapper--active');
        }
        else{
            let menuHeightActive = rowHeight * menuItemsList + gap * menuItemsList;
            document.querySelector('.menu__wrapper').style.height = menuHeightActive + 'px';
            $('.menu__wrapper').addClass('menu__wrapper--active');
        }
    
     });
     
//     $('.menu__wrapper').slick({
//         arrows: false
//     });
     
     
     
     
     //animate on scroll
     
     AOS.init();
     let staticItem = $('.static__item');
     
    
         
               
  const config = {
    attributes: true
    
};
     
    const callback_1 = function() {
        let number = 0;
    let t = setInterval(function() {
                
                number += 10;
                document.getElementById('velocity').textContent = number;
                if (number == 2020){
                    clearInterval(t);
                    }
        },5)
        observer_1.disconnect();    
    }
    const callback_2 = function() {
        let number = 0;
    let t = setInterval(function() {
                number += 1;
                document.getElementById('employees').textContent = number + '+';
                if (number == 45){
                    clearInterval(t);
                    }
        },30)
        observer_2.disconnect();    
    }
    const callback_3 = function() {
        let number = 0;
    let t = setInterval(function() {
                number += 10;
                document.getElementById('orders').textContent = number ;
                if (number == 1000){
                    clearInterval(t);
                    }
        },20)
        observer_3.disconnect();    
    }
    const callback_4 = function() {
        let number = 0;
    let t = setInterval(function() {
                number += 1;
                document.getElementById('products').textContent = number;
                if (number == 89){
                    clearInterval(t);
                    }
        },30)
        observer_4.disconnect();    
    }
    
    
    
     var target_1 = document.getElementById('target-1');
     var target_2 = document.getElementById('target-2');
     var target_3 = document.getElementById('target-3');
     var target_4 = document.getElementById('target-4');
     
     
     const observer_1 = new MutationObserver(callback_1);
     const observer_2 = new MutationObserver(callback_2);
     const observer_3 = new MutationObserver(callback_3);
     const observer_4 = new MutationObserver(callback_4);


     observer_1.observe(target_1, config);
     observer_2.observe(target_2, config);
     observer_3.observe(target_3, config);
     observer_4.observe(target_4, config);
     

     
     //contact animation
     
     $('#contact').click(e=>{
         e.preventDefault();
         $('.contact__overlay').addClass('contact__overlay--active');
     })
     
     $('.contact__close').click(e=>{
        e.preventDefault();
        $('.contact__overlay').addClass('contact__overlay--disappearence');
        window.setTimeout(function () {
        $('.contact__overlay').removeClass('contact__overlay--disappearence');    
        $('.contact__overlay').removeClass('contact__overlay--active');
        },2000)
         
     });
     
     //burger
     
     
     $('#burger').click(e =>{
        e.preventDefault();
         if($('#burger').hasClass('burger--active')){
             $('#burger').addClass('burger--disactive');
             $('#overlay').addClass('overlay--disactive');
             window.setTimeout(function () {

              $('#burger').removeClass('burger--active');  
              $('#burger').removeClass('burger--disactive');  
              $('#overlay').removeClass('overlay--disactive');  
              $('#overlay').removeClass('overlay--active');  
         },1100)
         }
         else{
             
         $('#burger').addClass('burger--active');
         $('#overlay').addClass('overlay--active')
         
         
            }
         
     });
 
}//даже не думай
        












