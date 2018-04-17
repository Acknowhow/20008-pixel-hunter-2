import {templateFooterDefault} from './templates/footer/footer';

const centralContainer = document.querySelector(`.central`);

export const makeTemplate = (templateMain, templateFooter = templateFooterDefault) =>{
  const template = document.createElement(`template`);
  const footer = document.createElement(`footer`);

  footer.classList.add(`footer`);
  template.innerHTML = templateMain;

  footer.innerHTML = templateFooter;
  template.content.appendChild(footer);
  return template.content;
};

export const insertIntoContainer = (template, container = centralContainer) =>{
  container.innerHTML = ``;
  container.appendChild(template);
};
