import answers, {introScreen} from './../intro/intro';
import {statsScreen} from './../stats/stats';
import {Hunt, answersKey, NEXT_TYPE, INITIAL_ANSWERS} from '../../../data/hunt';
import {insertIntoContainer} from './../../module-constructor';

import game3Template from './game-3-view';

import onAnswer from './../game-3/game-3-handler';
import getAnswer from '../../handlers/answer';
import {switchScreen} from '../../handlers/screen';

let screen = {};
let nextGame = {};

let answer;
let answerKey;

let selectedOption;
let selectedImage;
let selectedImageKey;

export const game3Screen = (
    currentGame, currentQuestion, currentAnswers) => {
  insertIntoContainer(
      game3Template(currentGame, currentQuestion, currentAnswers));

  answerKey = answersKey.pop();

  const form = document.querySelector(`.game__content`);
  const linkBack = document.querySelector(`.header__back`);

  linkBack.onclick = () => {
    while (answers.length) {
      answers.pop();
    }

    for (const answerItem of INITIAL_ANSWERS) {
      answers.push(Object.assign({}, answerItem));
    }

    answerKey = 0;
    answersKey.push(answerKey);
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

    nextGame = getAnswer(currentGame, answerKey, onAnswer(
        selectedImage, selectedImageKey, answerKey, answers,
        screen));

    currentGame = switchScreen(
        nextGame, Hunt, nextGame.type, answerKey, answers);

    if (typeof currentGame === `string`) {
      statsScreen(currentGame, answers);

    } else {

      screen = Hunt[currentGame.type][currentGame.screen];
      answer = answers[answerKey];

      switch (answer.result) {
        case NEXT_TYPE:

          answerKey++;
          answersKey.push(answerKey);

          statsScreen(currentGame, answers);
          return;

        default:

          answerKey++;
          answersKey.push(answerKey);
          game3Screen(currentGame, screen, answers);
          return;
      }
    }
  };
};
