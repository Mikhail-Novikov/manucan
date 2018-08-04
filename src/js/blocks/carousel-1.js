'use strict';

import 'slick-carousel';

export default carousel_1;

carousel_1.slickOptions = {
  infinite: true,
  prevArrow: '<button type="button" class="slick-prev slick-arrow"><svg role="img" class="icon-svg-angle-right">\n' +
  '<use xlink:href="#icon-svg-angle-right"></use>\n' +
  '</svg></button>',
  nextArrow: '<button type="button" class="slick-next slick-arrow"><svg role="img" class="icon-svg-angle-right">\n' +
  '<use xlink:href="#icon-svg-angle-right"></use>\n' +
  '</svg></button>',
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: '0px',
  variableWidth: true
};

function carousel_1() {
  document.querySelectorAll('.carousel-1').forEach(function (item) {
    carousel_1.slickOptions.appendArrows = item.querySelector('.carousel-1__arrows');
    $(item.querySelector('.carousel-1__inner')).slick(carousel_1.slickOptions);
    item.classList.add('carousel-1--initialized');
  });
}