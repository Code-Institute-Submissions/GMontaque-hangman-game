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
	console.log("stop");
	mySound.pause();
}
