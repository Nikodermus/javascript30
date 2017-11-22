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
//List names
const mangaka_name = mangaka.map(elem => `${elem.first} ${elem.last}`);

const mangaka_order = mangaka.sort((a, b) => a.year > b.year ? 1 : -1);

const mangaka_alive = mangaka.reduce((total, inventor) => total + (inventor.passed - inventor.year), 0);
const mangaka_older = mangaka.sort((a, b) => {
	first = a.passed - a.year;
	last = b.passed - b.year;
	return first < last ? 1 : -1;
});


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


//How many of each?
const vehicles = ['car', 'truck', 'car', 'truck', 'car', 'truck', 'car', 'bike', 'truck', 'car', 'bike', 'walk'];
const vehicles_data = vehicles.reduce((loader, item) => {
	if (!loader[item]) {
		loader[item] = 0;
	}
	loader[item]++;
	return loader;
}, {});

/* ARRAY CARDIO DAY 2 */

const people = [{
		name: 'Carl',
		year: 1964
	},
	{
		name: 'Marx',
		year: 1970
	},
	{
		name: 'Lennin',
		year: 1994
	},
	{
		name: 'Stanlin',
		year: 1999
	},
	{
		name: '',
		year: 2005
	}
];

const comments = [{
		text: 'I want some pizza for breakfast',
		id: 13248
	},
	{
		text: 'I\'m so sleepy',
		id: 13989
	},
	{
		text: 'Let\'s play some DOOM',
		id: 1
	},
	{
		text: 'I should have got to slept more time',
		id: 18393
	}
];

const is_there_adult = people.some(person => new Date().getFullYear() - person.year >= 19);

const are_all_adults = people.every(person => new Date().getFullYear() - person.year >= 19);

const comment = comments.find(comment => comment.id === 13989);
const comment_index = comments.findIndex(comment => comment.id === 1);

console.log(comments.splice(comment_index, comments.length));