const navLinks = document.getElementById('nav-links');
const navToggle = document.getElementById('nav-toggles');
navToggle.addEventListener('click', () => {
    event.preventDefault();
    navLinks.classList.toggle('active');
});
