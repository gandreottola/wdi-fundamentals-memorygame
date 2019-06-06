alert('Hello, friends.');

var cards = [
{
rank: "queen",
suit: "hearts",
cardImage: "images/queen-of-hearts.png"
},
{
rank: "queen",
suit: "diamonds",
cardImage: "images/queen-of-diamonds.png"
},
{
rank: "king",
suit: "hearts",
cardImage: "images/king-of-hearts.png"
},
{
rank: "king",
suit: "dimaonds",
cardImage: "images/king-of-diamonds.png"
}
];

var cardsInPlay = [];
var score = 0;

function flipBack() {
this.setAttribute('src', "images/back.png"); 
};

function checkForMatch() {
if (cardsInPlay[0] === cardsInPlay[1]) {
alert("You found a match!");
score +=1;
document.getElementById("score").textContent = + score;
}
else {
alert("Sorry, try again.");
document.getElementById("score").textContent = + score;
}
};

function flipCard() {
var cardId = this.getAttribute('data-id');
console.log("User flipped " + cards[cardId].rank);
console.log(cards[cardId].cardImage);
console.log(cards[cardId].suit);
cardsInPlay.push(cards[cardId].rank);
this.setAttribute('src', cards[cardId].cardImage); 
if (cardsInPlay.length === 2) {
	checkForMatch();
	resetGame();
}
};

function createBoard() {
for (var i = 0; i < cards.length; i++) {
var cardElement = document.createElement('img');
cardElement.setAttribute('src', "images/back.png");
cardElement.setAttribute('data-id', i);
cardElement.addEventListener("click", flipCard);
document.getElementById("game-board").appendChild(cardElement);
}
};

function resetGame() {
alert("Click reset to play again!");
for (var i = 0; i <= cards.length; i++) {
var cardReset = document.createElement('img');
cardReset.setAttribute('src', "images/back.png");
cardReset.addEventListener("click",flipBack);
document.getElementById("reset").appendChild(cardReset);

}	
};
createBoard();