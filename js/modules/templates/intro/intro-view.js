// import {makeGreetingTemplate} from './../greeting/greeting';
import {makeTemplate} from './../../module-constructor';

export default (textData) => {
  const content = `
    <div class="intro">
      <h1 class="intro__asterisk">${textData.title}</h1>
      <p class="intro__motto">${textData.paragraph}</p>
    </div>`;

  const article = `<div id="main" class="central__content">${content}</div>`;
  return makeTemplate(article);

  // const el = makeTemplate(contentIntro);
  // const asterisk = el.querySelector(`.intro__asterisk`);
  //
  // const next = () => {
  //   insertIntoContainer(makeGreetingTemplate());
  //
  //   asterisk.removeEventListener(`click`, next);
  // };
  //
  // asterisk.addEventListener(`click`, next);
  // return el;
};
