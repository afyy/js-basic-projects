const quotes = [
  {
    name:'Micheal Jordan',
    quote:'Talent wins games, but teamwork and intelligence wins championships'
  },
  {
    name:'Charlie Chaplin',
    quote:'You’ll never find rainbows if you’re looking down.'
  },
  {
    name:'Oscar Wilde',
    quote:'Be yourself; everyone else is already taken.'
  },
  {
    name:'Alber Einstein',
    quote:'Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe..'
  },
  {
    name:'Frank Zappa',
    quote:'So many books, so little time.'
  },
  {
    name:'Marcus Tullius Cicero',
    quote:'A room without books is like a body without a soul.'
  },
  {
    name:'Mae West',
    quote:'You only live once, but if you do it right, once is enough.'
  }
]




const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');

quoteBtn.addEventListener('click', displayQuote);

function displayQuote () {
  let number = Math.floor(Math.random()*quotes.length);
  quote.innerHTML = quotes[number].quote;
  quoteAuthor.innerHTML = quotes[number].name;
}