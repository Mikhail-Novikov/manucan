'use strict';

import Swiper from 'swiper'; // получить от модуля swiper Swiper конструктор

export default swiper_l; // отдаём функцию swiper_default в глобальную обл видимости



function swiper_l() {
  var screenWidth = $(window).width();;

  $(window).on('resize', ()=> {
    initSwiper();
    screenWidth = $(window).width();
  });


  initSwiper();


  function initSwiper() {
      console.log('init swiper_low');

    $('.slider-l').each(function(index) { 
      var slider = $(this);
      var chSlider = undefined;

      if (screenWidth < 1007 && chSlider == undefined) {

        
        if( slider.hasClass('slider-career') ){
          var set = {
            slidesPerView: 3,
            spaceBetween: 35,
            watchOverflow: true,
            autoplay: {
              delay: 50000,
            },
            watchOverflow: true,
            breakpoints: {
              1200: {
                slidesPerView: 3,
                spaceBetween: 20,
              },

              850: {
                slidesPerView: 2,
                spaceBetween: 25,
                loop: true                
              },
              650: {
                slidesPerView: 1,
                spaceBetween: 20,                
              },

            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true, 
            },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            } 
          };
        }

      chSlider = new Swiper(slider, set );

      } else if (screenWidth > 1007 && chSlider != undefined) {
        chSlider.destroy();
        chSlider = undefined;
        slider.find('.swiper-wrapper').removeAttr('style');
        slider.find('.swiper-slide').removeAttr('style');
      }

    });

  }
}