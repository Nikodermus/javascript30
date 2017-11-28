/*jshint esversion: 6 */
const user_array = [];
const secret_code = 'batman';

function checkCode(e) {
	user_array.push(e.key);
	if (user_array.join('').includes(secret_code)) {
		document.body.style.backgroundImage = 'url(./resources/bg.gif)';
		document.querySelector('h1').textContent = 'Oh you did it';
	}
	console.log(user_array);
}

window.addEventListener('keyup', checkCode);