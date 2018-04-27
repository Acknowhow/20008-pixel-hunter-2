import introScreen from './../intro/intro';
import {statsScreen} from './../stats/stats';
import {answers, Hunt, NEXT_TYPE, END} from '../../../data/hunt';
import {insertIntoContainer} from './../../module-constructor';

import game3Template from './game-3-view';
import text from './game-3-data';

import onAnswer from './../game-3/game-3-handler';
import getAnswer from '../../handlers/answer';
import {switchScreen} from '../../handlers/screen';

let screen = {};
let nextGame = {};

let answer;

let selectedOption;
let selectedImage;
let selectedImageKey;

export const game3Screen = (currentGame, currentScreen) => {
  insertIntoContainer(game3Template(currentGame, text, currentScreen));

  const form = document.querySelector(`.game__content`);
  const linkBack = document.querySelector(`.header__back`);

  linkBack.onclick = () => {
    answers.forEach(() => answers.pop());

    introScreen();
  };

  screen = Hunt[currentGame.type][currentGame.screen];

  form.onclick = (evt) => {

    selectedOption = evt.target;
    selectedOption.classList.add(`game__option--selected`);

    selectedImage = selectedOption.firstElementChild.attributes[
        `data-value`].nodeValue;

    selectedImageKey = selectedOption.firstElementChild.attributes[
        `data-key`].nodeValue;

    nextGame = getAnswer(currentGame, answers, onAnswer(
        selectedImage, selectedImageKey, answers, screen).pop());

    currentGame = switchScreen(
        nextGame, Hunt, nextGame.type, answers);

    if (typeof currentGame === `string`) {

      statsScreen(currentGame, answers);

    } else {

      screen = Hunt[currentGame.type][currentGame.screen];
      answer = answers.pop();

      switch (answer.result) {
        case NEXT_TYPE:

          answer.result = END;
          answers.push(answer);

          statsScreen(currentGame, answers);
          return;

        default:
          answers.push(answer);
          game3Screen(currentGame, screen);
      }
    }
  };
};
