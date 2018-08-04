'use strict';

import 'slick-carousel';

export default partners;

partners.slickOptions = {
  infinite: false,
  prevArrow: '<button type="button" class="slick-prev slick-arrow"><svg role="img" class="icon-svg-angle-right">\n' +
  '<use xlink:href="#icon-svg-angle-right"></use>\n' +
  '</svg></button>',
  nextArrow: '<button type="button" class="slick-next slick-arrow"><svg role="img" class="icon-svg-angle-right">\n' +
  '<use xlink:href="#icon-svg-angle-right"></use>\n' +
  '</svg></button>',
  mobileFirst: true,
  responsive: [{
    breakpoint: 599,
    settings: "unslick"
  }]
};

function partners() {
  document.querySelectorAll('.partners').forEach(function (item) {
    partners.slickOptions.appendArrows = item.querySelector('.partners__arrows');
    $(item.querySelector('.partners__row--carousel-xs')).slick(partners.slickOptions);
  });
}