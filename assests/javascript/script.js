// play and stop music

let musicStart = document.getElementById("play-btn");
let musicStop = document.getElementById("stop-btn");
musicStart.addEventListener("click", play);
musicStop.addEventListener("click", stop);
let mySound = new Audio("../assests/audio/gameplay-soundtrack.mp3");

function play() {
	console.log("sound");
	mySound.play();
}

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

// buttonStart.onclick = function () {
// 	clearInterval(Interval);
// 	Interval = setInterval(startTimer, 10);
// };

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
		li.innerHTML += `<button class="letterBtn">${(i + 10).toString(36).toUpperCase()}</button>`;
	}
}

createLetters();

// alphabet letters
let buttonLetter = document.getElementsByClassName("letterBtn");
for (let letter of buttonLetter) {
	letter.addEventListener("click", startGame);
}

// starts game
function startGame() {
	clearInterval(Interval);
	Interval = setInterval(startTimer, 10);
	// gets word length value
	let wordLength = document.getElementById("guess-word");
	console.log(wordLength.value);
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
}

console.log(wordGuess());

