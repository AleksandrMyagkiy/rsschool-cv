const hamburger = document.querySelector('.hamburger'),
	menu = document.querySelector('.menu'),
	closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
	menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
	menu.classList.remove('active');
});

const counters = document.querySelectorAll('.skills__progress-counter'),
	lines = document.querySelectorAll('.skills__progress-line span');

counters.forEach((item, i) => {
	lines[i].style.width = item.innerHTML;
});

	//Smooth scroll and page up
window.onscroll = function() {
	const scrollElem = document.getElementById("scrollToTop");

	if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
		scrollElem.style.display = "block";
	} else {
		scrollElem.style.display = "none";
	}
};

function goToUp(e) {
	e.preventDefault();
	const scrollToTop = window.setInterval(function() {
		const pozition = window.pageYOffset;
		if ( pozition > 0) {
			window.scrollTo( 0, pozition - 20);
		} else {
			window.clearInterval(scrollToTop);
		}
	}, );
}
