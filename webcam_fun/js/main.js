/*jshint esversion: 6 */
let video,
	canvas,
	ctx,
	strip,
	snap,
	button;

function getVideo() {
	navigator.mediaDevices.getUserMedia({
		video: true,
		audio: false
	}).then(localMediaStream => {
		try {
			video.srcObject = localMediaStream;
			video.play();
		} catch (error) {
			video.src = URL.createObjectURL(localMediaStream);
		}
	});
}

function paintToCanvas() {
	const {
		videoWidth: width,
		videoHeight: height
	} = video;

	canvas.width = width;
	canvas.height = height;

	return setInterval(() => {
		ctx.drawImage(video, 0, 0, width, height);
		let image_data = ctx.getImageData(0, 0, width, height);
		image_data = rgbSplit(image_data);
		ctx.putImageData(image_data, 0, 0);
		ctx.globalAlpha = 0.2;

	}, 20);
}

function redEffect(image_data) {
	for (i = 0; i < image_data.data.length; i += 4) {
		image_data.data[i + 0] = 256; //r
		image_data.data[i + 1] -= 60; //g
		image_data.data[i + 2] *= 0.8; //b
	}
	return image_data;
}

function rgbSplit(image_data) {
	for (i = 0; i < image_data.data.length; i += 4) {
		image_data.data[i + 300] = image_data.data[i + 0];
		image_data.data[i + 500] = image_data.data[i + 1];
		image_data.data[i + 300] = image_data.data[i + 2];
	}
	return image_data;
}

function takePhoto() {
	snap.currentTime = 0;
	snap.play();

	const data = canvas.toDataURL('image/jpeg');
	const div = `
		<a href="${data}" targer="_blank">
			<div class="image">
				<img src="${data}" alt="">
			</div>
		</a>
	`;

	strip.innerHTML += div;
}

window.onload = () => {

	video = document.querySelector('.player');
	canvas = document.querySelector('.photo');
	ctx = canvas.getContext('2d');
	strip = document.querySelector('.strip');
	snap = document.querySelector('.snap');
	button = document.querySelector('button');

	getVideo();

	video.addEventListener('canplay', paintToCanvas);
	button.addEventListener('click', takePhoto);

};