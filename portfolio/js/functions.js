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
      const sectionTop = section.offsetTop - navbarHeight;
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

export function iconEventAnimations(elementType, iconElement, cssIconActiveClass, menuElement, cssHideClass, closeMenuElement, openMenuElement, delayDuration) {
  function commonIconActions() {
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
    commonIconActions();
  } else if (elementType === 'headerIconButton') {
    commonIconActions();
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

export function linkEventAnimations(buttonElement, buttonElements, buttonIconElement, buttonIconElements, iconColor, cssButtonBackgroundHoverClass, cssButtonBackgroundActiveClass, cssButtonTextClass, delayDuration) {
  if (buttonElements !== undefined && buttonIconElements !== undefined) {
    buttonElements.forEach((button, index) => {
      if (buttonIconElements[index].tagName === 'IMG') {
        const filePath = buttonIconElements[index].getAttribute('src');
        const newFilePath = filePath.slice(0, filePath.lastIndexOf('_') + 1) + iconColor +'.svg';
        button.addEventListener('mouseover', () => {
          button.parentNode.classList.add(cssButtonBackgroundHoverClass);
        });
        button.addEventListener('mouseout', () => {
          button.parentNode.classList.remove(cssButtonBackgroundHoverClass);
        });
        button.addEventListener('focus', () => {
          buttonIconElements[index].setAttribute('src',newFilePath);
          button.parentNode.classList.add(cssButtonBackgroundActiveClass);
          button.classList.add(cssButtonTextClass);
        });
        button.addEventListener('blur', () => {
          setTimeout(() => {
            buttonIconElements[index].setAttribute('src',filePath);
            button.parentNode.classList.remove(cssButtonBackgroundActiveClass);
            button.classList.remove(cssButtonTextClass);
          }, delayDuration);
        });
      } else if (buttonIconElements[index].tagName === 'SOURCE') {
        const filePath = buttonIconElements[index].getAttribute('srcset');
        const newFilePath = filePath.slice(0, filePath.lastIndexOf('_') + 1) + iconColor +'.svg';
        button.addEventListener('mouseover', () => {
          button.parentNode.classList.add(cssButtonBackgroundHoverClass);
        });
        button.addEventListener('mouseout', () => {
          button.parentNode.classList.remove(cssButtonBackgroundHoverClass);
        });
        button.addEventListener('focus', () => {
          buttonIconElements[index].setAttribute('srcset',newFilePath);
          button.parentNode.classList.add(cssButtonBackgroundActiveClass);
          button.classList.add(cssButtonTextClass);
        });
        button.addEventListener('blur', () => {
          setTimeout(() => {
            buttonIconElements[index].setAttribute('srcset',filePath);
            button.parentNode.classList.remove(cssButtonBackgroundActiveClass);
            button.classList.remove(cssButtonTextClass);
          }, delayDuration);
        });
      }
    });
  } else {
    if (buttonIconElement.tagName === 'IMG') {
      const filePath = buttonIconElement.getAttribute('src');
      const newFilePath = filePath.slice(0, filePath.lastIndexOf('_') + 1) + iconColor +'.svg';
      function commonLinkActions() {
        buttonElement.addEventListener('mouseover', () => {
          buttonElement.parentNode.classList.add(cssButtonBackgroundHoverClass);
        });
        buttonElement.addEventListener('mouseout', () => {
          buttonElement.parentNode.classList.remove(cssButtonBackgroundHoverClass);
        });
        buttonElement.addEventListener('focus', () => {
          buttonIconElement.setAttribute('src',newFilePath);
          buttonElement.parentNode.classList.add(cssButtonBackgroundActiveClass);
          buttonElement.classList.add(cssButtonTextClass);
        });
        buttonElement.addEventListener('blur', () => {
          setTimeout(() => {
            buttonIconElement.setAttribute('src',filePath);
            buttonElement.parentNode.classList.remove(cssButtonBackgroundActiveClass);
            buttonElement.classList.remove(cssButtonTextClass);
          }, delayDuration);
        });
      }
      if (buttonElement.tagName === 'A') {
        commonLinkActions();
      } else if (buttonElement.tagName === 'BUTTON') {
        commonLinkActions();
        buttonElement.addEventListener('click', () => {
          setTimeout(() => {
            buttonElement.parentNode.classList.remove(cssButtonBackgroundActiveClass);
            buttonElement.classList.remove(cssButtonTextClass);
          }, delayDuration);
        });
      }
    } else if (buttonIconElement.tagName === 'SOURCE') {
      const filePath = buttonIconElement.getAttribute('srcset');
      const newFilePath = filePath.slice(0, filePath.lastIndexOf('_') + 1) + iconColor +'.svg';
      function commonLinkActions() {
        buttonElement.addEventListener('mouseover', () => {
          buttonElement.parentNode.classList.add(cssButtonBackgroundHoverClass);
        });
        buttonElement.addEventListener('mouseout', () => {
          buttonElement.parentNode.classList.remove(cssButtonBackgroundHoverClass);
        });
        buttonElement.addEventListener('focus', () => {
          buttonIconElement.setAttribute('srcset',newFilePath);
          buttonElement.parentNode.classList.add(cssButtonBackgroundActiveClass);
          buttonElement.classList.add(cssButtonTextClass);
        });
        buttonElement.addEventListener('blur', () => {
          setTimeout(() => {
            buttonIconElement.setAttribute('srcset',filePath);
            buttonElement.parentNode.classList.remove(cssButtonBackgroundActiveClass);
            buttonElement.classList.remove(cssButtonTextClass);
          }, delayDuration);
        });
      }
      if (buttonElement.tagName === 'A') {
        commonLinkActions();
      } else if (buttonElement.tagName === 'BUTTON') {
        commonLinkActions();
        buttonElement.addEventListener('click', () => {
          setTimeout(() => {
            buttonIconElement.setAttribute('srcset',filePath);
            buttonElement.parentNode.classList.remove(cssButtonBackgroundActiveClass);
            buttonElement.classList.remove(cssButtonTextClass);
            buttonElement.blur();
          }, delayDuration);
        });
      }
    }
  }
}
