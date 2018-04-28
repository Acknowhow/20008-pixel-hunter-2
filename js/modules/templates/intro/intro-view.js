import {makeTemplate} from './../../module-constructor';

export default (textData) => {
  const content = `
    <div class="intro">
      <h1 class="intro__asterisk">${textData.title}</h1>
      <p class="intro__motto">${textData.paragraph}</p>
    </div>`;

  const article = `<div id="main" class="central__content">${content}</div>`;
  return makeTemplate(article);
};
