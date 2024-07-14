const mainNav = document.querySelector('.navigation')
const hamburgerButton = document.querySelector('.menu-icon');

hamburgerButton.addEventListener('click', () => {
    mainNav.classList.toggle('open');
    hamburgerButton.classList.toggle('open');
});
