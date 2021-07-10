const quotes = [
  {
    quote: 'Confidence is contagious. So is lack of confidence.',
    author: 'Vince Lombardi',
  },
  {
    quote: 'He is richest who is content with hte least.',
    author: 'Socrates',
  },
  {
    quote:
      'Shallow men believe in luck, Strong men believe in cause and effect.',
    author: 'Ralph Waldo Emerson',
  },
  {
    quote: 'Only those who dare to fail greatly can ever achieve greatly.',
    author: 'John F.Kennedy',
  },
  {
    quote: '삶이 있는 한 희망은 있다.',
    author: '키케로',
  },
  {
    quote: '직업에서 행복을 찾아라. 아니면 행복이 무엇인지 절대 모를 것이다.',
    author: '엘버트 허버드',
  },
  {
    quote: '피할수 없으면 즐겨라.',
    author: '로버트 엘리엇',
  },
  {
    quote:
      '절대 어제를 후회하지 마라. 인생은 오늘의 나 안에 있고 내일은 스스로 만드느 것이다.',
    author: 'L.론허바드',
  },
  {
    quote: '행복은 습관이다, 그것을 몸에 지니라.',
    author: '허버드',
  },
  {
    quote: '1퍼센트의 가능성, 그것이 나의 길이다.',
    author: '나폴레옹',
  },
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
