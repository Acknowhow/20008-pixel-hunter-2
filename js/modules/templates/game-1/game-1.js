import answers, {introScreen} from './../intro/intro';
import {game2Screen} from './../game-2/game-2';
// import {statsScreen} from '../stats/stats';
import {Hunt, answersKey, NEXT_TYPE, INITIAL_ANSWERS} from '../../../data/hunt';
import HeaderView from '../header/header-view';
import Game1View from './game-1-view';
import {changeView, updateView} from '../../../util/contractor';

import FooterView from '../footer/footer-view';
import {createElement} from '../../../util/contractor';

import getQuestion from '../../handlers/question';
import getAnswer from '../../handlers/answer';
import {switchScreen} from '../../handlers/screen';

import getAnswerResult from './game-1-handler';

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

export const game1Screen = (
    currentGame, currentQuestion, currentAnswers) => {

  const updateGame = (state, question, answersSet) => {
    const header = new HeaderView(state);
    const game = new Game1View(question, answersSet);

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
    game.onAnswer = (answer1, answer2) => {

      nextGame = getAnswer(currentGame, answerKey, getAnswerResult(
          answer1, answer2,
          answers, answerKey, screen));

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

            changeView(game2Screen(currentGame, getQuestion(screen), answers));
            return;

          default:

            answerKey++;
            answersKey.push(answerKey);
            game1Screen(currentGame, getQuestion(screen), answers);
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

