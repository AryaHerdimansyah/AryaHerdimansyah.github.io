const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", this.window.scrollY > 200);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navlist.classList.toggle("open");
};

window.onscroll = () => {
  menu.classList.remove('bx-x');
  navlist.classList.remove("open");
};

// <!--scroll reveral-->
const sr = ScrollReveal({
  distance: '40px',
  duration: 2050,
  delay: 200,
  reset: true,
});

sr.reveal('.hero-text', { origin: 'top' });
sr.reveal('.about-img, .service-item, .about-text', { origin: 'bottom' });
sr.reveal('.about-text h2, .text-center, .right-contact h2', { origin: 'top' });
sr.reveal('.left-contact', { origin: 'left' });
sr.reveal('.right-contact', { origin: 'right' });
sr.reveal('.end-section', { origin: 'top' });

// <!--Typing Teks-->
// const typed = new typed('.multiple-text', {
//   Strings: ['Frontend Developer','Web Desaigner','Backend Developer'],
//   typeSpeed: 70,
//   backSpeed: 70,
//   backDelay: 1000,
//   loop: true,
// });