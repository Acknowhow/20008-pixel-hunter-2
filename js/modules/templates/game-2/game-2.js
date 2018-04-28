import answers, {introScreen} from './../intro/intro';
import {game3Screen} from './../game-3/game-3';
import {Hunt, NEXT_TYPE} from '../../../data/hunt';
import text from './game-2-data';

import game2Template from './game-2-view';
import {insertIntoContainer} from './../../module-constructor';

import getQuestion from '../../handlers/question';
import getAnswer from '../../handlers/answer';
import {switchScreen} from '../../handlers/screen';

import onAnswer from './game-2-handler';
import {statsScreen} from "../stats/stats";

let answerChecked = ``;

let screen = {};
let nextGame = {};

let answer;

export const game2Screen = (currentGame, currentQuestion) => {
  insertIntoContainer(game2Template(currentGame, text, currentQuestion));

  const form = document.querySelector(`.game__content`);
  const answers1 = Array.from(
      form.querySelectorAll(`input[name='question1']`));

  const linkBack = document.querySelector(`.header__back`);

  linkBack.onclick = () => {
    answers.forEach(() => answers.pop());

    introScreen();
  };

  screen = Hunt[currentGame.type][currentGame.screen];

  form.onclick = () => {
    answerChecked = () => {
      return answers1.find((it) => it.checked);
    };

    if (answerChecked()) {

      nextGame = getAnswer(currentGame, answers, onAnswer(
          answerChecked().value, answers, screen).pop());

      currentGame = switchScreen(
          nextGame, Hunt, nextGame.type, answers);

      if (typeof currentGame === `string`) {

        statsScreen(currentGame, answers);

      } else {
        screen = Hunt[currentGame.type][currentGame.screen];

        answer = answers.pop();
        answers.push(answer);

        switch (answer.result) {
          case NEXT_TYPE:

            game3Screen(currentGame, screen);
            return;

          default:
            game2Screen(currentGame, getQuestion(screen));
            return;
        }
      }
    }
  };
};
