import introScreen from './../intro/intro';
import {statsScreen} from './../stats/stats';
import {answers, Hunt, NEXT_TYPE} from '../../../data/hunt';
// import statsScreen from './../stats/stats';
import {insertIntoContainer} from './../../module-constructor';

import game3Template from './game-3-view';
import text from './game-3-data';

import onAnswer from './../game-2/game-2-handler';
import getAnswer from '../../handlers/answer';
import {switchScreen} from '../../handlers/screen';

let screen = {};
let nextGame = {};

let answer;
let selectedOption;

let selectedImage;

export const game3Screen = (currentGame, currentScreen) => {
  insertIntoContainer(game3Template(currentGame, text, currentScreen));

  const form = document.querySelector(`.game__content`);
  const linkBack = document.querySelector(`.header__back`);

  linkBack.onclick = () => {
    answers.forEach(() => answers.pop());

    introScreen();
  };

  // Check later on whether its needed or not
  screen = Hunt[currentGame.type][currentGame.screen];

  form.onclick = (evt) => {

    selectedOption = evt.target;
    selectedOption.classList.add(`game__option--selected`);

    selectedImage = selectedOption.firstElementChild.attributes[
        `data-value`].nodeValue;

    nextGame = getAnswer(currentGame, answers, onAnswer(
        selectedImage, answers, screen).pop());

    currentGame = switchScreen(
        nextGame, Hunt, nextGame.type, answers);

    if (typeof currentGame === `string`) {

      statsScreen(currentGame, answers);
      return;
    } else {

      answer = answers.pop();
      answers.push(answer);

      switch (answer.result) {
        case NEXT_TYPE:

          statsScreen(currentGame);
          return;
      }
    }
    screen = Hunt[currentGame.type][currentGame.screen];
    game3Screen(currentGame, screen);
  };
};
