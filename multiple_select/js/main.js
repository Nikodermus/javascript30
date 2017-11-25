/*jshint esversion: 6 */
let checkboxes,
	last_checked;


function handleCheck(e) {
	let will_change = false;
	if (e.shiftKey && this.checked) {
		checkboxes.forEach(element => {
			if (element === this || element === last_checked) {
				will_change = !will_change;
			}
			if (will_change) {
				element.checked = true;
			}
		});
	}
	last_checked = this;
}
window.onload = () => {
	checkboxes = document.querySelectorAll('input');
	checkboxes.forEach(elem => elem.addEventListener('click', handleCheck));

};