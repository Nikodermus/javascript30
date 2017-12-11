/*jshint esversion: 6 */

let add_form, items_list;
const items = JSON.parse(localStorage.getItem("items")) || [];

function addItem(e) {
	e.preventDefault();
	const text = this.querySelector('[name=new_item]').value;
	const item = {
		name: text,
		done: false
	};
	items.push(item);
	this.reset();
	fillList(items, items_list);
	localStorage.setItem("items", JSON.stringify(items));

}


function fillList(items = [], itemList = document.body) {
	itemList.innerHTML = items.map((item, index) => {
		return `
		<li >
			<input type="checkbox" data-index="${index}" id="item${index}" ${item.done ? 'checked' : ''}/>
			<label for="item${index}">${item.name}</label>
		</li>
		`;
	}).join('');
}

function toggleDone(e) {

	input = e.target;

	if (!input.matches('input')) return;

	items[input.dataset.index].done = !items[input.dataset.index].done;


	localStorage.setItem("items", JSON.stringify(items));
	console.table(items, )
	//fillList(items, items_list);

}

window.onload = () => {
	add_form = document.querySelector('.add_form');
	items_list = document.querySelector('.items_list');

	fillList(items, items_list);

	add_form.addEventListener('submit', addItem);
	items_list.addEventListener('click', toggleDone);

};