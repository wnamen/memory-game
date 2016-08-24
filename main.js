var cards = ['queen','queen','king','king'];
var cardsInPlay = [];

var gameBoard = document.getElementById('game-board');


function createBoard() {

  var shuffledDeck = shuffle(cards);

  for (var i = 0; i < shuffledDeck.length; i++) {
    var cardEle = document.createElement('div');

    cardEle.className = 'card';
    cardEle.setAttribute('data-card', shuffledDeck[i]);
    cardEle.addEventListener('click', isTwoCards);
    cardEle.innerHTML = "<img src='card_cover.jpg'>";

    gameBoard.appendChild(cardEle);
  }
}

function shuffle(arr) {
  var currentIndex = arr.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = arr[currentIndex];
    arr[currentIndex] = arr[randomIndex];
    arr[randomIndex] = temporaryValue;
  }

  return arr;
}


function isMatch(cards) {
 (cards[0] === cards[1]) ? alert("You found a match!") : alert("Sorry, try again!");
}

function isTwoCards() {
  cardsInPlay.push(this.getAttribute('data-card'));

  console.log(this.getAttribute('data-card'));

  if (this.getAttribute('data-card') === 'king') {
    this.innerHTML = "<img src='king_of_spades.png'>";
  } else {
    this.innerHTML = "<img src='queen_of_hearts.png'>";
  }

  if (cardsInPlay.length === 2) {
    isMatch(cardsInPlay);
    cardsInPlay = [];
  }

}

createBoard();
