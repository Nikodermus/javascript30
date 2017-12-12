/*jshint esversion: 6 */
let container, text;
const spacing = 50;

function moveShadow(e) {
	const {
		offsetWidth: width,
		offsetHeight: height
	} = container;

	let {
		offsetX: x,
		offsetY: y
	} = e;

	if (this !== e.target) {
		x += e.target.offsetLeft;
		y += e.target.offsetTop;
	}

	const x_spacing = (x / width * spacing) - (spacing / 2);
	const y_spacing = (y / width * spacing) - (spacing / 2);

	text.style.textShadow = `${x_spacing * -1}px ${y_spacing * -1}px 5px black`;

	console.log(x_spacing, y_spacing);
}

window.onload = () => {
	container = document.querySelector('.main');
	text = document.querySelector('h1');

	container.addEventListener('mousemove', moveShadow);
};