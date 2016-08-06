var cards = ['queen','queen','king','king'];
var cardsInPlay = [];

var gameBoard = document.getElementById('game-board');


function createBoard() {

  for (var i = 0; i < cards.length; i++) {
    var cardEle = document.createElement('div');

    cardEle.className = 'card';
    cardEle.setAttribute('data-card', cards[i]);
    cardEle.addEventListener('click', isTwoCards);
    cardEle.innerHTML = "<img src='/home/wnamen/fundamentals/wdi-fundamentals-memorygame/starter-code/card_cover.jpg'>";

    gameBoard.appendChild(cardEle);
  }
}

function isMatch(cards) {
 (cards[0] === cards[1]) ? alert("You found a match!") : alert("Sorry, try again!");
}

function isTwoCards() {
  cardsInPlay.push(this.getAttribute('data-card'));

  console.log(this.getAttribute('data-card'));

  if (this.getAttribute('data-card') === 'king') {
    this.innerHTML = "<img src='/home/wnamen/fundamentals/wdi-fundamentals-memorygame/starter-code/king_of_spades.png'>";
  } else {
    this.innerHTML = "<img src='/home/wnamen/fundamentals/wdi-fundamentals-memorygame/starter-code/queen_of_hearts.png'>";
  }

  if (cardsInPlay.length === 2) {
    isMatch(cardsInPlay);
    cardsInPlay = [];
  }

}

createBoard();
