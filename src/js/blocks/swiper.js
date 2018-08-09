'use strict';

import Swiper from 'swiper'; // получить от модуля swiper Swiper конструктор

export default swiper; // отдаём функцию swiper_default в глобальную обл видимости


function swiper() {
  var screenWidth = $(window).width();;

  $(window).on('resize', ()=> {
    initSwiper();
    screenWidth = $(window).width();
  });


  initSwiper();


  function initSwiper() {
      console.log('init swiper');

    $('.slider').each(function(index) { 
      var slider = $(this);

      if (slider.hasClass('slider-three')) {

        var set = {
          slidesPerView: 3,
          spaceBetween: 35,
          loop: true,
          centeredSlides: true,
          watchOverflow: true,
          autoplay: {
            delay: 50000,
          },
          watchOverflow: true,
          breakpoints: {
            1200: {
              slidesPerView: 2,
              spaceBetween: 20,
              centeredSlides: false,                      
            },

            850: {
              slidesPerView: 2,
              spaceBetween: 15,
              centeredSlides: false,                
            },
            650: {
              slidesPerView: 1,
              spaceBetween: 15,
              centeredSlides: true,                
            }            
          },
          pagination: {
              el: '.swiper-pagination',
              clickable: true, 
          }
        } 

      }else if(slider.hasClass('slider-fhour-row2')){
        var set = {
          slidesPerView: 4,
          spaceBetween: 35,
          watchOverflow: true,
          slidesPerColumn: 2,           
          autoplay: {
            delay: 50000,
          },
          watchOverflow: true,
          breakpoints: {
            1200: {
              slidesPerView: 3,
              spaceBetween: 20,
              centeredSlides: false,                      
            },

            1000: {
              slidesPerView: 2,
              spaceBetween: 15,
              centeredSlides: false,                
            },
            650: {
              slidesPerView: 1,
              spaceBetween: 15,
              centeredSlides: true,
              slidesPerColumn: 1,                
            }            
          },
          pagination: {
              el: '.swiper-pagination',
              clickable: true, 
          }
        }        
      }else if(slider.hasClass('slider-one')){
        var set = {
          slidesPerView: 1,
          centeredSlides: true,
          loop: true,
          effect: 'flip',
           flipEffect: {
            rotate: 30,
            slideShadows: false,
          },
          watchOverflow: true,
          autoplay: {
            delay: 500000,
          },
          watchOverflow: true,
          pagination: {
              el: '.swiper-pagination',
              clickable: true,              
          }
        }        
      }else if(slider.hasClass('slider-two-row2')){
        var set = {
          slidesPerView: 2,
          spaceBetween: 35,
          watchOverflow: true,
          slidesPerColumn: 3,           
          autoplay: {
            delay: 50000,
          },
          watchOverflow: true,
          breakpoints: {
            1200: {
              slidesPerView: 2,
              spaceBetween: 20,
              centeredSlides: false,                      
            },

            1000: {
              slidesPerView: 2,
              spaceBetween: 15,
              centeredSlides: false,                
            },
            800: {
              slidesPerView: 1,
              spaceBetween: 15,
              centeredSlides: true,
              slidesPerColumn: 3,                
            }            
          },
          pagination: {
              el: '.swiper-pagination',
              clickable: true, 
          }
        }        
      }
      var chSlider = new Swiper(slider,set)
    });

  }
}