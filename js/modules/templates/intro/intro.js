import {insertIntoContainer} from '../../module-constructor';
import introTemplate from './intro-view';

import text from './intro-data';

export default () => {
  const el = insertIntoContainer(introTemplate(text));
  const asterisk = el.querySelector(`.intro__asterisk`);

  const next = () => {
    // insertIntoContainer(makeGreetingTemplate());

    asterisk.removeEventListener(`click`, next);
  };

  asterisk.addEventListener(`click`, next);
  return el;
};
