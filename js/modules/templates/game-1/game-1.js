import introScreen from './../intro/intro';
import {game2Screen} from './../game-2/game-2';
import {statsScreen} from '../stats/stats';
import {Hunt, answers, NEXT_TYPE} from '../../../data/hunt';
import text from './game-1-data';

import game1Template from './game-1-view';
import {insertIntoContainer} from './../../module-constructor';

import getQuestion from '../../handlers/question';
import getAnswer from '../../handlers/answer';
import {switchScreen} from '../../handlers/screen';

import onAnswer from './game-1-handler';

let answer1Checked = ``;
let answer2Checked = ``;

let screen = {};
let nextGame = {};

let answer;

export const game1Screen = (currentGame, currentQuestion, currentAnswers) => {
  insertIntoContainer(game1Template(currentGame, text, currentQuestion, currentAnswers));

  const form = document.querySelector(`.game__content`);

  const answers1 = Array.from(
      form.querySelectorAll(`input[name='question1']`));

  const answers2 = Array.from(
      form.querySelectorAll(`input[name='question2']`));

  const linkBack = document.querySelector(`.header__back`);

  linkBack.onclick = () => {
    answers.forEach(() => answers.pop());

    introScreen();
  };
  screen = Hunt[currentGame.type][currentGame.screen];

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

      nextGame = getAnswer(currentGame, answers, onAnswer(
          answer1Checked().value, answer2Checked().value,
          answers, screen).pop());

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

            game2Screen(currentGame, getQuestion(screen), answers);
            return;

          default:
            game1Screen(currentGame, getQuestion(screen), answers);
            return;
        }
      }
    }
  };
};


