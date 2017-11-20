/*jshint esversion: 6 */
const BACK_URL = 'https://gist.githubusercontent.com/bar0191/fae6084225b608f25e98b733864a102b/raw/dea83ea9cf4a8a6022bfc89a8ae8df5ab05b6dcc/pokemon.json';

const pokedex = [];
let input, suggestions;

fetch(BACK_URL)
	.then(blob => blob.json())
	.then(data => {
		pokedex.push(...data);
		displayPoke();
	});

function whichPoke(word, pokedex) {
	if (pokedex.length) {
		return pokedex.filter(_poke => {
			const pok_reg = new RegExp(word, 'gi');
			return _poke.Name.match(pok_reg) || _poke.Types.some(x => x.match(pok_reg));
		});
	}
}

function displayPoke() {
	const value = this.value || '';
	const answer = whichPoke(value, pokedex);
	const html = answer.map(_poke => {
		const pok_reg = new RegExp(value, 'gi');
		const poke_name = _poke.Name.replace(pok_reg, `<span class="hl">${value.toLowerCase()}</span>`);
		let info =
			`<li>
			<img src="${_poke.img}"/>
			<div class="info">
			<h1>${poke_name}</h1>	
		`;
		for (let type of _poke.Types)
			info += `<span class="type ${type.toLowerCase()}">${type}</span>`;
		info += '</div></li>';
		return info;
	}).slice(0, 5).join('');
	suggestions.innerHTML = html;
}

window.onload = () => {
	input = document.querySelector('.input');
	suggestions = document.querySelector('.suggestions');

	input.addEventListener('change', displayPoke);
	input.addEventListener('keyup', displayPoke);


};