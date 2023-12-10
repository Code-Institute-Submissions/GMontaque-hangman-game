// toggle game music on and off
let playMusic = document.getElementById("toggle-music-btn");
playMusic.addEventListener("click", togglePlay);

// game background music
let mySound = new Audio("../assests/audio/gameplay-soundtrack.mp3");

// variables for stopwatch
let seconds = 0;
let tens = 0;
let minutes = 0;
let appendTens = document.getElementById("tens");
let appendSeconds = document.getElementById("seconds");
let appendMinutes = document.getElementById("minutes");
let Interval;
// button resets game
let buttonReset = document.getElementsByClassName(
	"play-area-top-restart-btn"
)[0];
buttonReset.addEventListener("click", stopReset);
// button to show game rules
let gameRules = document.getElementsByClassName("play-area-main-rules-btn")[0];
gameRules.addEventListener("click", displayGameRules);

// checks value of select element for any change
let autoGuessWord = document.getElementById("guess-word");
autoGuessWord.addEventListener("change", loadBlanks);

// counter of letters left to guess - used by checkAnswer function
let lettersLeftToGuess = document.getElementById("guess-word");
lettersLeftToGuess.addEventListener("change", () => {
	lettersLeftToGuess = parseInt(document.getElementById("guess-word").value);
});

// stores word to guess - used by checkLetterGuess function
let wordToGuess;

// counter used by startGame function to check if game is already running
let gameStarted = false;

// listens for user keyboard press
document.addEventListener("keyup", keyboardPress);

/**
 * function plays and stop music depending on valur attribute
 */
function togglePlay() {
	// selects button by ID
	let playMusic = document.getElementById("toggle-music-btn");
	// checks the value attribute
	if (playMusic.value === "play-music") {
		// updates button inner image
		playMusic.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
		// updates value attribute
		playMusic.setAttribute("value", "stop-music");
		console.log("sound on");
		// plays sound
		mySound.play();
	} else if (playMusic.value === "stop-music") {
		// updates button inner image
		playMusic.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
		// updates value attribute
		playMusic.setAttribute("value", "play-music");
		console.log("sound off");
		// plays sound
		mySound.pause();
	}
}

/**
 * function creates stopwatch
 */
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
	// remove disable attribute off word length select element
	let wordNumLength = document.getElementById("guess-word");
	wordNumLength.removeAttribute("disabled");
	// reset canvas
	const canvas = document.getElementById("hangman");
	const context = canvas.getContext("2d");
	context.clearRect(0, 0, canvas.width, canvas.height);
	// reset letters left to guess
	lettersLeftToGuess = parseInt(document.getElementById("guess-word").value);
}

/**
 * function works with stopwatch updates number values
 */
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

/**
 * creates 26 alphabet letters which are displayed to play the game
 */
function createLetters() {
	// creates overlay to display win or loose message at end of game
	let li = document.getElementsByClassName("play-area-letters")[0];
	li.innerHTML += `<div class="end-game-message display-none"></div>`;
	// loops to create letters
	for (let i = 0; i < 26; i++) {
		li.innerHTML += `<button id="${(i + 10).toString(
			36
		)}" class="letterBtn btn btn-padding" 
		value="${(i + 10).toString(36)}">${(i + 10)
			.toString(36)
			.toUpperCase()}</button>`;
	}
	activateLetter();
}

/**
 * creates game rules overlay on game page
 */
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

/**
 * Load blanks square which represent the word to guess
 */
function loadBlanks() {
	let guess = document.getElementById("guess-word").value;
	let blankSquares = document.getElementsByClassName("blankSquares")[0];
	blankSquares.innerHTML = "";
	for (let i = 0; i < guess; i++) {
		blankSquares.innerHTML += `<div class="blankSquares-letters"><i class="fa-solid fa-question"></i></div>`;
	}
	console.log(guess);
}

/**
 * function called when user looses game
 */
function looseGame(word) {
	console.log("game over");
	// prints message tell user they lost and the word they didn't guess
	let winnerMessage = document.getElementsByClassName("end-game-message")[0];
	winnerMessage.innerHTML += `<p>Unlucky you did guess the word which was ${word} <br> Press Restart to play again</p>`;
	winnerMessage.classList.remove("display-none");
	// plays loosing sound
	let looseSound = new Audio("../assests/audio/wah-wah-sad-trombone-6347.mp3");
	looseSound.play();
}

/**
 * function called when user wins game
 */
function winGame() {
	console.log("game won");
	// prints message tell user they lost and the word they didn't guess
	let winnerMessage = document.getElementsByClassName("end-game-message")[0];
	winnerMessage.innerHTML += `<p>Congratluations you won <br> Press Restart to play again</p>`;
	winnerMessage.classList.remove("display-none");
	// plays winning sound
	let winSound = new Audio("../assests/audio/user-wins.mp3");
	winSound.play();
}

/**
 * function reduces lives counter for a wrong guess and creates hangman
 */
