import answers, {introScreen} from './../intro/intro';
// import {statsScreen} from './../stats/stats';
import {Hunt, answersKey, NEXT_TYPE, INITIAL_ANSWERS} from '../../../data/hunt';

import getAnswer from '../../handlers/answer';
import {switchScreen} from '../../handlers/screen';

import getAnswerResult from './../game-3/game-3-handler';

import {createElement, updateView} from '../../../util/contractor';
import HeaderView from '../header/header-view';
import Game3View from '../game-3/game-3-view';
import FooterView from '../footer/footer-view';

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
    const game = new Game3View(question, answersSet);

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
    game.onAnswer = (image, imageKey) => {

      nextGame = getAnswer(currentGame, answerKey, getAnswerResult(
          image, imageKey, answerKey, answers,
          screen));

      currentGame = switchScreen(
          nextGame, Hunt, nextGame.type, answerKey, answers);

      if (typeof currentGame === `string`) {
        // statsScreen(currentGame, answers);

      } else {

        screen = Hunt[currentGame.type][currentGame.screen];
        answer = answers[answerKey];

        switch (answer.result) {
          case NEXT_TYPE:

            answerKey++;
            answersKey.push(answerKey);

            // statsScreen(currentGame, answers);
            return;

          default:

            answerKey++;
            answersKey.push(answerKey);
            game3Screen(currentGame, screen, answers);
            return;
        }
      }
    };
    updateView(headerContainer, header);
    updateView(screenContainer, game);
  };

  updateGame(currentGame, currentQuestion, currentAnswers);
  return gameContainerElement;
};
