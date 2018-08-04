'use strict';

import vars from './blocks/vars';
import header from './blocks/header';
import carousel from './blocks/carousel';
import partners from './blocks/partners';
import gallery from './blocks/gallery';
import carousel_1 from './blocks/carousel-1';
import './blocks/popup';
import swiper_default from './blocks/swiper_default';  // файл app.js получил фунцкцию swiper_default

$(() => {
	vars();
  header();
  carousel();
  partners();
  gallery();
  carousel_1();
  swiper_default();  //  запуск функции swiper_default 
});