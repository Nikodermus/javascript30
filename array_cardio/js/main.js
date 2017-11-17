/*jshint esversion: 6 */

const mangaka = [{
		first: 'Akira',
		last: 'Toriyama',
		year: 1955,
		passed: 2017
	},
	{
		first: 'Yoshiro',
		last: 'Togashi',
		year: 1966,
		passed: 2017
	},
	{
		first: 'Tite',
		last: 'Kubo',
		year: 1977,
		passed: 2017
	},
	{
		first: 'Yuki',
		last: 'Tabata',
		year: 1994,
		passed: 2017
	},
	{
		first: 'Kugune',
		last: 'Marayaka',
		year: 1978,
		passed: 2017
	},
	{
		first: 'Tensai',
		last: 'Okaruma',
		year: 1961,
		passed: 2017
	}
];

//Born in 60's
const mangaka_60 = mangaka.filter(elem => elem.year > 1959 && elem.year < 1970);
const mangaka_name = mangaka.map(elem => `${elem.first} ${elem.last}`);
const mangaka_order = mangaka.sort((a, b) => a.year > b.year ? 1 : -1);
const mangaka_alive = mangaka.reduce((total, inventor) => total + (inventor.passed - inventor.year), 0);
const mangaka_older = mangaka.sort((a, b) => {
	first = a.passed - a.year;
	last = b.passed - b.year;
	return first < last ? 1 : -1;
});

console.log(mangaka_60, mangaka_name, mangaka_order, mangaka_alive, mangaka_older);

//Get Items from Page
const links = Array.from(document.querySelectorAll('.mw-category a'));
const boulevards = links
	.map(elem => elem.innerText)
	.filter(elem => elem.includes('de'));

//Sort by last name
const names = ['Pardo, Nicolas', 'Pardo, Nidia', 'Cubillos, Laura', 'Rico, Nohora', 'Cofre, Daniela', 'Piñeros, Leidy', 'Cubilos, Laura', 'Baex, Cesar', 'Corredor, Paula', 'Bacca, Chew', 'Camelo, Alejandra', 'Camelo, Susan', 'Mahecha, Oswaldo', 'Mahecha, Alfredo'];

const names_sorted = names.sort((a, b) => {
	const [aLast, aFirst] = a.split(', ');
	const [bLast, bFirst] = b.split(', ');
	return aLast > bLast ? 1 : -1;
}).map(elem => elem.replace(',', ''));

console.log(names_sorted);

//How many of each?
const vehicles = ['car', 'truck', 'car', 'truck', 'car', 'truck', 'car', 'bike', 'truck', 'car', 'bike', 'walk'];
const vehicles_data = vehicles.reduce((loader, item) => {
	if (!loader[item]) {
		loader[item] = 0;
	}
	loader[item]++;
	return loader;
}, {});

console.log(vehicles_data);


window.onload = () => {};