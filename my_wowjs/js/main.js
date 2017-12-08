/*jshint esversion: 6 */
let slide_images;

function debounce(func, wait = 20, immediate = true) {
	var timeout;
	return function () {
		var context = this,
			args = arguments;
		var later = function () {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
}

function checkSlide() {
	slide_images.forEach(element => {
		const slide_in_at = (window.scrollY + window.innerWidth) - (element.height / 3);

		const img_bottom = element.offsetTop + element.height;

		const is_half_show = slide_in_at > element.offsetTop;

		const not_scrolled = window.scrollY < img_bottom;


		if (is_half_show && not_scrolled) {
			element.classList.add('active');
			console.log(element);
		} else {
			element.classList.remove('active');
		}
	});
}

window.onload = () => {
	slide_images = document.querySelectorAll('.slide-in');
};

window.addEventListener('scroll', debounce(checkSlide));