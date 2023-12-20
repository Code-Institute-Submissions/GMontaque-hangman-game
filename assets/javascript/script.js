// Variables for stopwatch
let seconds = 0;
let tens = 0;
let minutes = 0;
let appendTens = document.getElementById("tens");
let appendSeconds = document.getElementById("seconds");
let appendMinutes = document.getElementById("minutes");
let Interval;
// Button resets game
let buttonReset = document.getElementsByClassName(
	"play-area-top-restart-btn"
)[0];
buttonReset.addEventListener("click", stopReset);
// Button to show game rules
let gameRules = document.getElementsByClassName("play-area-main-rules-btn")[0];
gameRules.addEventListener("click", displayGameRules);

// When clicked button closes game rules overlay
let gameRulesClose = document
	.getElementsByClassName("play-area-main-gameRules-closeBtn")[0]
	.addEventListener("click", displayGameRules);

// Checks value of select element for any change
let autoGuessWord = document.getElementById("guess-word");
autoGuessWord.addEventListener("change", loadBlanks);

// Counter of letters left to guess - used by checkAnswer function
let lettersLeftToGuess = document.getElementById("guess-word");
lettersLeftToGuess.addEventListener("change", () => {
	lettersLeftToGuess = parseInt(document.getElementById("guess-word").value);
});

// Stores word to guess - used by checkLetterGuess function
let wordToGuess;

// Counter used by startGame function to check if game is already running
let gameStarted = false;

// Listens for user keyboard press
document.addEventListener("keyup", keyboardPress);

/**
 * Function creates stopwatch
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
	context.clearRect(0, 0, (canvas.width = "300"), (canvas.height = "500"));
	// reset letters left to guess
	lettersLeftToGuess = parseInt(document.getElementById("guess-word").value);
}

/**
 * Function works with stopwatch updates number values
 */
function startTimer() {
	try {
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
	} catch (error) {
		console.log("Error has occured: " + error.stack);
	}
}

/**
 * Creates 26 alphabet letters which are displayed to play the game
 */
function createLetters() {
	// creates overlay to display win or lose message at end of game
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
	// call function containing event listener for when a letter is pressed
	activateLetter();
}

/**
 * Creates game rules overlay on game page
 */
function displayGameRules() {
	try {
		let gameRules = document.getElementsByClassName(
			"play-area-main-gameRules"
		)[0];

		if (gameRules.classList.contains("display-none")) {
			gameRules.classList.remove("display-none");
		} else {
			gameRules.classList.add("display-none");
		}
	} catch (error) {
		console.log("Error has occured: " + error.stack);
	}
}

/**
 * Load blanks square which represents the word to guess
 */
function loadBlanks() {
	let guess = document.getElementById("guess-word").value;
	let blankSquares = document.getElementsByClassName("blankSquares")[0];
	blankSquares.innerHTML = "";
	for (let i = 0; i < guess; i++) {
		blankSquares.innerHTML += `<div class="blankSquares-letters"><i class="fa-solid fa-question"></i></div>`;
	}
}

/**
 * Function called when user loses game
 * @param word - The word the user was trying to guesss.
 */
function looseGame(word) {
	// prints message tell user they lost and the word they didn't guess
	let winnerMessage = document.getElementsByClassName("end-game-message")[0];
	winnerMessage.innerHTML += `<p class="end-game-message-inner">O dear... the word you were looking to guess was <span class="underline">${word}</span>. <br> Press Restart to play again</p>`;
	winnerMessage.classList.remove("display-none");
	// stops stopwatch and displays time
	clearInterval(Interval);
	appendTens.innerHTML = document.getElementById("tens").innerHTML;
	appendSeconds.innerHTML = document.getElementById("seconds").innerHTML;
	appendMinutes.innerHTML = document.getElementById("minutes").innerHTML;
	// plays losing sound
	let looseSound = new Audio("./assets/audio/wah-wah-sad-trombone-6347.mp3");
	looseSound.play();
}

/**
 * Function called when user wins game
 */
function winGame() {
	// prints message tell user they lost and the word they didn't guess
	let winnerMessage = document.getElementsByClassName("end-game-message")[0];
	winnerMessage.innerHTML += `<p class="end-game-message-inner">Congratluations you won <br> Press Restart to play again</p>`;
	winnerMessage.classList.remove("display-none");
	// stops stopwatch and displays time
	clearInterval(Interval);
	appendTens.innerHTML = document.getElementById("tens").innerHTML;
	appendSeconds.innerHTML = document.getElementById("seconds").innerHTML;
	appendMinutes.innerHTML = document.getElementById("minutes").innerHTML;
	// plays winning sound
	let winSound = new Audio("./assets/audio/user-wins.mp3");
	winSound.play();
}

/**
 * Function reduces lives counter for a wrong guess and creates hangman
 * @param lives - number of lives/wrong guesses remaining.
 */
