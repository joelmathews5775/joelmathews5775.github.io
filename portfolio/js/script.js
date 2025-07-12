const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    header.classList.add('header-bottom-shadow');
  } else {
    header.classList.remove('header-bottom-shadow');
  }
});

const homeLink = document.querySelector('.home-link');
homeLink.addEventListener('focus', () => {
  homeLink.parentNode.classList.add('active-icon');
});
homeLink.addEventListener('blur', () => {
  homeLink.parentNode.classList.remove('active-icon');
});
homeLink.addEventListener('mouseover', () => {
  homeLink.parentNode.classList.add('active-icon');
});
homeLink.addEventListener('mouseout', () => {
  homeLink.parentNode.classList.remove('active-icon');
});

const openMenuButton = document.querySelector('.open-menu-button');
const mobileNavMenu = document.querySelector('.mobile-nav');
openMenuButton.addEventListener('focus', () => {
  openMenuButton.parentNode.classList.add('active-icon');
});
openMenuButton.addEventListener('blur', () => {
  openMenuButton.parentNode.classList.remove('active-icon');
});
openMenuButton.addEventListener('mouseover', () => {
  openMenuButton.parentNode.classList.add('active-icon');
});
openMenuButton.addEventListener('mouseout', () => {
  openMenuButton.parentNode.classList.remove('active-icon');
});
openMenuButton.addEventListener('click', () => {
  setTimeout(() => {
    mobileNavMenu.classList.remove('hide');
    openMenuButton.parentNode.classList.remove('active-icon');
    openMenuButton.parentNode.classList.add('hide');
    closeMenuButton.parentNode.classList.remove('hide');
  }, 100)
});

const closeMenuButton = document.querySelector('.close-menu-button');
closeMenuButton.addEventListener('focus', () => {
  closeMenuButton.parentNode.classList.add('active-icon');
});
closeMenuButton.addEventListener('blur', () => {
  closeMenuButton.parentNode.classList.remove('active-icon');
});
closeMenuButton.addEventListener('mouseover', () => {
  closeMenuButton.parentNode.classList.add('active-icon');
});
closeMenuButton.addEventListener('mouseout', () => {
  closeMenuButton.parentNode.classList.remove('active-icon');
});
closeMenuButton.addEventListener('click', () => {
  setTimeout(() => {
    mobileNavMenu.classList.add('hide');
    closeMenuButton.parentNode.classList.remove('active-icon');
    closeMenuButton.parentNode.classList.add('hide');
    openMenuButton.parentNode.classList.remove('hide');
  }, 100)
});

const sections = document.querySelectorAll('section');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
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
    link.parentNode.classList.remove('mobile-nav-active-item');
    link.classList.remove('mobile-nav-active-link');
    if (link.getAttribute('href') === '#' + currentSectionId) {
      link.parentNode.classList.add('mobile-nav-active-item');
      link.classList.add('mobile-nav-active-link');  
    }
  });
  setTimeout(() => {
    closeMenuButton.parentNode.classList.add('hide');
    openMenuButton.parentNode.classList.remove('hide');
    mobileNavMenu.classList.add('hide');
    
  }, 800);
}
window.addEventListener('scroll', mobileNav);

const desktopNavLinks = document.querySelectorAll('.desktop-nav-link');
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
    link.parentNode.classList.remove('desktop-nav-active-item');
    link.classList.remove('desktop-nav-active-link');
    if (link.getAttribute('href') === '#' + currentSectionId) {
      link.parentNode.classList.add('desktop-nav-active-item');
      link.classList.add('desktop-nav-active-link');
    }
  });
}
window.addEventListener('scroll', desktopNav);

desktopNavLinks.forEach(link => {
  link.addEventListener('focus', () => {
    link.parentNode.classList.add('desktop-nav-focused-item');
  });
  link.addEventListener('blur', () => {
    link.parentNode.classList.remove('desktop-nav-focused-item');
  });
  link.addEventListener('mouseover', () => {
    link.parentNode.classList.add('desktop-nav-focused-item');
  });
  link.addEventListener('mouseout', () => {
    link.parentNode.classList.remove('desktop-nav-focused-item');
  });
});

const aboutLinkButton = document.querySelector('.about-link');
aboutLinkButton.addEventListener('focus', () => {
  aboutLinkButton.parentNode.classList.add('about-active-link-background');
});
aboutLinkButton.addEventListener('blur', () => {
  aboutLinkButton.parentNode.classList.remove('about-active-link-background');
});
aboutLinkButton.addEventListener('mouseover', () => {
  aboutLinkButton.parentNode.classList.add('about-active-link-background');
});
aboutLinkButton.addEventListener('mouseout', () => {
  aboutLinkButton.parentNode.classList.remove('about-active-link-background');
});

const contactLinkButton = document.querySelector('.contact-link');
contactLinkButton.addEventListener('focus', () => {
  contactLinkButton.parentNode.classList.add('contact-active-link-background');
  contactLinkButton.classList.add('contact-active-link');
});
contactLinkButton.addEventListener('blur', () => {
  contactLinkButton.parentNode.classList.remove('contact-active-link-background');
  contactLinkButton.classList.remove('contact-active-link');
});
contactLinkButton.addEventListener('mouseover', () => {
  contactLinkButton.parentNode.classList.add('contact-active-link-background');
  contactLinkButton.classList.add('contact-active-link');
});
contactLinkButton.addEventListener('mouseout', () => {
  contactLinkButton.parentNode.classList.remove('contact-active-link-background');
  contactLinkButton.classList.remove('contact-active-link');
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


