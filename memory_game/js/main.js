alert('Hello, friends.');

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardOne;
cardOne = cards[0];
cardsInPlay.push(cardOne);
var cardTwo;
cardTwo = cards[2];
cardsInPlay.push(cardTwo);

console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);

if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	}
		else {
			alert("Sorry, try again.");
		}