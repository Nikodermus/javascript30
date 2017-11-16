/*jshint esversion: 6 */

let inputs;

function moveValues() {
	const suffix = this.dataset.sizing || '';
	document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}
window.onload = () => {
	inputs = document.querySelectorAll('input');

	inputs.forEach(elem => elem.addEventListener('change', moveValues));
	inputs.forEach(elem => elem.addEventListener('mousemove', moveValues));
};