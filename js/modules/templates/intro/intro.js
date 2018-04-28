import {insertIntoContainer} from '../../module-constructor';
import introTemplate from './intro-view';
import greetingScreen from './../greeting/greeting';

import {INITIAL_ANSWERS} from '../../../data/hunt';
import text from './intro-data';

const answers = [];

for (const answer of INITIAL_ANSWERS) {
  answers.push(Object.assign({}, answer));
}

export const introScreen = () => {
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

export default answers;
