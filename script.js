// Activate Menu Button //
let menuBtn = document.querySelector('#menu-btn');
let menuBar = document.querySelector('.menu-bar');

menuBtn.onclick = () => {
    menuBtn.classList.toggle('bx-x');
    menuBar.classList.toggle('active');
}

// remove menu-bar on scrolls //
window.onscroll = () => {
    menuBtn.classList.remove('bx-x');
    menuBar.classList.remove('active');
}

// scroll reaveal //
ScrollReveal({
    reset: true,
    distance: '100px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-bio h1, .profile-pic', {origin: 'left'});
ScrollReveal().reveal('.home-bio p', {origin: 'right'});
ScrollReveal().reveal('.home-bio heading', {origin: 'top'});
ScrollReveal().reveal('.profile-pic, .about-items, .skills-items, projects-items, .portfolio-container', {origin: 'bottom'});

// typing animation //
const typed = new Typed('.animated-text', {
    strings: ['Web Devloper', 'Student', 'React JS Developer', 'App Devloper'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 600,
    loop: true
});