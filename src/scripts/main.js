'use strict';

const thumbs = document.querySelector('#thumbs');
const mainImg = document.querySelector('#largeImg');

thumbs.addEventListener('click', (eventC) => {
  eventC.preventDefault();

  const link = eventC.target.closest('.list-item__link');

  if (!link) {
    return;
  }

  const largeImgUrl = link.getAttribute('href');
  const thumbImg = link.querySelector('img');

  mainImg.src = largeImgUrl;
  mainImg.alt = thumbImg.alt || 'image';
});
