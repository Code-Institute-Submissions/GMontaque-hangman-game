// toggle game music on and off
let playMusic = document.getElementById("toggle-music-btn");
playMusic.addEventListener("click", togglePlay);

// game background music
let mySound = new Audio("./assets/audio/gameplay-soundtrack.mp3");
/**
 * function plays and stop music depending on valur attribute
 */
function togglePlay() {
	// selects button by ID
	let playMusic = document.getElementById("toggle-music-btn");
	// checks the value attribute
	try {
		if (playMusic.value === "play-music") {
			// updates button inner image
			playMusic.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
			// updates value attribute
			playMusic.setAttribute("value", "stop-music");
			// plays sound
			mySound.play();
		} else if (playMusic.value === "stop-music") {
			// updates button inner image
			playMusic.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
			// updates value attribute
			playMusic.setAttribute("value", "play-music");
			// plays sound
			mySound.pause();
		}
	} catch (error) {
		console.log("Error has occured: " + error.stack);
	}
}
