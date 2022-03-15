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

// Close menu hamburger
const navLinks = document.querySelectorAll('.menu_link');

navLinks.forEach((el) => el.addEventListener('click', exitMenu));

function exitMenu(event) {
	if (event.target.classList.contains('menu_link')) {
		menu.classList.remove('active');
	}
}

	//Smooth scroll and page up
window.onscroll = function() {
	const scrollElem = document.getElementById("scrollToTop");

	if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
		scrollElem.style.display = "block";
	} else {
		scrollElem.style.display = "none";
	}
};
