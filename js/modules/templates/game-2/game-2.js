import answers, {introScreen} from './../intro/intro';
// import {game3Screen} from './../game-3/game-3';
// import {statsScreen} from '../stats/stats';
import {Hunt, answersKey, NEXT_TYPE, INITIAL_ANSWERS} from '../../../data/hunt';

import getQuestion from '../../handlers/question';
import getAnswer from '../../handlers/answer';
import {switchScreen} from '../../handlers/screen';

import getAnswerResult from './game-2-handler';

import {createElement, updateView} from "../../../util/contractor";
import FooterView from '../footer/footer-view';
import Game2View from '../game-2/game-2-view';
import HeaderView from '../header/header-view';

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

export const game2Screen = (
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
    game.onAnswer = (answer1) => {

      nextGame = getAnswer(currentGame, answerKey, getAnswerResult(
          answer1, answers, answerKey, screen));

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

            // game3Screen(currentGame, screen, answers);

            return;

          default:

            answerKey++;
            answersKey.push(answerKey);

            game2Screen(currentGame, getQuestion(screen), answers);
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
