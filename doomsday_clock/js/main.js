/*jshint esversion: 6 */

let second_hand, minute_hand, hour_hand;

let seconds_degrees = 0;
let min_degrees = 0;
let hour_degrees = 0;

const now = new Date();

function setDate() {
	console.log(seconds_degrees, min_degrees, hour_degrees);

	seconds_degrees += 360 / 60;
	min_degrees += 360 / 3600;
	hour_degrees += 360 / 43200;


	hour_hand.style.transform = `rotate(${hour_degrees}deg)`;
	second_hand.style.transform = `rotate(${seconds_degrees}deg)`;
	min_hand.style.transform = `rotate(${min_degrees}deg)`;




}

window.onload = () => {
	second_hand = document.querySelector('.hand.seg');
	min_hand = document.querySelector('.hand.min');
	hour_hand = document.querySelector('.hand.hour');

	seconds_degrees += ((now.getSeconds() / 60) * 360) + 90;
	min_degrees += ((now.getMinutes() / 60) * 360) + 90;
	hour_degrees += ((now.getHours() / 12) * 360) + 90;

	setInterval(setDate, 1000);

	document.querySelector('.clock').style.opacity = .6;
};