import {makeGreetingTemplate} from './../greeting/greeting';
import {insertIntoContainer, makeTemplate} from './../../module-constructor';

const contentIntro = `<div id="main" class="central__content">
    <div class="intro">
      <h1 class="intro__asterisk">*</h1>
      <p class="intro__motto"><sup>*</sup> Это не фото. 
      Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
    </div>
  </div>`;

export const makeIntroTemplate = () => {
  const el = makeTemplate(contentIntro);
  const asterisk = el.querySelector(`.intro__asterisk`);

  const next = () => {
    insertIntoContainer(makeGreetingTemplate());

    asterisk.removeEventListener(`click`, next);
  };

  asterisk.addEventListener(`click`, next);
  return el;
};
