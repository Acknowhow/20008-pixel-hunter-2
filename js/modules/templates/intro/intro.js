import {insertIntoContainer} from '../../module-constructor';
import introTemplate from './intro-view';
import greetingScreen from './../greeting/greeting';

import text from './intro-data';

export default () => {
  insertIntoContainer(introTemplate(text));
  const asterisk = document.querySelector(`.intro__asterisk`);

  const next = () => {
    asterisk.removeEventListener(`click`, next);

    setTimeout(() => {
      greetingScreen();
    }, 0);
  };

  asterisk.addEventListener(`click`, next);

};
