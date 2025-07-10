const header = document.querySelector('.css-header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    header.classList.add('css-header-bottom-shadow');
  } else {
    header.classList.remove('css-header-bottom-shadow');
  }
});

const homeLink = document.querySelector('.css-home-link');
homeLink.addEventListener('focus', () => {
  homeLink.parentNode.classList.add('css-active-icon');
});
homeLink.addEventListener('blur', () => {
  homeLink.parentNode.classList.remove('css-active-icon');
});
homeLink.addEventListener('mouseover', () => {
  homeLink.parentNode.classList.add('css-active-icon');
});
homeLink.addEventListener('mouseout', () => {
  homeLink.parentNode.classList.remove('css-active-icon');
});

const openMenuButton = document.querySelector('.css-open-menu-button');
const mobileNavMenu = document.querySelector('.css-mobile-nav');
openMenuButton.addEventListener('focus', () => {
  openMenuButton.parentNode.classList.add('css-active-icon');
});
openMenuButton.addEventListener('blur', () => {
  openMenuButton.parentNode.classList.remove('css-active-icon');
});
openMenuButton.addEventListener('mouseover', () => {
  openMenuButton.parentNode.classList.add('css-active-icon');
});
openMenuButton.addEventListener('mouseout', () => {
  openMenuButton.parentNode.classList.remove('css-active-icon');
});
openMenuButton.addEventListener('click', () => {
  setTimeout(() => {
    mobileNavMenu.classList.remove('css-hide');
    openMenuButton.parentNode.classList.remove('css-active-icon');
    openMenuButton.parentNode.classList.add('css-hide');
    closeMenuButton.parentNode.classList.remove('css-hide');
  }, 100)
});

const closeMenuButton = document.querySelector('.css-close-menu-button');
closeMenuButton.addEventListener('focus', () => {
  closeMenuButton.parentNode.classList.add('css-active-icon');
});
closeMenuButton.addEventListener('blur', () => {
  closeMenuButton.parentNode.classList.remove('css-active-icon');
});
closeMenuButton.addEventListener('mouseover', () => {
  closeMenuButton.parentNode.classList.add('css-active-icon');
});
closeMenuButton.addEventListener('mouseout', () => {
  closeMenuButton.parentNode.classList.remove('css-active-icon');
});
closeMenuButton.addEventListener('click', () => {
  setTimeout(() => {
    mobileNavMenu.classList.add('css-hide');
    closeMenuButton.parentNode.classList.remove('css-active-icon');
    closeMenuButton.parentNode.classList.add('css-hide');
    openMenuButton.parentNode.classList.remove('css-hide');
  }, 100)
});

const sections = document.querySelectorAll('section');
const mobileNavLinks = document.querySelectorAll('.css-mobile-nav-link');
function mobileNav() {
  let currentSectionId = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80; // adjust for nav height
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      currentSectionId = section.id;
    }
  });
  mobileNavLinks.forEach(link => {
    link.parentNode.classList.remove('css-mobile-nav-active-item');
    link.classList.remove('css-mobile-nav-active-link');
    if (link.getAttribute('href') === '#' + currentSectionId) {
      link.parentNode.classList.add('css-mobile-nav-active-item');
      link.classList.add('css-mobile-nav-active-link');  
    }
  });
  setTimeout(() => {
    closeMenuButton.parentNode.classList.add('css-hide');
    openMenuButton.parentNode.classList.remove('css-hide');
    mobileNavMenu.classList.add('css-hide');
    
  }, 800);
}
window.addEventListener('scroll', mobileNav);

const desktopNavLinks = document.querySelectorAll('.css-desktop-nav-link');
function desktopNav() {
  let currentSectionId = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80; // adjust for nav height
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      currentSectionId = section.id;
    }
  });
  desktopNavLinks.forEach(link => {
    link.parentNode.classList.remove('css-desktop-nav-active-item');
    link.classList.remove('css-desktop-nav-active-link');
    if (link.getAttribute('href') === '#' + currentSectionId) {
      link.parentNode.classList.add('css-desktop-nav-active-item');
      link.classList.add('css-desktop-nav-active-link');
    }
  });
}
window.addEventListener('scroll', desktopNav);

desktopNavLinks.forEach(link => {
  link.addEventListener('focus', () => {
    link.parentNode.classList.add('css-desktop-nav-focused-item');
  });
  link.addEventListener('blur', () => {
    link.parentNode.classList.remove('css-desktop-nav-focused-item');
  });
  link.addEventListener('mouseover', () => {
    link.parentNode.classList.add('css-desktop-nav-focused-item');
  });
  link.addEventListener('mouseout', () => {
    link.parentNode.classList.remove('css-desktop-nav-focused-item');
  });
});

const aboutLinkButton = document.querySelector('.css-about-link');
aboutLinkButton.addEventListener('focus', () => {
  aboutLinkButton.parentNode.classList.add('css-about-active-link-background');
});
aboutLinkButton.addEventListener('blur', () => {
  aboutLinkButton.parentNode.classList.remove('css-about-active-link-background');
});
aboutLinkButton.addEventListener('mouseover', () => {
  aboutLinkButton.parentNode.classList.add('css-about-active-link-background');
});
aboutLinkButton.addEventListener('mouseout', () => {
  aboutLinkButton.parentNode.classList.remove('css-about-active-link-background');
});

const contactLinkButton = document.querySelector('.css-contact-link');
contactLinkButton.addEventListener('focus', () => {
  contactLinkButton.parentNode.classList.add('css-contact-active-link-background');
  contactLinkButton.classList.add('css-contact-active-link');
});
contactLinkButton.addEventListener('blur', () => {
  contactLinkButton.parentNode.classList.remove('css-contact-active-link-background');
  contactLinkButton.classList.remove('css-contact-active-link');
});
contactLinkButton.addEventListener('mouseover', () => {
  contactLinkButton.parentNode.classList.add('css-contact-active-link-background');
  contactLinkButton.classList.add('css-contact-active-link');
});
contactLinkButton.addEventListener('mouseout', () => {
  contactLinkButton.parentNode.classList.remove('css-contact-active-link-background');
  contactLinkButton.classList.remove('css-contact-active-link');
});

const resumeLinkButton = document.querySelector('.css-resume-link');
resumeLinkButton.addEventListener('focus', () => {
  resumeLinkButton.parentNode.classList.add('css-resume-active-link-background');
});
resumeLinkButton.addEventListener('blur', () => {
  resumeLinkButton.parentNode.classList.remove('css-resume-active-link-background');
});
resumeLinkButton.addEventListener('mouseover', () => {
  resumeLinkButton.parentNode.classList.add('css-resume-active-link-background');
});
resumeLinkButton.addEventListener('mouseout', () => {
  resumeLinkButton.parentNode.classList.remove('css-resume-active-link-background');
});

