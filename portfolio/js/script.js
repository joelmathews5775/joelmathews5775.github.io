console.log(`Script loaded successfully!`);
const homeLink = document.querySelector('.js-home');
const menuButton = document.querySelector('.js-menu');
const closeButton = document.querySelector('.js-close');
const mobileNav = document.querySelector('.js-mobile-nav');
const menuItem = null;

/* Add or remove shadow on scroll up / down events */
window.addEventListener('scroll', (event) => {
  let scroll = window.scrollY;
  const header = document.querySelector('.js-header');
  if (scroll > 10) {
    header.classList.add('css-shadow-bottom');
  } else {
    header.classList.remove('css-shadow-bottom');
  }
});

/* Add or remove dark background to the home icon on focus / blur and mouseover / mouseout events */

homeLink.addEventListener('focus', () => {
  homeLink.parentNode.classList.add('icon-active');
});
homeLink.addEventListener('blur', () => {
  homeLink.parentNode.classList.remove('icon-active');
});
homeLink.addEventListener('mouseover',() => {
  homeLink.parentNode.classList.add('icon-active');
});
homeLink.addEventListener('mouseout',() => {
  homeLink.parentNode.classList.remove('icon-active');
});

/* Add or remove dark background to the menu icon on focus / blur and mouseover / mouseout events */
menuButton.addEventListener('focus', () => {
  menuButton.parentNode.classList.add('icon-active');
});
menuButton.addEventListener('blur', () => {
  menuButton.parentNode.classList.remove('icon-active');
});
menuButton.addEventListener('mouseover',() => {
  menuButton.parentNode.classList.add('icon-active');
});
menuButton.addEventListener('mouseout',() => {
  menuButton.parentNode.classList.remove('icon-active');
});
menuButton.addEventListener('click', () => {
  menuButton.parentNode.classList.add('icon-active')
  setTimeout(() =>{
    mobileNav.classList.remove('hide');
    menuButton.classList.add('hide');
    closeButton.classList.remove('hide');
  }, 180);
});

/* Add or remove dark background to the close icon on focus / blur and mouseover / mouseout events */
closeButton.addEventListener('focus', () => {
  closeButton.parentNode.classList.add('icon-active');
});
closeButton.addEventListener('blur', () => {
  closeButton.parentNode.classList.remove('icon-active');
});
closeButton.addEventListener('mouseover',() => {
  closeButton.parentNode.classList.add('icon-active');
});
closeButton.addEventListener('mouseout',() => {
  closeButton.parentNode.classList.remove('icon-active');
});
closeButton.addEventListener('click', () => {
  closeButton.parentNode.classList.add('icon-active');
  setTimeout(() =>{
    mobileNav.classList.add('hide');
    menuButton.classList.remove('hide');
    closeButton.classList.add('hide');
  }, 180);
});

/* Adding interactivity to mobile navigation */
const pageSections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.css-mobile-nav-links');
function interactiveNavigation() {
  let currentSectionID = '';
  pageSections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      currentSectionID = section.id;
    }
  });
  navLinks.forEach(link => {
    link.classList.remove('css-mobile-nav-links-active');
    link.parentNode.classList.remove('css-mobile-nav-items-active');
    if (link.getAttribute('href') === `#${currentSectionID}`) {
      link.classList.add('css-mobile-nav-links-active');
      link.parentNode.classList.add('css-mobile-nav-items-active');
      mobileNav.classList.add('hide');
      menuButton.classList.remove('hide');
      closeButton.classList.add('hide');
    }
  });
}
window.addEventListener('scroll', interactiveNavigation);