function reduceLives(lives) {
	const canvas = document.getElementById("hangman");
	const context = canvas.getContext("2d");
	// depending on number of lives updates hangman in webpage
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
			// display hangman head
			context.lineWidth = 5;
			context.beginPath();
			context.arc(100, 50, 25, 0, Math.PI * 2, true);
			context.closePath();
			context.stroke();
			break;

		case 5:
			// display hangman body
			context.beginPath();
			context.moveTo(100, 75);
			context.lineTo(100, 140);
			context.stroke();
			break;

		case 4:
			// display hangman left arm
			context.beginPath();
			context.moveTo(100, 85);
			context.lineTo(60, 100);
			context.stroke();
			break;

		case 3:
			// display hangman right arm
			context.beginPath();
			context.moveTo(100, 85);
			context.lineTo(140, 100);
			context.stroke();
			break;

		case 2:
			// display hangman left leg
			context.beginPath();
			context.moveTo(100, 140);
			context.lineTo(80, 190);
			context.stroke();
			break;

		case 1:
			// display hangman left right
			context.beginPath();
			context.moveTo(100, 140);
			context.lineTo(125, 190);
			context.stroke();
			break;
	}

	if (lives == 1) {
		document.getElementById("gameLives").innerHTML = lives - 1;
		looseGame(wordToGuess);
	} else {
		document.getElementById("gameLives").innerHTML = lives - 1;
	}
}

/**
 * disables the letter the user has clicked
 */
function disableLetter(e) {
	// pass the inital click event when letter button pressed and adds class and attribute to that element
	if (typeof e == "string") {
		let guessMade = document.getElementById(e);
		guessMade.classList.add("btnPressed");
		guessMade.setAttribute("disabled", "");
	} else {
		e.target.classList.add("btnPressed");
		e.target.setAttribute("disabled", "");
	}
}

/**
 * checks if the user has guessed all correct letters - using variable lettersLeftToGuess as counter
 */
function checkAnswer(uGuess) {
	// letter user guessed
	let letterGuessed = uGuess;
	// word user is trying to guess
	let wordGuessArray = wordToGuess;
	// print blank squares on webpage
	let blankSquares = document.getElementsByClassName("blankSquares-letters");

	for (let prop in wordGuessArray) {
		if (wordGuessArray[prop] === letterGuessed) {
			// updates blank square in specific index with correct user letter guess
			blankSquares[prop - 2].innerHTML = letterGuessed.toUpperCase();
			// reduces letters lettersLeftToGuess counter by one
		}
	}

	let pete = document.getElementById(letterGuessed);
	if (!pete.hasAttribute("disabled")) {
		lettersLeftToGuess--;
	}

	// check if lettersLeftToGuess is zero, user wins
	if (lettersLeftToGuess == 0) {
		winGame();
	}
	console.log("letter guess:", letterGuessed, "word to guess", wordGuessArray);
}

/**
 * function uses an API to return a word the user will guess, length of word decided by user
 */
async function wordGuess() {
	// returns the length of word number
	let wordNumLength = document.getElementById("guess-word").value;
	// api with word length value
	let file = `https://random-word-api.herokuapp.com/word?length=${wordNumLength}`;

	// fetch request and error catch
	try {
		const response = await fetch(file);
		const returnWord = await response.text();
		return returnWord;
	} catch (error) {
		console.log("error on fetch", error);
		return "";
	}
}

/**
 * function checks users answer against word to guess
 */
async function checkLetterGuess(uGuess, checkGame, e) {
	// gets word to be guessed
	if (checkGame === "start") {
		wordToGuess = await wordGuess();
	}

	// current game lives counter
	let currentGameLives = document.getElementById("gameLives").innerHTML;
	// checks if user guess is in word to guess
	if (wordToGuess.includes(uGuess)) {
		checkAnswer(uGuess);
		// alert(uGuess);
	} else {
		reduceLives(currentGameLives);
	}
	// disables letter that user pressed
	disableLetter(e);
}

/**
 * allows user to play the game using keyboard
 */
function keyboardPress(event) {
	if (event.keyCode >= 65 && event.keyCode <= 90) {
		startGame(event.key, "keyboard");
	} else {
		console.log("not a letter");
	}
}

/**
 * adds event listener to all letters user can press, starts the game
 */
function activateLetter() {
	let buttonLetter = document.getElementsByClassName("letterBtn");
	for (let letter of buttonLetter) {
		letter.addEventListener("click", startGame);
	}
}

/**
 * when called function starts the game
 */
function startGame(e, checker) {
	// disable word length drop down
	let wordNumLength = document.getElementById("guess-word");
	wordNumLength.setAttribute("disabled", "");
	// letter user has selected
	let userGuess;
	if (checker == "keyboard") {
		userGuess = e;
	} else {
		userGuess = e.target.value;
	}
	// checks if the gamme has started
	if (gameStarted === false) {
		// starts clock timer
		clearInterval(Interval);
		Interval = setInterval(startTimer, 10);
		gameStarted = true;
		// clicked letter passed in funtion with user guess value
		checkLetterGuess(userGuess, "start", e);
	} else {
		// clicked letter passed in funtion with user guess value
		checkLetterGuess(userGuess, "gameRunning", e);
	}
}

/**
 * loads functions when page loads
 */
window.onload = function () {
	lettersLeftToGuess = parseInt(document.getElementById("guess-word").value);
	loadBlanks();
	createLetters(wordToGuess);
};
