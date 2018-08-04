'use strict';

import '@fancyapps/fancybox';

$.fancybox.defaults.touch = false;
$.fancybox.defaults.btnTpl.smallBtn = '<button data-fancybox-close class="popup__close" title="{{CLOSE}}"><svg role="img" class="icon-svg-close">\n' +
  '<use xlink:href="#icon-svg-close"></use>\n' +
  '</svg></button>';