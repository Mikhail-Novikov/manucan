'use strict';

export default header;

header.stickyPoint = 70;

header.bindUIActions = function () {
  document.addEventListener('click', headerToggle);
  document.addEventListener('click', headerLangToggle);
  window.addEventListener('scroll', headerSticky);
};

function header() {
  header.bindUIActions();
  headerSticky();
}

function headerToggle(event) {
  let target = event.target;
  if (target.closest('.header__toggle')) {
    target.closest('.header').classList.toggle('header--open');
    document.body.classList.toggle('page__body--header-open');
  }
}

function headerLangToggle(event) {
  let target = event.target;
  if (target.closest('.header__lang-toggle')) {
    target.closest('.header__lang').classList.toggle('header__lang--open');
  } else {
    document.querySelectorAll('.header__lang').forEach(function (item) {
      item.classList.remove('header__lang--open');
    });
  }
}

function headerSticky() {
  if (document.querySelector('.header')) {
    let headerClassList = document.querySelector('.header').classList;
    let bodyClassList = document.querySelector('body').classList;    
    if (pageYOffset >= header.stickyPoint) {
      headerClassList.add('header--sticky');
      bodyClassList.add('document--scroll');      
      if (headerClassList.contains('header--transparent--yes')) {
        headerClassList.remove('header--transparent--yes');
        headerClassList.add('header--transparent--no');
      }
    } else {
      headerClassList.remove('header--sticky');
      bodyClassList.remove('document--scroll');      
      if (headerClassList.contains('header--transparent--no')) {
        headerClassList.remove('header--transparent--no');
        headerClassList.add('header--transparent--yes');
      }
    }
  }
}