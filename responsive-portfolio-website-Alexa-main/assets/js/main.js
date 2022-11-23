/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
	navToggle = document.getElementById('nav-toggle'),
	navClose = document.getElementById('nav-close');

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
	navToggle.addEventListener('click', () => {
		navMenu.classList.add('show-menu');
	});
}
/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
	navClose.addEventListener('click', () => {
		navMenu.classList.remove('show-menu');
	});
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
	const navMenu = document.getElementById('nav-menu');
	//when we click on each nav-link, we remove the show-menu class
	navMenu.classList.remove('show-menu');
}
navLink.forEach((n) => n.addEventListener('click', linkAction));

/*==================== ACCORDION SKILLS ====================*/
const skillContent = document.getElementById('skills__content');
skillsHeader = document.querySelectorAll('.skills__header');

function toggleSkills() {
	let itemClass = this.parentNode.className;

	for (let i = 0; i < skillsContent.length; i++) {
		skillContent[i].className = 'skills__content skills__close';
	}
	if (itemClass === 'skills__content skills__close') {
		this.parentNode.className = 'skills__content skills__open';
	}
}
skillsHeader.forEach((el) => {
	el.addEventListener('click', toggleSkills);
});
/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
	tabContents = document.querySelectorAll('[data-content]');

tabs.forEach((tab) => {
	tab.addEventListener('click', () => {
		const target = document.querySelector(tab.dataset.target);

		tabContents.forEach((tabContent) => {
			tabContent.classList.remove('qualification__active');
		});
		target.classList.add('qualification__active');

		tab.forEach((tab) => {
			tab.classList.remove('qualification__active');
		});
		tab.classList.add('qualification__active');
	});
});

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll('.services__modal'),
	modalBtns = document.querySelectorAll('.services__button'),
	modalCloses = document.querySelectorAll('.services__modal-close');

let modal = function (modalClick) {
	modalViews[modalClick].classList.add('active-modal');
};

modalBtns.forEach((modalbtn, i) => {
	modalbtn.addEventListener('click', () => {
		modal(i);
	});
});

modalCloses.forEach((modalClose) => {
	modalClose.addEventListener('click', () => {
		modalViews.forEach((modalView) => {
			modalView.classList.remove('active-modal');
		});
	});
});

/*==================== PORTFOLIO SWIPER  ====================*/
let swiperPortfolio = new swiper('.portfolio__container', {
	cssMode: true,
	navigation: {
		nextE1: '.swiper-button-next',
		prevE1: '.swiper-button-prev',
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},

	mousewheel: true,
	keyboard: true,
});

/*==================== TESTIMONIAL ====================*/
let swiperTestimonial = new swiper('.testimonial__container', {
	loop: true,
	grabCursor: true,
	spaceBetween: 48,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		dynamicBullets: true,
	},
	breakpoints: {
		568: {
			slidesPerView: 2,
		},
	},
});
/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const section = document.querySelectorAll('section[id]');

function scrollActive() {
	const scrollY = window.pageYOffset;
	sections.forEach((current) => {
		const sectionHeight = current.offsetHeight;
		const sectionTop = current.offsetTop - 50;

		if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
			document
				.querySelector('.nav__menu a[href *=' + sectionId + ']')
				.classlist.add('active-link');
		} else {
			document
				.querySelector('.nav__menu a[href *=' + sectionId + ']')
				.classlist.remove('active-link');
		}
	});
}
window.addEventListener('scroll', scrollActive);

/*===================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
	const nav = document.getElementById('header');
	//when the scroll is greater than 200vh, add the scroll-header class to the header tag
	if (this.scrollY >= 200) nav.classList.add('scroll-header');
	else nav.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
	const scrollUp = document.getElementById('scroll-top');
	//when the scroll is higher than 560vh, add the show-scroll class to the a tag with the scroll
	if (this.scrollY >= 560) scrollUp.classList.add('show-scroll');
	else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);
/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'uil-sun';

//previously selected topic(if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

//we obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = document.body.classlist.contains(darkTheme)
	? 'dark'
	: 'light';
const getCurrentIcon = themeButton.classlist.contains(iconTheme)
	? 'uil-moon'
	: 'uil-sun';

//we validate if the user previously chose a topic
if (selectedTheme) {
	//if the validation is fulfilled, we ask what the issue was to know
	document.body.classlist[selectedTheme === 'dark' ? 'add' : 'remove'](
		darkTheme
	);
	themeButton.classlist[selectedIcon === 'uil-moon' ? 'add' : 'remove'](
		iconTheme
	);
}
//activate or deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
	//add or remove the dark/icon theme
	document.body.classList.toggle(darkTheme);
	themeButton.classList.toggle(iconTheme);

	//we save the theme and the current theme icon that the user chose
	localStorage.setItem('selected-theme', getCurrentTheme());
	localStorage.setItem('selected-icon', getCurrentIcon());
});
