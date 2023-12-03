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
let appendTens = document.getElementById("tens");
let appendSeconds = document.getElementById("seconds");
let buttonStop = document.getElementById("button-stop");
let Interval;

buttonStop.onclick = function () {
	clearInterval(Interval);
	// reset stop watch
	clearInterval(Interval);
	tens = "00";
	seconds = "00";
	appendTens.innerHTML = tens;
	appendSeconds.innerHTML = seconds;
};

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
}

//creates alphabet letters
function createLetters() {
	for (i = 0; i < 26; i++) {
		let li = document.getElementsByClassName("play-area-letters")[0];
		li.innerHTML += `<button class="letterBtn" 
		value="${(i + 10).toString(36)}">${(i + 10)
			.toString(36)
			.toUpperCase()}</button>`;
	}
}

createLetters();

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

	let randomNum = Math.floor(Math.random() * 9);

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
	console.log(wordNumLength);
}

// end game function
function gameOver() {
	console.log("game over");
}

// fucntion reduce lives counter on wrong guess
function reduceLives(lives) {
	if (lives == 1) {
		document.getElementById("gameLives").innerHTML = lives - 1;
		gameOver();
	} else {
		document.getElementById("gameLives").innerHTML = lives - 1;
	}
}

// generates word to guess
let wordToGuess;

// function checcks users answer against word to guess
function checkLetterGuess(uGuess, checkGame) {
	// word to be guessed
	if (checkGame === "start") {
		wordToGuess = wordGuess();
	}

	// current game lives counter
	let currentGameLives = document.getElementById("gameLives").innerHTML;
	// checks if user guess is in word to guess
	if (wordToGuess.includes(uGuess)) {
		alert(uGuess);
	} else {
		reduceLives(currentGameLives);
	}

	console.log("word to guess:", wordToGuess, "userGuess:", uGuess);
}

// alphabet letters
let buttonLetter = document.getElementsByClassName("letterBtn");
for (let letter of buttonLetter) {
	letter.addEventListener("click", startGame);
}

let gameStarted = false;

// starts game
function startGame(e) {
	// letter user has selected
	let userGuess = e.target.value;
	if (gameStarted === false) {
		// starts clock timer
		clearInterval(Interval);
		Interval = setInterval(startTimer, 10);
		gameStarted = true;
		checkLetterGuess(userGuess, "start");
	} else {
		checkLetterGuess(userGuess, "gameRunning");
	}
}
