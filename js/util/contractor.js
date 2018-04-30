import {centralContainer} from '../modules/handlers/screen';

export const createElement = (
    template = ``, tagName = `template`, className = []) => {

  const outer = document.createElement(tagName);
  if (className.length) {
    for (const templateClass of className) {

      outer.classList.add(templateClass);
    }
  }
  outer.innerHTML = template.trim();
  return outer;
};

export const changeView = (element) => {
  centralContainer.innerHTML = ``;
  centralContainer.appendChild(element);

  return centralContainer;
};

export const updateView = (parent, view) => {
  parent.innerHTML = ``;
  parent.appendChild(view.element);
};

