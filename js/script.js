const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');

function closeMenu() {
	menuToggle.setAttribute('aria-expanded', 'false');
	menuToggle.setAttribute('aria-label', 'Abrir menu');
	siteNav.classList.remove('is-open');
}

menuToggle.addEventListener('click', () => {
	const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
	menuToggle.setAttribute('aria-expanded', String(!isOpen));
	menuToggle.setAttribute('aria-label', isOpen ? 'Abrir menu' : 'Fechar menu');
	siteNav.classList.toggle('is-open', !isOpen);
});

siteNav.addEventListener('click', (event) => {
	if (event.target.closest('a')) closeMenu();
});

document.addEventListener('keydown', (event) => {
	if (event.key === 'Escape') closeMenu();
});

document.querySelector('#current-year').textContent = String(new Date().getFullYear());
