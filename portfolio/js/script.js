import * as siteFunctions from '../js/siteFunctions.js';
import {projects} from '../js/projects.js';

siteFunctions.initFullHeightListener();

const header = document.querySelector('.header');
siteFunctions.addheaderShadowOnScroll(header);

const homeLink = document.querySelector('.home-link');
siteFunctions.iconEventAnimations('headerIconLink', homeLink, 'active-icon', undefined, undefined, undefined, undefined);

const mobileNavMenu = document.querySelector('.mobile-nav');
const openMenuButton = document.querySelector('.open-menu-button');
const closeMenuButton = document.querySelector('.close-menu-button');
siteFunctions.iconEventAnimations('headerIconButton', openMenuButton, 'active-icon', mobileNavMenu, closeMenuButton, undefined, 100);
siteFunctions.iconEventAnimations('headerIconButton', closeMenuButton, 'active-icon', mobileNavMenu, undefined, openMenuButton, 100);

const sections = document.querySelectorAll('section');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
const desktopNavLinks = document.querySelectorAll('.desktop-nav-link');
siteFunctions.setupNavigation('mobile', sections, 80, mobileNavLinks, 'mobile-nav-active-item', 'mobile-nav-active-link', closeMenuButton, openMenuButton, 'hide', mobileNavMenu, 800);
siteFunctions.setupNavigation('desktop',sections, 80, desktopNavLinks, 'desktop-nav-active-item', 'desktop-nav-active-link', undefined, undefined, undefined, undefined, undefined);
desktopNavLinks.forEach(link => {
  siteFunctions.iconEventAnimations('desktopNavLink', link, 'desktop-nav-focused-item', undefined, undefined, undefined, undefined);
});

const aboutLinkButton = document.querySelector('.about-link');
const aboutLightLinkIcon = document.querySelector('.light-down-arrow-icon');
const aboutDarkLinkIcon = document.querySelector('.dark-down-arrow-icon');
siteFunctions.linkEventAnimations(aboutLinkButton, undefined, aboutLightLinkIcon, undefined, 'blue', 'about-link-background-hovered', 'about-link-background-active', 'about-link-active', 250);
siteFunctions.linkEventAnimations(aboutLinkButton, undefined, aboutDarkLinkIcon, undefined, 'green', 'about-link-background-hovered', 'about-link-background-active', 'about-link-active', 250);

const contactLinkButton = document.querySelector('.contact-link');
const contactLightLinkIcon = document.querySelector('.light-message-icon');
const contactDarkLinkIcon = document.querySelector('.dark-message-icon');
siteFunctions.linkEventAnimations(contactLinkButton, undefined, contactLightLinkIcon, undefined, 'white', 'contact-link-background-hovered', 'contact-link-background-active', 'contact-link-active', 250);
siteFunctions.linkEventAnimations(contactLinkButton, undefined, contactDarkLinkIcon, undefined, 'black', 'contact-link-background-hovered', 'contact-link-background-active', 'contact-link-active', 250);

const resumeLinkButton = document.querySelector('.resume-link');
const resumeLightLinkIcon = document.querySelector('.light-download-icon');
const resumeDarkLinkIcon = document.querySelector('.dark-download-icon');
siteFunctions.linkEventAnimations(resumeLinkButton, undefined, resumeLightLinkIcon, undefined, 'blue', 'resume-link-background-hovered', 'resume-link-background-active', 'resume-link-active', 250);
siteFunctions.linkEventAnimations(resumeLinkButton, undefined, resumeDarkLinkIcon, undefined, 'green', 'resume-link-background-hovered', 'resume-link-background-active', 'resume-link-active', 250);

const projectContainer = document.querySelector('.projects-container');
siteFunctions.displayProjects(projectContainer, projects);

const previewLinkButton = document.querySelectorAll('.preview-link');
const previewLightLinkIcon = document.querySelectorAll('.light-new-tab-icon');
const previewDarkLinkIcon = document.querySelectorAll('.dark-new-tab-icon');
siteFunctions.linkEventAnimations(undefined, previewLinkButton, undefined, previewLightLinkIcon, 'blue', 'preview-link-background-hovered', 'preview-link-background-active', 'preview-link-active', 250);
siteFunctions.linkEventAnimations(undefined, previewLinkButton, undefined, previewDarkLinkIcon, 'green', 'preview-link-background-hovered', 'preview-link-background-active', 'preview-link-active', 250);

const sourceLinkButton = document.querySelectorAll('.source-link');
const sourceLightLinkIcon = document.querySelectorAll('.light-html-tag-icon');
const sourceDarkLinkIcon = document.querySelectorAll('.dark-html-tag-icon');
siteFunctions.linkEventAnimations(undefined, sourceLinkButton, undefined, sourceLightLinkIcon, 'white', 'source-link-background-hovered', 'source-link-background-active', 'source-link-active', 250);
siteFunctions.linkEventAnimations(undefined, sourceLinkButton, undefined, sourceDarkLinkIcon, 'black', 'source-link-background-hovered', 'source-link-background-active', 'source-link-active', 250);

