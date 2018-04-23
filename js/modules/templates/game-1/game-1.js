// Later on will launch game with current state
// from previous model

import introScreen from './../intro/intro';
// import game2Screen from './../game-2/game-2';
import game1Template from './game-1-view';


import {insertIntoContainer} from './../../module-constructor';
import text from './game-1-data';
import {Hunt} from "../../../data/hunt";

export const game1Screen = (currentGame, currentQuestion) => {
  // const screen = Hunt[currentGame.type][currentGame.screen];

  insertIntoContainer(game1Template(currentGame, text, currentQuestion));
  const form = document.querySelector(`.game__content`);

  const answers1 = Array.from(
      form.querySelectorAll(`input[name='question1']`));

  const answers2 = Array.from(
      form.querySelectorAll(`input[name='question2']`));

  const linkBack = document.querySelector(`.header__back`);
  linkBack.onclick = () => introScreen();

  form.onclick = () => {
    const answers1Checked = answers1.find((it) => it.checked);
    const answers2Checked = answers2.find((it) => it.checked);

    const answered = () => {
      return answers1Checked.value && answers2Checked.value;
    };

    if (answered()) {

      // if no more screen, get next type
      // game2Screen(initialState);
    }
  };
};


