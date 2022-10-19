const mainHeader = document.querySelector('.main-header');
const hamburger = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('#nav-links');

navLinks.addEventListener('click', (e) => {
  let links = document.querySelector('.nav-link a');
  if ((e.target = links)) {
    navLinks.classList.remove('show');
    hamburger.classList.remove('active');
  }
});

window.addEventListener('scroll', () => {
  let scrollPos = window.scrollY;

  if (scrollPos > 3) {
    mainHeader.classList.add('scrolled');
  } else {
    mainHeader.classList.remove('scrolled');
  }
});

hamburger.addEventListener('click', () => {
  if (hamburger.classList.contains('active')) {
    hamburger.classList.remove('active');
    navLinks.classList.remove('show');
  } else {
    hamburger.classList.add('active');
    navLinks.classList.add('show');
  }
});