function reduceLives(lives) {
	// hangman canvas
	const canvas = document.getElementById("hangman");
	const context = canvas.getContext("2d");
	// depending on number of lives updates hangman in webpage
	switch (parseInt(lives)) {
		case 7:
			context.strokeStyle = "#444";
			context.lineWidth = 10;
			context.beginPath();
			context.strokeStyle = "#fee086";
			context.scale(2, 2);
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
			// display hangman right leg
			context.beginPath();
			context.moveTo(100, 140);
			context.lineTo(125, 190);
			context.stroke();
			break;
	}
	// checks if game is over depending on game lives counter
	if (lives == 1) {
		document.getElementById("gameLives").innerHTML = lives - 1;
		looseGame(wordToGuess);
	} else {
		document.getElementById("gameLives").innerHTML = lives - 1;
	}
}

/**
 * Disables the letter the user has clicked
 * @param e - value from triggered event when onscreen letter button is pressed.
 * @param corrrect - passing a boolean value which confirms if the letter guessed was correct
 */
function disableLetter(e, correct) {
	// confirms if letter guessed is correct to then style and disable the button accordingly
	if (correct) {
		if (typeof e == "string") {
			let guessMade = document.getElementById(e);
			guessMade.classList.add("btnPressed-correct");
			guessMade.setAttribute("disabled", "");
		} else {
			e.target.classList.add("btnPressed-correct");
			e.target.setAttribute("disabled", "");
		}
	} else {
		if (typeof e == "string") {
			let guessMade = document.getElementById(e);
			guessMade.classList.add("btnPressed");
			guessMade.setAttribute("disabled", "");
		} else {
			e.target.classList.add("btnPressed");
			e.target.setAttribute("disabled", "");
		}
	}
}

/**
 * checks if the user has guessed all correct letters - using variable lettersLeftToGuess as counter
 * @param uGuess - the the letter the user pressed.
 */
function checkAnswer(uGuess) {
	try {
		// letter user guessed
		let letterGuessed = uGuess;
		// word user is trying to guess
		let wordGuessArray = wordToGuess;
		// print blank squares on webpage
		let blankSquares = document.getElementsByClassName("blankSquares-letters");
		// checks if letter is in the word to guess
		for (let prop in wordGuessArray) {
			if (wordGuessArray[prop] === letterGuessed) {
				// updates blank square in specific index with correct user letter guess
				blankSquares[prop].innerHTML = letterGuessed.toUpperCase();
				// reduces letters lettersLeftToGuess counter by one
				lettersLeftToGuess--;
			}
		}

		// check if lettersLeftToGuess is zero, user wins
		if (lettersLeftToGuess == 0) {
			winGame();
		}
	} catch (error) {
		console.log("Error has occured: " + error.stack);
	}
}

/**
 * Function uses an API to return a word the user will guess, length of word decided by user
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
 * @param uGuess - the letter the user pressed.
 * @param checkGame - value used to check if game start or is running.
 * @param e - value from triggered event when onscreen letter button is pressed.
 */
async function checkLetterGuess(uGuess, checkGame, e) {
	try {
		// gets word to be guessed
		if (checkGame === "start") {
			wordToGuess = await wordGuess();
			wordToGuess = wordToGuess.slice(2, -2);
		}
		// checks if letter pressed doesn't has attribute disabled before running inner code
		let dis = document.getElementById(uGuess).hasAttribute("disabled");
		let correctLetter;
		if (!dis) {
			// current game lives counter
			let currentGameLives = document.getElementById("gameLives").innerHTML;
			// checks if user guess is in word to guess
			if (wordToGuess.includes(uGuess)) {
				checkAnswer(uGuess);
				correctLetter = true;
			} else {
				reduceLives(currentGameLives);
				correctLetter = false;
			}
			// disables letter that user pressed
			disableLetter(e, correctLetter);
		}
		console.log(
			"Word to guess is:",
			wordToGuess,
			",",
			"User Letter guess is:",
			uGuess
		);
	} catch (error) {
		console.log("Error has occured: " + error.stack);
	}
}

/**
 * Allows user to play the game using keyboard
 * @param event - value from triggered keyboard key press.
 */
function keyboardPress(event) {
	if (event.keyCode >= 65 && event.keyCode <= 90) {
		startGame(event.key, "keyboard");
	}
}

/**
 * Adds event listener to all letters user can press, starts the game
 */
function activateLetter() {
	let buttonLetter = document.getElementsByClassName("letterBtn");
	for (let letter of buttonLetter) {
		letter.addEventListener("click", startGame);
	}
}

/**
 * When called function starts the game
 * @param e - value from triggered event when onscreen letter button is pressed.
 * @param checker - checks for keyboard event or onscreen button event press.
 */
function startGame(e, checker) {
	try {
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
		// checks if the game has started
		if (gameStarted === false) {
			// starts clock timer
			clearInterval(Interval);
			Interval = setInterval(startTimer, 10);
			gameStarted = true;
			// clicked letter passed in function with user guess value
			checkLetterGuess(userGuess, "start", e);
		} else {
			// clicked letter passed in function with user guess value
			checkLetterGuess(userGuess, "gameRunning", e);
		}
	} catch (error) {
		console.log("Error has occured: " + error.stack);
	}
}

/**
 * Loads functions when page loads
 */
window.onload = function () {
	try {
		// gets the value of select element
		lettersLeftToGuess = parseInt(document.getElementById("guess-word").value);
		// create blank squares
		loadBlanks();
		// create on screen alphabet letters
		createLetters(wordToGuess);
	} catch (error) {
		console.log("Error has occured: " + error.stack);
	}
};
