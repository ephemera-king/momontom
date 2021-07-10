const images = [
  'img/감나무.jpg',
  'img/겨울.jpg',
  'img/나무.jpg',
  'img/나무.jpg',
  'img/나무저녁.jpg',
  'img/벗꽃.jpg',
  'img/은하수.jpg',
  'img/은하수지상.jpg',
  'img/지구.jpg',
  'img/지구아침.jpg',
  'img/ㅋㅋ.jpg',
  'img/폭발.jpg',
  'img/하늘고래.jpg',
];
const filter = document.querySelector('.box');

const chosenImage = images[Math.floor(Math.random() * images.length)];

document.body.style.backgroundImage = `url(${chosenImage})`;
document.body.style.backgroundSize = `outo`;
