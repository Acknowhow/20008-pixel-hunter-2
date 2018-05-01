import answers, {introScreen} from './../intro/intro';
import {statsScreen} from './../stats/stats';
import {Hunt, answersKey, NEXT_TYPE, INITIAL_ANSWERS} from '../../../data/hunt';

import game3Template from './game-3-view';

import onAnswer from './../game-3/game-3-handler';
import getAnswer from '../../handlers/answer';
import {switchScreen} from '../../handlers/screen';
import {createElement} from "../../../util/contractor";
import FooterView from "../footer/footer-view";
import HeaderView from "../header/header-view";
import Game2View from "../game-2/game-2-view";

const gameContainerElement = createElement();
const headerContainer = createElement();
const screenContainer = createElement();

gameContainerElement.appendChild(headerContainer);
gameContainerElement.appendChild(screenContainer);
gameContainerElement.appendChild(new FooterView().element);

let screen = {};
let nextGame = {};

let answer;
let answerKey;

export const game3Screen = (
    currentGame, currentQuestion, currentAnswers) => {
  const updateGame = (state, question, answersSet) => {
    const header = new HeaderView(state);
    const game = new Game2View(question, answersSet);

    answerKey = answersKey.pop();


    header.onReset = () => {

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

    game.onAnswer(answer1, answer2) => {

      nextGame = getAnswer(currentGame, answerKey, onAnswer(
        answer1, answer2, answerKey, answers,
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

    }


  };
};
