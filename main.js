
var cardOne = "queen"; //set card variables to queen and king 
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king"; 


// if (var cardOne === var cardTwo) {
//		 alert('You found a match!');
// } else if (var cardThree === var cardFour) {
//		alert('You found a match!');
// } else {
// 		alert('Sorry, try again.');
// } 

var gameBoard = document.getElementById('game-board')

var createCards = document.getElementsByClassName('card');
for (var x = 0; x < 5; x++) {
	var newCard = document.createElement('div');
	newCard.className = 'card';
	document.getElementById('game-board').appendChild(newCard);
}


var cards = Array ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var createBoard = function (i) {
	for (var i = 0; i< cards.length; i++) {
		cardElement.setAttribute ('data-card', cards[i])
	}
		cardElement.innerHTML = '<img src="king.png" alt="King" />';
			}
}

var isMatch = function ();
function isTwoCards(); {
	cardsInPlay.push (this.getAttribute('data-card'));
	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}
}


