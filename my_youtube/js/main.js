/*jshint esversion: 6 */
let player,
	video,
	progress_slider,
	progress_bar,
	toggle,
	skip_btns,
	ranges,
	full_screen,
	requestFullScreen;


let mousedown = false;

function togglePlay() {
	video.paused ? video.play() : video.pause();
}

function updatePlay() {
	toggle.textContent = video.paused ? '►' : '▌▌';
}

function skip() {
	video.currentTime += parseFloat(this.dataset.skip);
	updateProgress();
}

function updateProgress() {
	const percentage = video.currentTime / video.duration * 100;
	progress_bar.style.width = percentage + '%';
	progress_slider.value = percentage;
}

function rangeUpdate() {
	video[this.name] = this.value;
}

function clickProgress(e) {
	const time = (e.offsetX / video.offsetWidth) * video.duration;
	video.currentTime = time;
}

function fullScreenCrossBrowser(i) {
	//Are we fullscreen?
	if (
		document.fullscreenElement ||
		document.webkitFullscreenElement ||
		document.mozFullScreenElement ||
		document.msFullscreenElement
	) {
		//Yes! Let's close it
		if (document.exitFullscreen) {
			document.exitFullscreen();
		} else if (document.webkitExitFullscreen) {
			document.webkitExitFullscreen();
		} else if (document.mozCancelFullScreen) {
			document.mozCancelFullScreen();
		} else if (document.msExitFullscreen) {
			document.msExitFullscreen();
		}
	} else {
		// No, we better open it :)
		if (i.requestFullscreen) {
			i.requestFullscreen();
		} else if (i.webkitRequestFullscreen) {
			i.webkitRequestFullscreen();
		} else if (i.mozRequestFullScreen) {
			i.mozRequestFullScreen();
		} else if (i.msRequestFullscreen) {
			i.msRequestFullscreen();
		}
	}



}


window.onload = () => {
	//Grab elements
	player = document.querySelector('.player');
	video = document.querySelector('video');
	progress_slider = player.querySelector('.progress.player_slider');
	progress_bar = player.querySelector('.progress_filled');
	progress_container = player.querySelector('.progress_container');
	toggle = player.querySelector('.toggle');
	skip_btns = player.querySelectorAll('[data-skip]');
	ranges = player.querySelectorAll('.player_slider');
	full_screen = player.querySelector('.full_screen');



	//Add event listeners
	video.addEventListener('click', togglePlay);
	video.addEventListener('play', updatePlay);
	video.addEventListener('pause', updatePlay);
	video.addEventListener('timeupdate', updateProgress);

	toggle.addEventListener('click', togglePlay);
	full_screen.addEventListener('click', () => fullScreenCrossBrowser(player));

	progress_container.addEventListener('click', clickProgress);
	progress_container.addEventListener('mousemove', (e) => mousedown && clickProgress(e));
	progress_container.addEventListener('mousedown', () => mousedown = true);
	progress_container.addEventListener('mouseup', () => mousedown = false);

	skip_btns.forEach(elem => elem.addEventListener('click', skip));
	ranges.forEach(elem => elem.addEventListener('click', rangeUpdate));



	video.preload = 'auto';
	progress_slider.setAttribute('max', video.duration);


};