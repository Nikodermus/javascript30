/*jshint esversion: 6 */
let canvas;
let is_drawing = false;
let last_x = 0;
let last_y = 0;
let hue = 0;
let direction = false;
let line_width = 10;

function draw(e) {
	if (!is_drawing) return;
	ctx.strokeStyle = `hsl(${hue}, 80%, 80%)`;
	ctx.beginPath();
	ctx.lineWidth = line_width;
	ctx.moveTo(last_x, last_y);
	ctx.lineTo(e.offsetX, e.offsetY);
	if (line_width > 30 || line_width < 10) {
		direction = !direction;
	}
	if (direction) {
		line_width++;
	} else {
		line_width--;
	}
	ctx.stroke();
	[last_x, last_y] = [e.offsetX, e.offsetY];
	hue++;


}


window.addEventListener('resize', () => {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
});

window.onload = () => {
	canvas = document.querySelector('canvas');
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	canvas.addEventListener('mousemove', draw);
	canvas.addEventListener('mousedown', (e) => {
		is_drawing = true;
		[last_x, last_y] = [e.offsetX, e.offsetY];
	});
	canvas.addEventListener('mouseup', () => is_drawing = false);
	canvas.addEventListener('mouseout', () => is_drawing = false);


	ctx = canvas.getContext('2d');
	ctx.lineWidth = 10;
	ctx.lineJoin = 'round';
	ctx.lineCap = 'round';
	ctx.globalCompositeOperation = 'multiply';
};