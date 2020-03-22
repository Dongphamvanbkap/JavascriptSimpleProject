function rpsGame(yourChoice) {
	console.log(yourChoice);
	var humanChoice, botChoice;
	// humanChoice = yourChoice.id;
	botChoice = botChoiceVal(botChoiceNum());
	console.log(botChoice);
	// results = decideWinner(humanChoice, botChoice);
	// message = finalMessage(results);
	// rpsFrontEnd(yourChoice.id, botchoice, message);
}

let botChoiceNum = () => Math.floor(Math.random() * 3);
let botChoiceVal = (num) => ['rock', 'paper', 'scissors'][num];

