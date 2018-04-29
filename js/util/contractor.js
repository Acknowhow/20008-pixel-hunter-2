const central = document.querySelector(`.central`);

export const createElement = (
    template = ``, tagName = `template`, className = []) => {

  const outer = document.createElement(tagName);
  if (className.length) {

    const [templateClass] = className;
    outer.classList.add(templateClass);
  }
  outer.innerHTML = template.trim();
  return outer;
};

export const changeView = (element) => {
  central.innerHTML = ``;
  central.appendChild(element);
};

