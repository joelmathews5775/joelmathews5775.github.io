export function addheaderShadowOnScroll(headerElement) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      headerElement.classList.add('header-bottom-shadow');
    } else {
      headerElement.classList.remove('header-bottom-shadow');
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
          document.body.style.overflow = 'visible';
      }, delayDuration);
    }
  }
  window.addEventListener('scroll', onScroll);
}

function commonIconActions(iconElement, cssIconActiveClass) {
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

export function iconEventAnimations(elementType, iconElement, cssIconActiveClass, menuElement, closeMenuElement, openMenuElement, delayDuration) {
  if (elementType === 'headerIconLink' || elementType === 'desktopNavLink') {
    commonIconActions(iconElement, cssIconActiveClass);
  } else if (elementType === 'headerIconButton') {
    commonIconActions(iconElement, cssIconActiveClass);
    if (openMenuElement === undefined) {
      iconElement.addEventListener('click', () => {
        setTimeout(() => {
          menuElement.classList.remove('hide');
          document.body.style.overflow = 'hidden';
          iconElement.parentNode.classList.remove(cssIconActiveClass);
          iconElement.parentNode.classList.add('hide');
          closeMenuElement.parentNode.classList.remove('hide');
        }, delayDuration);
      });
    } else if (closeMenuElement === undefined) {
      iconElement.addEventListener('click', () => {
        setTimeout(() => {
          menuElement.classList.add('hide');
          document.body.style.overflow = 'visible';
          iconElement.parentNode.classList.remove(cssIconActiveClass);
          iconElement.parentNode.classList.add('hide');
          openMenuElement.parentNode.classList.remove('hide');
        }, delayDuration);
      });
    }
  }
}

function commonLinkActions(buttonElement, cssButtonBackgroundHoverClass, buttonIconElement, buttonIconElements, index, attributeType, newFilePath, cssButtonBackgroundActiveClass, cssButtonTextClass, filePath, delayDuration) {
  buttonElement.addEventListener('mouseover', () => {
    buttonElement.parentNode.classList.add(cssButtonBackgroundHoverClass);
  });
  buttonElement.addEventListener('mouseout', () => {
    buttonElement.parentNode.classList.remove(cssButtonBackgroundHoverClass);
  });
  buttonElement.addEventListener('focus', () => {
    if (buttonIconElements !== undefined && index !== undefined) {
      buttonIconElements[index].setAttribute(attributeType, newFilePath);
      buttonElement.parentNode.classList.add(cssButtonBackgroundActiveClass);
      buttonElement.classList.add(cssButtonTextClass);
    } else {
      buttonIconElement.setAttribute(attributeType, newFilePath);
      buttonElement.parentNode.classList.add(cssButtonBackgroundActiveClass);
      buttonElement.classList.add(cssButtonTextClass);
    }
  });
  buttonElement.addEventListener('blur', () => {
    if (buttonIconElements !== undefined && index !== undefined) {
      setTimeout(() => {
        buttonIconElements[index].setAttribute(attributeType, filePath);
        buttonElement.parentNode.classList.remove(cssButtonBackgroundActiveClass);
        buttonElement.classList.remove(cssButtonTextClass);
      }, delayDuration);
    } else {
      setTimeout(() => {
        buttonIconElement.setAttribute(attributeType, filePath);
        buttonElement.parentNode.classList.remove(cssButtonBackgroundActiveClass);
        buttonElement.classList.remove(cssButtonTextClass);
      }, delayDuration);
    }
  });
}

export function linkEventAnimations(buttonElement, buttonElements, buttonIconElement, buttonIconElements, iconColor, cssButtonBackgroundHoverClass, cssButtonBackgroundActiveClass, cssButtonTextClass, delayDuration) {
  if (buttonElements !== undefined && buttonIconElements !== undefined) {
    buttonElements.forEach((button, index) => {
      if (buttonIconElements[index].tagName === 'IMG') {
        const filePath = buttonIconElements[index].getAttribute('src');
        const newFilePath = filePath.slice(0, filePath.lastIndexOf('_') + 1) + iconColor +'.svg';
        commonLinkActions(button, cssButtonBackgroundHoverClass, undefined, buttonIconElements, index, 'src', newFilePath, cssButtonBackgroundActiveClass, cssButtonTextClass, filePath, delayDuration);
      } else if (buttonIconElements[index].tagName === 'SOURCE') {
        const filePath = buttonIconElements[index].getAttribute('srcset');
        const newFilePath = filePath.slice(0, filePath.lastIndexOf('_') + 1) + iconColor +'.svg';
        commonLinkActions(button, cssButtonBackgroundHoverClass, undefined, buttonIconElements, index, 'srcset', newFilePath, cssButtonBackgroundActiveClass, cssButtonTextClass, filePath, delayDuration);
      }
    });
  } else {
    if (buttonIconElement.tagName === 'IMG') {
      const filePath = buttonIconElement.getAttribute('src');
      const newFilePath = filePath.slice(0, filePath.lastIndexOf('_') + 1) + iconColor +'.svg';
      if (buttonElement.tagName === 'A') {
        commonLinkActions(buttonElement, cssButtonBackgroundHoverClass, buttonIconElement, undefined, undefined, 'src', newFilePath, cssButtonBackgroundActiveClass, cssButtonTextClass, filePath, delayDuration);
      } else if (buttonElement.tagName === 'BUTTON') {
        commonLinkActions(buttonElement, cssButtonBackgroundHoverClass, buttonIconElement, undefined, undefined, 'src', newFilePath, cssButtonBackgroundActiveClass, cssButtonTextClass, filePath, delayDuration);
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
      if (buttonElement.tagName === 'A') {
        commonLinkActions(buttonElement, cssButtonBackgroundHoverClass, buttonIconElement, undefined, undefined, 'srcset', newFilePath, cssButtonBackgroundActiveClass, cssButtonTextClass, filePath, delayDuration);
      } else if (buttonElement.tagName === 'BUTTON') {
        commonLinkActions(buttonElement, cssButtonBackgroundHoverClass, buttonIconElement, undefined, undefined, 'srcset', newFilePath, cssButtonBackgroundActiveClass, cssButtonTextClass, filePath, delayDuration);
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

export function enableSendButton(buttonElement) {
  buttonElement.disabled = false;
  buttonElement.parentNode.classList.remove('disabled-link-button');
}

export function disableSendButton(buttonElement) {
  buttonElement.disabled = true;
  buttonElement.parentNode.classList.add('disabled-link-button');
}

export function validateName(name, nameInput, nameError) {
  let hasError = false;
  if (name === '') {
    nameInput.classList.add('invalid-input');
    nameError.textContent = 'Name is required and cannot be blank.';
    nameError.classList.add('visible');
    hasError = true;
  } else if (!/^[A-Z][a-zA-Z'’\-]*?(?: [A-Z][a-zA-Z'’\-]*?)*$/.test(name)) {
    nameInput.classList.add('invalid-input');
    nameError.textContent = 'Please enter a valid name (letters and spaces only).';
    nameError.classList.add('visible');
    hasError = true;
    const capitalStart = name.split(' ').every(part => /^[A-Z]/.test(part));
    const validChars = /^[A-Za-z'’\- ]+$/.test(name);
    if (!capitalStart) {
      nameError.textContent = 'Both first and last names must start with a capital letter.';
      nameError.classList.add('visible');
    }
    if (!validChars) {
    nameError.textContent = 'Please enter a valid name (letters and spaces only).';
    nameError.classList.add('visible');
    }
    if (capitalStart && validChars) {
      nameError.textContent = '';
      nameError.classList.remove('visible');
    }
  } else if (name.length < 2) {
    nameInput.classList.add('invalid-input');
    nameError.textContent = 'Name must be at least 2 characters.';
    nameError.classList.add('visible');
    hasError = true;
  } else {
    nameInput.classList.remove('invalid-input');
    nameInput.classList.add('valid-input');
    nameError.textContent = '';
    nameError.classList.remove('visible');
    hasError = false;
  }
  return hasError;
}

export function validateEmail(email, emailInput, emailError) {
  let hasError = false;
  if (email === '') {
    emailInput.classList.add('invalid-input');
    emailError.textContent = 'Email is required and cannot be blank.';
    emailError.classList.add('visible');
    hasError = true;
  } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
    emailInput.classList.add('invalid-input');
    emailError.textContent = 'Please enter a valid email address.';
    emailError.classList.add('visible');
    hasError = true;
  } else {
    emailInput.classList.remove('invalid-input');
    emailInput.classList.add('valid-input');
    emailError.textContent = '';
    emailError.classList.remove('visible');
    hasError = false;
  }
  return hasError;
}

export function validateMessage(message, messageInput, messageError) {
  let hasError = false;
  if (message === '') {
    messageInput.classList.add('invalid-input');
    messageError.textContent = 'Message is required and cannot be blank.';
    messageError.classList.add('visible');
    hasError = true;
  } else if (message.length < 5) {
    messageInput.classList.add('invalid-input');
    messageError.textContent = 'Message must be at least 5 characters.';
    messageError.classList.add('visible');
    hasError = true;
  } else {
    messageInput.classList.remove('invalid-input');
    messageInput.classList.add('valid-input');
    messageError.textContent = '';
    messageError.classList.remove('visible');
    hasError = false;
  }
  return hasError;
}

export function clearInput(inputs) {
  inputs.forEach(input => {
    input.classList.contains('valid-input') && input.classList.remove('valid-input');
    input.classList.contains('invalid-input') && input.classList.remove('invalid-input');
  });
}

export function validateForm(name, nameInput, nameError, email, emailInput, emailError, message, messageInput,  messageError) {
  let hasError = false;
  let nameValid = validateName(name, nameInput, nameError);
  let emailValid = validateEmail(email, emailInput, emailError);
  let messageValid = validateMessage(message, messageInput, messageError);
  if (nameValid === true || emailValid === true || messageValid === true) {
    hasError = true;
  } else {
    hasError = false;
  }
  return hasError;
}

export function openModalBox(overLayElement, cssHideClass) {
  overLayElement.classList.remove(cssHideClass);
  document.body.style.overflow = 'hidden';
}
export function closeModalBox(overLayElement, cssHideClass) {
  overLayElement.classList.add(cssHideClass);
  document.body.style.overflow = 'visible';
}