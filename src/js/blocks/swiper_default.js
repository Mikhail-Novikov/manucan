'use strict';

import Swiper from 'swiper'; // получить от модуля swiper Swiper конструктор

export default swiper_default; // отдаём функцию swiper_default в глобальную обл видимости




/*carousel.slickOptions = {
  infinite: false,
  prevArrow: '<button type="button" class="slick-prev slick-arrow"><svg role="img" class="icon-svg-angle-right">\n' +
  '<use xlink:href="#icon-svg-angle-right"></use>\n' +
  '</svg></button>',
  nextArrow: '<button type="button" class="slick-next slick-arrow"><svg role="img" class="icon-svg-angle-right">\n' +
  '<use xlink:href="#icon-svg-angle-right"></use>\n' +
  '</svg></button>'
};*/



function swiper_default() {
  var screenWidth = $(window).width();;

  $(window).on('resize', ()=> {
    initSwiper();
    screenWidth = $(window).width();
  });


      initSwiper();


  function initSwiper() {
      console.log(screenWidth);

    $('.slider').each(function(index) { 
      var slider = $(this);
      var chSlider = undefined;

      if (screenWidth < 1200 && chSlider == undefined) {
        chSlider = new Swiper(slider, {
          slidesPerView: 1,
          spaceBetween: 15,
          watchOverflow: true,
          autoplay: {
            delay: 50000,
          },
          slidesPerColumn: 3,
          slidesPerColumnFill: 'row',
          watchOverflow: true,
          breakpoints: {
            1200: {
              slidesPerView: 4,
              spaceBetween: 20,
              slidesPerColumnFill: 'column',
              slidesPerColumn: 1,          
            },

            850: {
              slidesPerView: 3,
              spaceBetween: 20,
              slidesPerColumn: 3                
            },
            560: {
              slidesPerView: 1,
              spaceBetween: 20,
              slidesPerColumn: 3            
            },
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
              slidesPerColumn: 3           
            }
          },
          pagination: {
              el: '.swiper-pagination',
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          } 
        });
      } else if (screenWidth > 1200 && chSlider != undefined) {
        chSlider.destroy();
        chSlider = undefined;
        slider.find('.swiper-wrapper').removeAttr('style');
        slider.find('.swiper-slide').removeAttr('style');
      }

    });

  }
}