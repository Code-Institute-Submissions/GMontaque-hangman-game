// play and stop music
let musicStart = document.getElementById("play-btn");
let musicStop = document.getElementById("stop-btn");
musicStart.addEventListener("click", play);
musicStop.addEventListener("click", stop);
let mySound = new Audio("../assests/audio/gameplay-soundtrack.mp3");

// starts music
function play() {
	console.log("sound");
	mySound.play();
}

// stops music
function stop() {
	console.log("sound stop");
	mySound.pause();
}

// stop watch function
let seconds = 0;
let tens = 0;
let minutes = 0;
let appendTens = document.getElementById("tens");
let appendSeconds = document.getElementById("seconds");
let appendMinutes = document.getElementById("minutes");
let buttonReset = document.getElementsByClassName(
	"play-area-top-restart-btn"
)[0];
let Interval;

buttonReset.addEventListener("click", stopReset);
function stopReset() {
	// reset stop watch
	clearInterval(Interval);
	tens = "00";
	seconds = "00";
	minutes = "00";
	appendTens.innerHTML = tens;
	appendSeconds.innerHTML = seconds;
	appendMinutes.innerHTML = minutes;
	// reloads blank squares
	loadBlanks();
	// resets game to start on letter press
	gameStarted = false;
	// reset game lives
	document.getElementById("gameLives").innerHTML = 7;
	// reset alphabet letters
	let li = document.getElementsByClassName("play-area-letters")[0];
	li.innerHTML = "";
	createLetters();
	// remove disable off word length drop down
	let wordNumLength = document.getElementById("guess-word");
	wordNumLength.removeAttribute("disabled");
	// reset canvas
	const canvas = document.getElementById("hangman");
	const context = canvas.getContext("2d");
	context.clearRect(0, 0, canvas.width, canvas.height);
	// reset letters left to guess
	lettersLeftToGuess = parseInt(document.getElementById("guess-word").value);
}

function startTimer() {
	tens++;

	if (tens <= 9) {
		appendTens.innerHTML = "0" + tens;
	}

	if (tens > 9) {
		appendTens.innerHTML = tens;
	}

	if (tens > 99) {
		seconds++;
		appendSeconds.innerHTML = "0" + seconds;
		tens = 0;
		appendTens.innerHTML = "0" + 0;
	}

	if (seconds > 9) {
		appendSeconds.innerHTML = seconds;
	}

	if (seconds == 60) {
		minutes++;
		appendMinutes.innerHTML = "0" + minutes;
		seconds = 0;
		appendSeconds.innerHTML = "0" + 0;
	}
}

//creates alphabet letters
function createLetters() {
	for (let i = 0; i < 26; i++) {
		let li = document.getElementsByClassName("play-area-letters")[0];
		li.innerHTML += `<button class="letterBtn" 
		value="${(i + 10).toString(36)}">${(i + 10)
			.toString(36)
			.toUpperCase()}</button>`;
	}
	activateLetter();
}

// game rules
let gameRules = document.getElementsByClassName("play-area-main-rules-btn")[0];
gameRules.addEventListener("click", displayGameRules);

function displayGameRules() {
	let gameRules = document.getElementsByClassName(
		"play-area-main-gameRules"
	)[0];

	if (gameRules.classList.contains("display-none")) {
		gameRules.classList.remove("display-none");
	} else {
		gameRules.classList.add("display-none");
	}
}

// returns word for user to guess
function wordGuess() {
	let wordNumLength = document.getElementById("guess-word").value;
	let randomNum = Math.floor(Math.random() * 6);
	let wordLength6 = [
		"baaing",
		"babble",
		"babied",
		"babies",
		"babkas",
		"baboon",
	];
	let wordLength7 = [
		"cabalas",
		"cabanas",
		"cabanes",
		"cabaret",
		"cabbage",
		"cabbagy",
	];
	let wordLength8 = [
		"habanera",
		"habanero",
		"habenula",
		"habitans",
		"habitant",
		"habitats",
	];

	if (parseInt(wordNumLength) === 6) {
		return wordLength6[randomNum];
	} else if (parseInt(wordNumLength) === 7) {
		return wordLength7[randomNum];
	} else if (parseInt(wordNumLength) === 8) {
		return wordLength8[randomNum];
	}
}

// print empty boxes which will contain correct letters on page load and if user makes a change to word length to guess
let autoGuessWord = document.getElementById("guess-word");
autoGuessWord.addEventListener("change", loadBlanks);

function loadBlanks() {
	let guess = document.getElementById("guess-word").value;
	let blankSquares = document.getElementsByClassName("blankSquares")[0];
	blankSquares.innerHTML = "";
	for (let i = 0; i < guess; i++) {
		blankSquares.innerHTML += `<div class="blankSquares-letters">${i}<i class="fa-solid fa-question"></i></div>`;
	}
	console.log(guess);
}

