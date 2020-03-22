function rpsGame(yourChoice) {
	var humanChoice, botChoice;
	humanChoice = yourChoice.id;
	botChoice = botChoiceVal(botChoiceNum());
	results = decideWinner(humanChoice, botChoice);
	console.log(results);
	message = finalMessage(results);
	console.log(message);
	rpsFrontEnd(yourChoice.id, botChoice, message);
}

let botChoiceNum = () => Math.floor(Math.random() * 3);
let botChoiceVal = (num) => ['rock', 'paper', 'scissors'][num];
let decideWinner = (yourChoice, computerChoice) => {
	var rpsData = {
		'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
		'paper': {'rock': 1, 'paper': 0.5, 'scissors': 0},
		'scissors': {'paper': 1, 'scissors': 0.5, 'rock': 0},
	}
	var yourScore = rpsData[yourChoice][computerChoice];
	var computerScore = rpsData[computerChoice][yourChoice];
	return [yourScore, computerScore];
}
let finalMessage = ([yourScore, computerScore]) => {
	if (yourScore === 0) {
		return {'message': 'You Lost!', 'color': 'red'}
	} else if (yourScore === 0.5) {
		return {'message': 'You Tied!', 'color': 'yellow'}
	} else {
		return {'message': 'You Won!', 'color': 'green'}
	}
}

let rpsFrontEnd = (humanImageChoice, botImagechoice, finalMessage) => {
	var imageDatabase = {
		'rock': document.getElementById('rock').src,
		'paper': document.getElementById('paper').src,
		'scissors': document.getElementById('scissors').src,
	}

	document.getElementById('rock').remove();
	document.getElementById('paper').remove();
	document.getElementById('scissors').remove();

	var humanTag = document.createElement('div');
	var botTag = document.createElement('div');
	var messageTag = document.createElement('div');

	humanTag.innerHTML = "<img src='" + imageDatabase[humanImageChoice] + "'height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 11);'>";
	messageTag.innerHTML = "<h1 style='color:" + finalMessage['color'] + "; cont-size:60px; padding: 30px;'>" + finalMessage['message'] + "</h1>"
	botTag.innerHTML = "<img src='" + imageDatabase[botImagechoice] + "'height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 11);'>";


	document.getElementById('flex-box-rps-div').appendChild(humanTag);
	document.getElementById('flex-box-rps-div').appendChild(messageTag);
	document.getElementById('flex-box-rps-div').appendChild(botTag);
}
