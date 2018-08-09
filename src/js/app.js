'use strict';

import vars from './blocks/vars';
import header from './blocks/header';
import carousel from './blocks/carousel';
import partners from './blocks/partners';
import gallery from './blocks/gallery';
import carousel_1 from './blocks/carousel-1';
import './blocks/popup';

import swiper from './blocks/swiper';  // файл app.js получил фунцкцию swiper_default
import swiper_l from './blocks/swiper_l';  // файл app.js получил фунцкцию swiper_default
import coverImg from './blocks/coverImg';  

$(() => {
	vars();
  header();
  carousel();
  partners();
  gallery();
  carousel_1();
  swiper_l();  //  запуск функции swiper_l 
  swiper();  //  запуск функции swiper_l
  coverImg();   
});

