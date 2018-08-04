'use strict';

import imagesLoaded from 'imagesloaded';

export default gallery;

gallery.init = function () {
  document.querySelectorAll('.gallery').forEach(function (gallery) {
    let imgLoad = imagesLoaded(gallery);

    imgLoad.on('always', function(instance) {
      //console.log('all images are loaded');
    });

    imgLoad.on('progress', function (instance, image) {
      //let result = image.isLoaded ? 'loaded' : 'broken';
      //console.log('image is ' + result + ' for ' + image.img.src);
      image.isLoaded ? image.img.classList.add('gallery__img--loaded') : image.img.classList.add('gallery__img--broken');
      imagesLayout(gallery.querySelector('.gallery__inner'), 20);
    });

    window.addEventListener('resize', function () {
      imagesLayout(gallery.querySelector('.gallery__inner'), 20);
    })
  });
};

gallery.bindUIActions = function () {
  document.addEventListener('click', addGalleryElements);
};

function gallery() {
  gallery.init();
  gallery.bindUIActions();
}

function imagesLayout(container, gutter) {
  let images = container.querySelectorAll('img'), size, viewportWidth = window.innerWidth;

  switch(true) {
    case  viewportWidth < 900 && viewportWidth >= 600:
      size = 2;
      break;
    case viewportWidth < 600:
      size = 1;
      break;
    default:
      size = 3;
  }

  for (let i = 0; i < images.length; i = i + size) {
    let sum = 0, sumGutter = 0, h;

    for (let j = 0; j < size; j++) {
      images[i + j] ? (sum = sum + images[i + j].naturalWidth/images[i + j].naturalHeight, sumGutter++) : null;
    }

    h = (container.clientWidth - sumGutter*gutter)/sum + 'px';

    for (let j = 0; j < size; j++) {
      images[i + j] ? images[i + j].style.height = h : null;
    }
  }
}

function addGalleryElements(event) {
  let actionElement = event.target.closest('[data-toggle="gallery"]');
  if (actionElement) {
    let xhr = new XMLHttpRequest();

    actionElement.disabled = true;

    xhr.onload = function () {
      if (xhr.status === 200) {
        //console.log(xhr.status, xhr.statusText);
        let responseData = JSON.parse(xhr.responseText);

        responseData.forEach(function (item) {
          let element = document.createElement('a');

          element.className = 'gallery__item';
          element.setAttribute('href', item.src);
          element.setAttribute('data-fancybox', 'gallery');
          element.innerHTML = `<img class="gallery__img" src="${item.srcPreview}" alt="${item.alt}">`;
          document.querySelector(actionElement.getAttribute('data-target')).querySelector('.gallery__inner').appendChild(element);
        });

        gallery.init();
        actionElement.disabled = false;
      }
    };
    xhr.onerror = function () {
      //console.log(xhr.status, xhr.statusText);
      actionElement.innerHTML = 'Error with code ' + xhr.status;
    };
    xhr.open('GET', actionElement.getAttribute('data-src'), true);
    xhr.send();
  }
}