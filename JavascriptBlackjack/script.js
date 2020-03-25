let blackjackGame = {
	'you': {'scopeSpan': '#your-blackjack-result', 'div': '#your-box', 'score': 0},
	'dealer': {'scopeSpan': '#dealer-blackjack-result', 'div': '#dealer-box', 'score': 0},
	'cards': ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'K', 'J', 'Q', 'A'],
	'cardsMap': {'2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'K': 10, 'J': 10, 'Q': 10, 'A': [1,11]},
};

const YOU = blackjackGame['you'];
const DEALER = blackjackGame['dealer'];
const hitSound = new Audio('static/sounds/swish.m4a');

document.querySelector('#blackjack-hit-button').addEventListener('click', blackjackHit);
document.querySelector('#blackjack-deal-button').addEventListener('click', blackjackDeal);

function blackjackHit() {
	let card = randomCard();
	console.log(card);
	showCard(card, YOU);
	updateScore(card, YOU);
	showScore(YOU);
	// showScore(YOU);
	console.log(YOU['score']);
	// showCard(DEALER);
}

function randomCard () {
	let randomIndex = Math.floor(Math.random() * 13);
	return blackjackGame['cards'][randomIndex]
}

function showCard(card, activePlayer) {
	let cardImage = document.createElement('img');
	cardImage.src = 'static/images/' + card +'.jpg';
	document.querySelector(activePlayer['div']).appendChild(cardImage);
	hitSound.play()
}

function blackjackDeal() {
	let yourImage = document.querySelector('#your-box').querySelectorAll('img');
	let dealerImage = document.querySelector('#dealer-box').querySelectorAll('img');
	
	for (i=0; i < yourImage.length; i++) {
		yourImage[i].remove();
	}

	for (i=0; i < dealerImage.length; i++) {
		dealerImage[i].remove();
	}
	
}

function updateScore(card, activePlayer) {
	activePlayer['score'] += blackjackGame['cardsMap'][card];
}

function showScore(activePlayer) {
	document.querySelector(activePlayer['scopeSpan']).textContent = activePlayer['score'];
}

