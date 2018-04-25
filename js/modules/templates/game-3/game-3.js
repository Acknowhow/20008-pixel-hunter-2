import introScreen from './../intro/intro';
import {statsScreen} from './../stats/stats';
import {answers, Hunt, NEXT_TYPE, END} from '../../../data/hunt';
// import statsScreen from './../stats/stats';
import {insertIntoContainer} from './../../module-constructor';

import game3Template from './game-3-view';
import text from './game-3-data';

import onAnswer from './../game-2/game-2-handler';
import getAnswer from '../../handlers/answer';
import {switchScreen, getStringNumber} from '../../handlers/screen';

let screen = {};
let nextGame = {};

let answer;
let answerTypeArray;

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

  answerTypeArray = answers[
      getStringNumber(currentGame.type)][currentGame.type];

  screen = Hunt[currentGame.type][currentGame.screen];

  form.onclick = (evt) => {

    selectedOption = evt.target;
    selectedOption.classList.add(`game__option--selected`);

    selectedImage = selectedOption.firstElementChild.attributes[
        `data-value`].nodeValue;

    nextGame = getAnswer(currentGame, answerTypeArray, onAnswer(
        selectedImage, answerTypeArray, screen).pop());

    currentGame = switchScreen(
        nextGame, Hunt, nextGame.type, answerTypeArray);

    if (typeof currentGame === `string`) {

      statsScreen(currentGame, answers);
      return;
    } else {

      screen = Hunt[currentGame.type][currentGame.screen];
      answer = answerTypeArray.pop();

      switch (answer.result) {
        case NEXT_TYPE:

          answer.result = END;
          answerTypeArray.push(answer);

          statsScreen(currentGame, answers);
          return;

        default:
          answerTypeArray.push(answer);
      }
    }

    game3Screen(currentGame, screen);
  };
};
