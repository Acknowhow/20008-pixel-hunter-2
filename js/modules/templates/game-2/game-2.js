import answers, {introScreen} from './../intro/intro';
import {game3Screen} from './../game-3/game-3';
import {statsScreen} from '../stats/stats';
import {Hunt, answersKey, NEXT_TYPE, INITIAL_ANSWERS} from '../../../data/hunt';
import text from './game-2-data';

import game2Template from './game-2-view';
import {insertIntoContainer} from './../../module-constructor';

import getQuestion from '../../handlers/question';
import getAnswer from '../../handlers/answer';
import {switchScreen} from '../../handlers/screen';

import onAnswer from './game-2-handler';

let answerChecked = ``;

let screen = {};
let nextGame = {};

let answer;
let answerKey;

export const game2Screen = (
    currentGame, currentQuestion, currentAnswers) => {
  insertIntoContainer(
      game2Template(currentGame, text, currentQuestion, currentAnswers));

  answerKey = answersKey.pop();

  const form = document.querySelector(`.game__content`);

  const answers1 = Array.from(
      form.querySelectorAll(`input[name='question1']`));

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

  form.onclick = () => {
    answerChecked = () => {
      return answers1.find((it) => it.checked);
    };

    const answered = () => {
      return answerChecked();
    };

    if (answered()) {

      nextGame = getAnswer(currentGame, answerKey, onAnswer(
          answerChecked().value, answers, answerKey, screen));

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

            console.log(screen.option1);
            game3Screen(currentGame, screen, answers);

            return;

          default:

            answerKey++;
            answersKey.push(answerKey);

            game2Screen(currentGame, getQuestion(screen), answers);
            return;
        }
      }
    }
  };
};
