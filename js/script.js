const buttons = document.querySelectorAll('.discover__button');

buttons.forEach((button) => {
	button.addEventListener('click', () => {
		buttons.forEach((btn) => btn.classList.remove('active'));
		button.classList.add('active');

		const category = button.dataset.category;
		if (courses[category]) {
			renderCards(category);
		}
	});
});

const courses = {
	Popular: [
		{ title: 'Frontend Dev', duration: '6 months', img: './img/programming/frontend.jpg' },
		{ title: 'UI/UX Design', duration: '5 months', img: './img/design/ui-ux.jpg' },
		{ title: '2D Animation', duration: '4 months', img: './img/animation/2d.jpg' },
		{ title: 'SMM Strategy', duration: '3 months', img: './img/marketing/smm.jpg' },
	],
	Animation: [
		{ title: '2D Animation', duration: '5 months', img: './img/animation/2d.jpg' },
		{ title: '3D Modeling', duration: '6 months', img: './img/animation/3d.jpg' },
		{ title: 'Motion Graphics', duration: '7 months', img: './img/animation/motion.jpg' },
		{ title: 'Character Rigging', duration: '4 months', img: './img/animation/character.jpg' },
	],
	Design: [
		{ title: 'UI/UX Design', duration: '6 months', img: './img/design/ui-ux.jpg' },
		{ title: 'Graphic Design', duration: '4 months', img: './img/design/graphic.jpg' },
		{ title: 'Brand Identity', duration: '3 months', img: './img/design/brand.jpg' },
		{ title: 'Typography', duration: '2 months', img: './img/design/typography.jpg' },
	],
	Illustration: [
		{ title: 'Digital Art', duration: '6 months', img: './img/illustration/digital.jpg' },
		{ title: 'Sketching Basics', duration: '3 months', img: './img/illustration/sketching.jpg' },
		{ title: 'Children’s Books', duration: '5 months', img: './img/illustration/childrens-books.jpg' },
		{ title: 'Concept Art', duration: '4 months', img: './img/illustration/concept-art.jpg' },
	],
	Programming: [
		{ title: 'Frontend Dev', duration: '6 months', img: './img/programming/frontend.jpg' },
		{ title: 'Backend Dev', duration: '6 months', img: './img/programming/backend.jpg' },
		{ title: 'Mobile Dev', duration: '5 months', img: './img/programming/mobile.jpg' },
		{ title: 'Game Dev', duration: '8 months', img: './img/programming/gamedev.jpg' },
	],
	'Photo & Film': [
		{ title: 'Photography', duration: '3 months', img: './img/photo-film/photo.jpg' },
		{ title: 'Video Editing', duration: '4 months', img: './img/photo-film/video.jpg' },
		{ title: 'Cinematography', duration: '5 months', img: './img/photo-film/cinematography.jpg' },
		{ title: 'Lighting Basics', duration: '2 months', img: './img/photo-film/lighting.jpg' },
	],
	Marketing: [
		{ title: 'Digital Marketing', duration: '4 months', img: './img/marketing/digital-marketing.jpg' },
		{ title: 'SEO Basics', duration: '2 months', img: './img/marketing/seo.jpg' },
		{ title: 'SMM Strategy', duration: '3 months', img: './img/marketing/smm.jpg' },
		{ title: 'Brand Promotion', duration: '5 months', img: './img/marketing/brand-promotion.jpg' },
	],
};

const cardsContainer = document.querySelector('.discover__cards');

function renderCards(category) {
	cardsContainer.innerHTML = '';

	courses[category].forEach((course) => {
		cardsContainer.insertAdjacentHTML(
			'beforeend',
			`<article class="discover__card-item">
        <img src="${course.img}" alt="${course.title}" />
        <h3 class="discover__card-title">${course.title}</h3>
        <p class="discover__card-length">${course.duration}</p>
        <a href="#contact" class="btn__card">Choose a course</a>
      </article>
		`
		);
	});
	translateButtons();
}

document.addEventListener('DOMContentLoaded', () => {
	renderCards('Popular');
});

// код для бургера
const nav = document.querySelector('.nav');
const burger = document.querySelector('.burger');

burger.addEventListener('click', () => {
	nav.classList.toggle('open');
	burger.classList.toggle('active');
	document.body.classList.toggle('no-scroll');
});

document.querySelectorAll('.nav__list a').forEach((link) => {
	link.addEventListener('click', () => {
		nav.classList.remove('open');
		burger.classList.remove('active');
		document.body.classList.remove('no-scroll');
	});
});

// код для кнопки скролл-ап
const scrollBtn = document.querySelector('.scroll-up');

window.addEventListener('scroll', () => {
	if (window.scrollY > 300) {
		scrollBtn.classList.add('show');
	} else {
		scrollBtn.classList.remove('show');
	}
});

scrollBtn.addEventListener('click', () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	});
});

// функція переводу кнопки в карточці
function translateButtons() {
	const lang = window.location.pathname.includes('-ua') ? 'ua' : 'en';

	document.querySelectorAll('.btn__card').forEach((btn) => {
		btn.textContent = lang === 'ua' ? 'Обрати курс' : 'Choose a course';
	});
}

// код для вибраного курсу в формі
const courseInput = document.querySelector('.selected-course');

document.addEventListener('click', (e) => {
	if (e.target.classList.contains('btn__card')) {
		const courseTitle = e.target
			.closest('.discover__card-item')
			?.querySelector('.discover__card-title')?.textContent;
		if (courseTitle) {
			courseInput.value = courseTitle;
		}
	}
});
