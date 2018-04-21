// Later on will launch game with current state
// from previous model
import {initialState} from '../../../data/hunt';

import introScreen from './../intro/intro';
import game2Screen from './../game-2/game-2';
import game1Template from './game-1-view';

import {insertIntoContainer} from './../../module-constructor';
import text from './game-1-data';

export const game1Screen = (currentState, currentQuestion) => {

  insertIntoContainer(game1Template(currentState, text, currentQuestion));
  const form = document.querySelector(`.game__content`);

  const answers1 = Array.from(
      form.querySelectorAll(`input[name='question1']`));

  const answers2 = Array.from(
      form.querySelectorAll(`input[name='question2']`));

  const linkBack = document.querySelector(`.header__back`);

  linkBack.onclick = () => introScreen();

  form.onclick = () => {
    const answers1Checked = answers1.filter((it) => it.checked);
    const answers2Checked = answers2.filter((it) => it.checked);

    const answered = () => {
      return answers1Checked.length && answers2Checked.length;
    };

    if (answered()) {

      // if both answered, get current screen
      game2Screen(initialState);
    }

  };
};


