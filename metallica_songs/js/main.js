/*jshint esversion: 6 */
const songs = [
	"Master of Puppets",
	"Fade to Black",
	"One",
	"For Whom the Bell Tolls",
	"Enter Sandman",
	"The Unforgiven",
	"The Four Horsemen",
	"The Day that Never Comes",
	"Of Wolf and Men"
];

let ul;

const articles = ["the", "of", "a"];

function replaceName(params) {
	return params.replace(/^(a|the|of)\b/i, '').trim();
}

window.onload = () => {
	ul = document.querySelector('ul');

	const markup = songs
		.sort((a, b) => replaceName(a) > replaceName(b) ? 1 : -1)
		.map(song => `<li>${song}</li>`)
		.join('');

	ul.innerHTML = markup;
};