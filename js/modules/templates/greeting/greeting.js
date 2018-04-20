import {makeRulesTemplate} from './../rules/rules';
import {insertIntoContainer, makeTemplate} from './../../module-constructor';

import text from './greeting-data';

const moduleGreeting = `<div class="greeting central--blur">
    <div class="greeting__logo"><img src="img/logo_big.png" width="201" height="89" alt="Pixel Hunter"></div>
    <h1 class="greeting__asterisk">*</h1>
    <div class="greeting__challenge">
      <h3>${text.title}</h3>
      <p>${text.paragraph}</p>
    </div>
    <div class="greeting__continue"><span><img src="img/arrow_right.svg" width="64" height="64" alt="Next"></span></div>
  </div>`;

export const makeGreetingTemplate = () => {
  const el = makeTemplate(moduleGreeting);
  const linkNext = el.querySelector(`img[alt='Next']`);

  const next = () => {
    insertIntoContainer(makeRulesTemplate());

    linkNext.removeEventListener(`click`, next);
  };

  linkNext.addEventListener(`click`, next);
  return el;
};