const githubProjectsLinkButton = document.querySelector('.github-projects-link');
const githubProjectsLightLinkIcon = document.querySelector('.light-github-project-icon');
const githubProjectsDarkLinkIcon = document.querySelector('.dark-github-project-icon');
siteFunctions.linkEventAnimations(githubProjectsLinkButton, undefined, githubProjectsLightLinkIcon, undefined, 'blue', 'github-projects-link-background-hovered', 'github-projects-link-background-active', 'github-projects-link-active', 250);
siteFunctions.linkEventAnimations(githubProjectsLinkButton, undefined, githubProjectsDarkLinkIcon, undefined, 'green', 'github-projects-link-background-hovered', 'github-projects-link-background-active', 'github-projects-link-active', 250);

const githubLinkButton = document.querySelector('.github-link');
const githubLightLinkIcon = document.querySelector('.light-github-icon');
const githubDarkLinkIcon = document.querySelector('.dark-github-icon');
siteFunctions.linkEventAnimations(githubLinkButton, undefined, githubLightLinkIcon, undefined, 'blue', 'github-link-background-hovered', 'github-link-background-active', 'github-link-active', 250);
siteFunctions.linkEventAnimations(githubLinkButton, undefined, githubDarkLinkIcon, undefined, 'green', 'github-link-background-hovered', 'github-link-background-active', 'github-link-active', 250);

const linkedinLinkButton = document.querySelector('.linkedin-link');
const linkedinLightLinkIcon = document.querySelector('.light-linkedin-icon');
const linkedinDarkLinkIcon = document.querySelector('.dark-linkedin-icon');
siteFunctions.linkEventAnimations(linkedinLinkButton, undefined, linkedinLightLinkIcon, undefined, 'white', 'linkedin-link-background-hovered', 'linkedin-link-background-active', 'linkedin-link-active', 250);
siteFunctions.linkEventAnimations(linkedinLinkButton, undefined, linkedinDarkLinkIcon, undefined, 'black', 'linkedin-link-background-hovered', 'linkedin-link-background-active', 'linkedin-link-active', 250);

const sendButton = document.querySelector('.send-message');
const sendLightButtonIcon = document.querySelector('.light-send-icon');
const sendDarkButtonIcon = document.querySelector('.dark-send-icon');
siteFunctions.linkEventAnimations(sendButton, undefined, sendLightButtonIcon, undefined, 'blue', 'send-message-button-background-hovered', 'send-message-button-background-active', 'send-message-active', 250);
siteFunctions.linkEventAnimations(sendButton, undefined, sendDarkButtonIcon, undefined, 'green', 'send-message-button-background-hovered', 'send-message-button-background-active', 'send-message-active', 250);

const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');
const nameError = document.querySelector('.name-error');
const emailError = document.querySelector('.email-error');
const messageError = document.querySelector('.message-error');
const inputs = [nameInput, emailInput, messageInput];
inputs.forEach(input => {
  input.addEventListener('input', () => {
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();
    if (name !== '' && /^[A-Z][a-zA-Z'’\-]*?(?: [A-Z][a-zA-Z'’\-]*?)*$/.test(name) && name.length >= 2 && email !== '' && /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email) && message !== '' && message.length >= 5) {
      siteFunctions.enableSendButton(sendButton);
    } else {
      siteFunctions.disableSendButton(sendButton);
    }
    if (input.id === 'name') {
      siteFunctions.validateName(name, nameInput, nameError);
    } else if (input.id === 'email') {
      siteFunctions.validateEmail(email, emailInput, emailError);
    } else if (input.id === 'message') {
      siteFunctions.validateMessage(message, messageInput, messageError);
    }
  });
});

const closeModalButton = document.querySelector('.close-modal');
const tickLightButtonIcon = document.querySelector('.light-tick-icon');
const tickDarkButtonIcon = document.querySelector('.dark-tick-icon');
const overlay = document.querySelector('.overlay');
siteFunctions.linkEventAnimations(closeModalButton, undefined, tickLightButtonIcon, undefined, 'blue', 'close-modal-button-background-hovered', 'close-modal-button-background-active', 'close-modal-active', 250);
siteFunctions.linkEventAnimations(closeModalButton, undefined, tickDarkButtonIcon, undefined, 'green', 'close-modal-button-background-hovered', 'close-modal-button-background-active', 'close-modal-active', 250);
closeModalButton.addEventListener('click', () => {
  siteFunctions.closeModalBox(overlay, 'hide');
});

const messageForm = document.querySelector('#message-form');
const scriptURL = 'https://script.google.com/macros/s/AKfycbxGN8ij44tzFF51A17Rey6b0yv91jHvagXkUj-cyD-TBGYiZLwOEZyx0TD-lhVeJ-Gq/exec';
messageForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();
  let result = siteFunctions.validateForm(name, nameInput, nameError, email, emailInput, emailError, message, messageInput, messageError);
  if (result !== true) {
    const formData = new FormData(e.target);
    fetch(scriptURL, {
      method: 'POST',
      body: formData,
      mode: 'no-cors'
    });
    messageForm.reset();
    sendButton.blur();
    siteFunctions.disableSendButton(sendButton);
    siteFunctions.clearInput(inputs);
    siteFunctions.openModalBox(overlay, 'hide');
  }
});