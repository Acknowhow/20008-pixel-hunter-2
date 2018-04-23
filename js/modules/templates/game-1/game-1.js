import introScreen from './../intro/intro';
// import game2Screen from './../game-2/game-2';
import {Hunt, answers} from '../../../data/hunt';
import game1Template from './game-1-view';

import {insertIntoContainer} from './../../module-constructor';

import getAnswer from '../../handlers/answer';
import text from './game-1-data';
import onAnswer from './game-1-handler';

let answer1Checked = ``;
let answer2Checked = ``;

export const game1Screen = (currentGame, currentQuestion) => {
  insertIntoContainer(game1Template(currentGame, text, currentQuestion));

  const screen = Hunt[currentGame.type][currentGame.screen];
  const form = document.querySelector(`.game__content`);

  const answers1 = Array.from(
      form.querySelectorAll(`input[name='question1']`));

  const answers2 = Array.from(
      form.querySelectorAll(`input[name='question2']`));

  const linkBack = document.querySelector(`.header__back`);
  linkBack.onclick = () => introScreen();

  form.onclick = () => {
    answer1Checked = () => {
      return answers1.find((it) => it.checked);
    };
    answer2Checked = () => {
      return answers2.find((it) => it.checked);
    };

    const answered = () => {
      return answer1Checked() && answer2Checked();
    };

    if (answered()) {

      currentGame = getAnswer(currentGame, answers, onAnswer(
          answer1Checked().value, answer2Checked().value).pop());
      // game2Screen(initialState);
    }
  };
};


