/*jshint esversion: 6 */


window.addEventListener('keydown', playSound);
window.onload = () => {
	const keys = document.querySelectorAll('.key');
	keys.forEach(key => key.addEventListener('transitionend', removeTransition));
};

function playSound(e) {
	//Elements
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

	//Kill the function if there's no audio
	if (!audio) return;

	//Actions
	audio.currentTime = 0;
	audio.play();
	key.classList.add('play');
}

function removeTransition(e) {
	if (e.propertyName !== 'transform') return;
	this.classList.remove('play');
}