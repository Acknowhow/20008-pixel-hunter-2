const central = document.querySelector(`.central`);

export const createElement = (
    template = ``, tagName = `div`, className = ``) => {

  const outer = document.createElement(tagName);
  outer.classList.add(className);

  outer.innerHTML = template.trim();
  return outer;
};

export const changeView = (element) => {
  central.innerHTML = ``;
  central.appendChild(element);
};

