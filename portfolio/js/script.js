import {addheaderShadowOnScroll, setupNavigation, iconEventAnimations, linkEventAnimations} from '../js/functions.js';

const header = document.querySelector('.header');
addheaderShadowOnScroll(header, 'header-bottom-shadow');

const homeLink = document.querySelector('.home-link');
iconEventAnimations('headerIconLink', homeLink, 'active-icon');

const openMenuButton = document.querySelector('.open-menu-button');
const closeMenuButton = document.querySelector('.close-menu-button');
const mobileNavMenu = document.querySelector('.mobile-nav');
iconEventAnimations('headerIconButton', openMenuButton, 'active-icon', mobileNavMenu, 'hide', closeMenuButton, undefined, 100);
iconEventAnimations('headerIconButton', closeMenuButton, 'active-icon', mobileNavMenu, 'hide', undefined, openMenuButton, 100);

const sections = document.querySelectorAll('section');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
const desktopNavLinks = document.querySelectorAll('.desktop-nav-link');
setupNavigation('mobile', sections, 80, mobileNavLinks, 'mobile-nav-active-item', 'mobile-nav-active-link', closeMenuButton, openMenuButton, 'hide', mobileNavMenu, 800);
setupNavigation('desktop',sections, 80, desktopNavLinks, 'desktop-nav-active-item', 'desktop-nav-active-link');
desktopNavLinks.forEach(link => {
  iconEventAnimations('desktopNavLink', link, 'desktop-nav-focused-item');
});

const aboutLinkButton = document.querySelector('.about-link');
const aboutLightLinkIcon = document.querySelector('.light-down-arrow-icon');
const aboutDarkLinkIcon = document.querySelector('.dark-down-arrow-icon');
linkEventAnimations(aboutLinkButton, undefined, aboutLightLinkIcon, undefined, 'blue', 'about-link-background-hovered', 'about-link-background-active', 'about-link-active', 250);
linkEventAnimations(aboutLinkButton, undefined, aboutDarkLinkIcon, undefined, 'green', 'about-link-background-hovered', 'about-link-background-active', 'about-link-active', 250);

const contactLinkButton = document.querySelector('.contact-link');
const contactLightLinkIcon = document.querySelector('.light-message-icon');
const contactDarkLinkIcon = document.querySelector('.dark-message-icon');
linkEventAnimations(contactLinkButton, undefined, contactLightLinkIcon, undefined, 'white', 'contact-link-background-hovered', 'contact-link-background-active', 'contact-link-active', 250);
linkEventAnimations(contactLinkButton, undefined, contactDarkLinkIcon, undefined, 'black', 'contact-link-background-hovered', 'contact-link-background-active', 'contact-link-active', 250);

const resumeLinkButton = document.querySelector('.resume-link');
const resumeLightLinkIcon = document.querySelector('.light-download-icon');
const resumeDarkLinkIcon = document.querySelector('.dark-download-icon');
linkEventAnimations(resumeLinkButton, undefined, resumeLightLinkIcon, undefined, 'blue', 'resume-link-background-hovered', 'resume-link-background-active', 'resume-link-active', 250);
linkEventAnimations(resumeLinkButton, undefined, resumeDarkLinkIcon, undefined, 'green', 'resume-link-background-hovered', 'resume-link-background-active', 'resume-link-active', 250);

const previewLinkButton = document.querySelectorAll('.preview-link');
const previewLightLinkIcon = document.querySelectorAll('.light-new-tab-icon');
const previewDarkLinkIcon = document.querySelectorAll('.dark-new-tab-icon');
linkEventAnimations(undefined, previewLinkButton, undefined, previewLightLinkIcon, 'blue', 'preview-link-background-hovered', 'preview-link-background-active', 'preview-link-active', 250);
linkEventAnimations(undefined, previewLinkButton, undefined, previewDarkLinkIcon, 'green', 'preview-link-background-hovered', 'preview-link-background-active', 'preview-link-active', 250);

const sourceLinkButton = document.querySelectorAll('.source-link');
const sourceLightLinkIcon = document.querySelectorAll('.light-html-tag-icon');
const sourceDarkLinkIcon = document.querySelectorAll('.dark-html-tag-icon');
linkEventAnimations(undefined, sourceLinkButton, undefined, sourceLightLinkIcon, 'white', 'source-link-background-hovered', 'source-link-background-active', 'source-link-active', 250);
linkEventAnimations(undefined, sourceLinkButton, undefined, sourceDarkLinkIcon, 'black', 'source-link-background-hovered', 'source-link-background-active', 'source-link-active', 250);

const githubProjectsLinkButton = document.querySelector('.github-projects-link');
const githubProjectsLightLinkIcon = document.querySelector('.light-github-project-icon');
const githubProjectsDarkLinkIcon = document.querySelector('.dark-github-project-icon');
linkEventAnimations(githubProjectsLinkButton, undefined, githubProjectsLightLinkIcon, undefined, 'blue', 'github-projects-link-background-hovered', 'github-projects-link-background-active', 'github-projects-link-active', 250);
linkEventAnimations(githubProjectsLinkButton, undefined, githubProjectsDarkLinkIcon, undefined, 'green', 'github-projects-link-background-hovered', 'github-projects-link-background-active', 'github-projects-link-active', 250);

const githubLinkButton = document.querySelector('.github-link');
const githubLightLinkIcon = document.querySelector('.light-github-icon');
const githubDarkLinkIcon = document.querySelector('.dark-github-icon');
linkEventAnimations(githubLinkButton, undefined, githubLightLinkIcon, undefined, 'blue', 'github-link-background-hovered', 'github-link-background-active', 'github-link-active', 250);
linkEventAnimations(githubLinkButton, undefined, githubDarkLinkIcon, undefined, 'green', 'github-link-background-hovered', 'github-link-background-active', 'github-link-active', 250);

const linkedinLinkButton = document.querySelector('.linkedin-link');
const linkedinLightLinkIcon = document.querySelector('.light-linkedin-icon');
const linkedinDarkLinkIcon = document.querySelector('.dark-linkedin-icon');
linkEventAnimations(linkedinLinkButton, undefined, linkedinLightLinkIcon, undefined, 'white', 'linkedin-link-background-hovered', 'linkedin-link-background-active', 'linkedin-link-active', 250);
linkEventAnimations(linkedinLinkButton, undefined, linkedinDarkLinkIcon, undefined, 'black', 'linkedin-link-background-hovered', 'linkedin-link-background-active', 'linkedin-link-active', 250);

const sendButton = document.querySelector('.send-message');
const sendLightButtonIcon = document.querySelector('.light-send-icon');
const sendDarkButtonIcon = document.querySelector('.dark-send-icon');
linkEventAnimations(sendButton, undefined, sendLightButtonIcon, undefined, 'blue', 'send-message-button-background-hovered', 'send-message-button-background-active', 'send-message-active', 250);
linkEventAnimations(sendButton, undefined, sendDarkButtonIcon, undefined, 'green', 'send-message-button-background-hovered', 'send-message-button-background-active', 'send-message-active', 250);