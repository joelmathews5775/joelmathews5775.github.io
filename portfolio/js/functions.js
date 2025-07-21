export function addheaderShadowOnScroll(headerElement, cssClass) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      headerElement.classList.add(cssClass);
    } else {
      headerElement.classList.remove(cssClass);
    }
  });
}

export function setupNavigation(navType, sectionsArray, navbarHeight, navLinksArray, cssActiveItemClass, cssActiveLinkClass, closeMenuElement, openMenuElement, cssHideClass, navElement, delayDuration) {
  function onScroll() {
    let currentSectionId = '';
    sectionsArray.forEach(section => {
      const sectionTop = section.offsetTop - navbarHeight; // adjust for nav height
      const sectionHeight = section.clientHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        currentSectionId = section.id;
      }
    });
    navLinksArray.forEach(link => {
      link.parentNode.classList.remove(cssActiveItemClass);
      link.classList.remove(cssActiveLinkClass);
      if (link.getAttribute('href') === '#' + currentSectionId) {
        link.parentNode.classList.add(cssActiveItemClass);
        link.classList.add(cssActiveLinkClass);  
      }
    });
    if (navType === 'mobile') {
      setTimeout(() => {
        closeMenuElement.parentNode.classList.add(cssHideClass);
        openMenuElement.parentNode.classList.remove(cssHideClass);
        navElement.classList.add(cssHideClass);
      }, delayDuration);
    }
  }
  window.addEventListener('scroll', onScroll);
}

export function eventAnimations(elementType, iconElement, cssIconActiveClass, menuElement, cssHideClass, closeMenuElement, openMenuElement, delayDuration) {
  function commonActions() {
    iconElement.addEventListener('focus', () => {
      iconElement.parentNode.classList.add(cssIconActiveClass);
    });
    iconElement.addEventListener('blur', () => {
      iconElement.parentNode.classList.remove(cssIconActiveClass);
    });
    iconElement.addEventListener('mouseover', () => {
      iconElement.parentNode.classList.add(cssIconActiveClass);
    });
    iconElement.addEventListener('mouseout', () => {
      iconElement.parentNode.classList.remove(cssIconActiveClass);
    });
  }
  if (elementType === 'headerIconLink' || elementType === 'desktopNavLink') {
    commonActions();
  } else if (elementType === 'headerIconButton') {
    commonActions();
    if (openMenuElement === undefined) {
      iconElement.addEventListener('click', () => {
        setTimeout(() => {
          menuElement.classList.remove(cssHideClass);
          iconElement.parentNode.classList.remove(cssIconActiveClass);
          iconElement.parentNode.classList.add(cssHideClass);
          closeMenuElement.parentNode.classList.remove(cssHideClass);
        }, delayDuration);
      });
    } else if (closeMenuElement === undefined) {
      iconElement.addEventListener('click', () => {
        setTimeout(() => {
          menuElement.classList.add(cssHideClass);
          iconElement.parentNode.classList.remove(cssIconActiveClass);
          iconElement.parentNode.classList.add(cssHideClass);
          openMenuElement.parentNode.classList.remove(cssHideClass);
        }, delayDuration);
      });
    }
  }
}