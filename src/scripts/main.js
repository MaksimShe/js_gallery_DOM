/* eslint-disable function-paren-newline */
'use strict';

const deleteRedirect = document.querySelectorAll('.list-item__link');
const arrLargePhoto = [...deleteRedirect].map((i) => i.href);

deleteRedirect.forEach((i) => i.removeAttribute('href'));

const imgClick = document.querySelectorAll('.list-item');

imgClick.forEach((item, index) =>
  item.addEventListener('click', () => mainImg(item, index)),
);

function mainImg(item, index) {
  const mainImgNow = document.querySelector('#largeImg');

  mainImgNow.setAttribute('src', arrLargePhoto[index]);
}
