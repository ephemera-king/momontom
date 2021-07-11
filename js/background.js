const images = [
  'img/벗꽃.jpg',
  'img/은하수.jpg',
  'img/은하수지상.jpg',
  'img/지구.jpg',
  'img/지구아침.jpg',
  'img/ㅋㅋ.jpg',
  'img/폭발.jpg',
];
const filter = document.querySelector('.box');

const chosenImage = images[Math.floor(Math.random() * images.length)];

document.body.style.backgroundImage = `url(${chosenImage})`;
document.body.style.backgroundSize = `auto`;
