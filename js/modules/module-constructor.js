const centralContainer = document.querySelector(`.central`);

export const makeTemplate = (templateMain) => {
  const template = document.createElement(`template`);

  template.innerHTML = templateMain;
  return template.content;
};

export const insertIntoContainer = (template, container = centralContainer) =>{
  container.innerHTML = ``;
  container.appendChild(template);

  return container;
};
