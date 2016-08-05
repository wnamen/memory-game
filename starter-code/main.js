var cardOne = "King";
var cardTwo = "King";
var cardThree = "Queen";
var cardFour = "Queen";

if (cardOne === cardThree) {
  alert("You found a match!");
} else if (cardTwo === cardFour) {
  alert("You found a match!");
} else {
  alert("Sorry, try again!");
}

var gameBoard = document.getElementById('game-board');

function createBoard() {

  for (var i = 0; i < cards.length; i++) {
    var cardEle = document.createElement('div');
    cardEle.className = 'card';
    gameBoard.appendChild(cardEle);
  }
}