// loose game function
function looseGame() {
	console.log("game over");
	let looseSound = new Audio("../assests/audio/wah-wah-sad-trombone-6347.mp3");
	looseSound.play();
}

// win game function
function winGame() {
	console.log("game won");
	let looseSound = new Audio("../assests/audio/user-wins.mp3");
	looseSound.play();
}

// fucntion reduce lives counter on wrong guess
function reduceLives(lives) {
	const canvas = document.getElementById("hangman");
	const context = canvas.getContext("2d");

	switch (parseInt(lives)) {
		case 7:
			context.strokeStyle = "#444";
			context.lineWidth = 10;
			context.beginPath();
			context.moveTo(175, 225);
			context.lineTo(5, 225);
			context.moveTo(40, 225);
			context.lineTo(25, 5);
			context.lineTo(100, 5);
			context.lineTo(100, 25);
			context.stroke();
			break;

		case 6:
			context.lineWidth = 5;
			context.beginPath();
			context.arc(100, 50, 25, 0, Math.PI * 2, true);
			context.closePath();
			context.stroke();
			break;

		case 5:
			context.beginPath();
			context.moveTo(100, 75);
			context.lineTo(100, 140);
			context.stroke();
			break;

		case 4:
			context.beginPath();
			context.moveTo(100, 85);
			context.lineTo(60, 100);
			context.stroke();
			break;

		case 3:
			context.beginPath();
			context.moveTo(100, 85);
			context.lineTo(140, 100);
			context.stroke();
			break;

		case 2:
			context.beginPath();
			context.moveTo(100, 140);
			context.lineTo(80, 190);
			context.stroke();
			break;

		case 1:
			context.beginPath();
			context.moveTo(100, 140);
			context.lineTo(125, 190);
			context.stroke();
			break;
	}

	if (lives == 1) {
		document.getElementById("gameLives").innerHTML = lives - 1;
		looseGame();
	} else {
		document.getElementById("gameLives").innerHTML = lives - 1;
	}
}

// disables letter once used
function disableLetter(e) {
	// pass the inital click event when letter button pressed and adds class and attribute to that element
	e.target.classList.add("btnPressed");
	e.target.setAttribute("disabled", "");
}

// updates blank squares on page
let lettersLeftToGuess = document.getElementById("guess-word");
lettersLeftToGuess.addEventListener("change", () => {
	lettersLeftToGuess = parseInt(document.getElementById("guess-word").value);
});

function checkAnswer(uGuess) {
	let letterGuessed = uGuess;
	let wordGuessArray = wordToGuess.split("");
	let blankSquares = document.getElementsByClassName("blankSquares-letters");

	for (let prop in wordGuessArray) {
		if (wordGuessArray[prop] === letterGuessed) {
			blankSquares[prop].innerHTML = letterGuessed.toUpperCase();
			lettersLeftToGuess--;
		}
	}

	if (lettersLeftToGuess == 0) {
		winGame();
	}
	console.log("letter geuss:", letterGuessed, "word to guess", wordGuessArray);
}

// generates word to guess
let wordToGuess;

// function checcks users answer against word to guess
function checkLetterGuess(uGuess, checkGame, e) {
	// gets word to be guessed
	if (checkGame === "start") {
		wordToGuess = wordGuess();
	}

	// current game lives counter
	let currentGameLives = document.getElementById("gameLives").innerHTML;
	// checks if user guess is in word to guess
	if (wordToGuess.includes(uGuess)) {
		alert(uGuess);
		checkAnswer(uGuess);
	} else {
		reduceLives(currentGameLives);
	}
	disableLetter(e);
}

// alphabet letters
function activateLetter() {
	let buttonLetter = document.getElementsByClassName("letterBtn");
	for (let letter of buttonLetter) {
		letter.addEventListener("click", startGame);
	}
}

let gameStarted = false;

// starts game
function startGame(e) {
	// disable word length drop down
	let wordNumLength = document.getElementById("guess-word");
	wordNumLength.setAttribute("disabled", "");
	// letter user has selected
	let userGuess = e.target.value;
	if (gameStarted === false) {
		// starts clock timer
		clearInterval(Interval);
		Interval = setInterval(startTimer, 10);
		gameStarted = true;
		// clicked letter passed in funtion with user guess value
		checkLetterGuess(userGuess, "start", e);
	} else {
		checkLetterGuess(userGuess, "gameRunning", e);
	}
}

window.onload = function () {
	loadBlanks();
	createLetters();
};
