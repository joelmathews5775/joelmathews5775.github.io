import {addheaderShadowOnScroll, eventAnimations, setupNavigation} from '../js/functions.js';

const header = document.querySelector('.header');
addheaderShadowOnScroll(header, 'header-bottom-shadow');

const homeLink = document.querySelector('.home-link');
eventAnimations('headerIconLink', homeLink, 'active-icon');

const openMenuButton = document.querySelector('.open-menu-button');
const closeMenuButton = document.querySelector('.close-menu-button');
const mobileNavMenu = document.querySelector('.mobile-nav');
eventAnimations('headerIconButton', openMenuButton, 'active-icon', mobileNavMenu, 'hide', closeMenuButton, undefined, 100);
eventAnimations('headerIconButton', closeMenuButton, 'active-icon', mobileNavMenu, 'hide', undefined, openMenuButton, 100);

const sections = document.querySelectorAll('section');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
const desktopNavLinks = document.querySelectorAll('.desktop-nav-link');
setupNavigation('mobile', sections, 80, mobileNavLinks, 'mobile-nav-active-item', 'mobile-nav-active-link', closeMenuButton, openMenuButton, 'hide', mobileNavMenu, 800);
setupNavigation('desktop',sections, 80, desktopNavLinks, 'desktop-nav-active-item', 'desktop-nav-active-link');
desktopNavLinks.forEach(link => {
  eventAnimations('desktopNavLink', link, 'desktop-nav-focused-item');
});

const aboutLinkButton = document.querySelector('.about-link');
aboutLinkButton.addEventListener('mouseover', () => {
  aboutLinkButton.parentNode.classList.add('about-link-background-hovered');
});
aboutLinkButton.addEventListener('mouseout', () => {
  aboutLinkButton.parentNode.classList.remove('about-link-background-hovered');
});
aboutLinkButton.addEventListener('focus', () => {
  aboutLinkButton.parentNode.classList.add('about-link-background-active');
});
aboutLinkButton.addEventListener('blur', () => {
  setTimeout(() => {
    aboutLinkButton.parentNode.classList.remove('about-link-background-active');
  }, 250);
});

const contactLinkButton = document.querySelector('.contact-link');
const imageIcon = document.querySelector('.message-icon');
contactLinkButton.addEventListener('mouseover', () => {
  contactLinkButton.parentNode.classList.add('contact-link-background-hovered');
});
contactLinkButton.addEventListener('mouseout', () => {
  contactLinkButton.parentNode.classList.remove('contact-link-background-hovered');
});
contactLinkButton.addEventListener('focus', () => {
  imageIcon.setAttribute('src','img/message_22x22_white.svg');
  contactLinkButton.parentNode.classList.add('contact-link-background-active');
  contactLinkButton.classList.add('contact-link-active');
});
contactLinkButton.addEventListener('blur', () => {
  setTimeout(() => {
    imageIcon.setAttribute('src','img/message_22x22_blue.svg');
    contactLinkButton.parentNode.classList.remove('contact-link-background-active');
    contactLinkButton.classList.remove('contact-link-active');
  }, 250);
});

const resumeLinkButton = document.querySelector('.resume-link');
resumeLinkButton.addEventListener('focus', () => {
  resumeLinkButton.parentNode.classList.add('resume-active-link-background');
});
resumeLinkButton.addEventListener('blur', () => {
  resumeLinkButton.parentNode.classList.remove('resume-active-link-background');
});
resumeLinkButton.addEventListener('mouseover', () => {
  resumeLinkButton.parentNode.classList.add('resume-active-link-background');
});
resumeLinkButton.addEventListener('mouseout', () => {
  resumeLinkButton.parentNode.classList.remove('resume-active-link-background');
});

const previewLinkButton = document.querySelectorAll('.preview-link');
previewLinkButton.forEach((link) => {
  link.addEventListener('focus', () => {
    link.parentNode.classList.add('preview-active-link-background');
  });
  link.addEventListener('blur', () => {
    link.parentNode.classList.remove('preview-active-link-background');
  });
  link.addEventListener('mouseover', () => {
    link.parentNode.classList.add('preview-active-link-background');
  });
  link.addEventListener('mouseout', () => {
    link.parentNode.classList.remove('preview-active-link-background');
  });
});

const sourceLinkButton = document.querySelectorAll('.source-link');
sourceLinkButton.forEach((link) => {
  link.addEventListener('focus', () => {
    link.parentNode.classList.add('source-active-link-background');
    link.classList.add('source-active-link');
  });
  link.addEventListener('blur', () => {
    link.parentNode.classList.remove('source-active-link-background');
    link.classList.remove('source-active-link');
  });
  link.addEventListener('mouseover', () => {
    link.parentNode.classList.add('source-active-link-background');
    link.classList.add('source-active-link');
  });
  link.addEventListener('mouseout', () => {
    link.parentNode.classList.remove('source-active-link-background');
    link.classList.remove('source-active-link');
  });
});

const githubProjectsLinkButton = document.querySelector('.github-projects-link');
githubProjectsLinkButton.addEventListener('focus', () => {
  githubProjectsLinkButton.parentNode.classList.add('github-projects-active-link-background');
});
githubProjectsLinkButton.addEventListener('blur', () => {
  githubProjectsLinkButton.parentNode.classList.remove('github-projects-active-link-background');
});
githubProjectsLinkButton.addEventListener('mouseover', () => {
  githubProjectsLinkButton.parentNode.classList.add('github-projects-active-link-background');
});
githubProjectsLinkButton.addEventListener('mouseout', () => {
  githubProjectsLinkButton.parentNode.classList.remove('github-projects-active-link-background');
});

const githubLinkButton = document.querySelector('.github-link');
githubLinkButton.addEventListener('focus', () => {
  githubLinkButton.parentNode.classList.add('github-active-link-background');
});
githubLinkButton.addEventListener('blur', () => {
  githubLinkButton.parentNode.classList.remove('github-active-link-background');
});
githubLinkButton.addEventListener('mouseover', () => {
  githubLinkButton.parentNode.classList.add('github-active-link-background');
});
githubLinkButton.addEventListener('mouseout', () => {
  githubLinkButton.parentNode.classList.remove('github-active-link-background');
});

const linkedinLinkButton = document.querySelector('.linkedin-link');
linkedinLinkButton.addEventListener('focus', () => {
  linkedinLinkButton.parentNode.classList.add('linkedin-active-link-background');
});
linkedinLinkButton.addEventListener('blur', () => {
  linkedinLinkButton.parentNode.classList.remove('linkedin-active-link-background');
});
linkedinLinkButton.addEventListener('mouseover', () => {
  linkedinLinkButton.parentNode.classList.add('linkedin-active-link-background');
});
linkedinLinkButton.addEventListener('mouseout', () => {
  linkedinLinkButton.parentNode.classList.remove('linkedin-active-link-background');
});


