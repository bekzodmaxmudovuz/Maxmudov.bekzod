//typed text animation
const typed = new Typed('.multiple-text', {
    strings: ['Web Developer ', 'Frontend Developer', 'Programer', 'Web designer'],
    typeSpeed: 120,
    backSpeed: 120,
    backDelay: 1300,
    loop: true
});

//cticky header
window.onscroll = () => {
    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);
}
