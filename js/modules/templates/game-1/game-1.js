// import answers, {introScreen} from './../intro/intro';
// import {game2Screen} from './../game-2/game-2';
// import {statsScreen} from '../stats/stats';
// import {Hunt, answersKey, NEXT_TYPE, INITIAL_ANSWERS} from '../../../data/hunt';

import {centralContainer} from '../../handlers/screen';

import HeaderView from '../header/header-view';
import Game1View from './game-1-view';
import {changeView} from '../../../util/contractor';

import FooterView from '../footer/footer-view';

import {createElement} from "../../../util/contractor";

// import getQuestion from '../../handlers/question';
// import getAnswer from '../../handlers/answer';
// import {switchScreen} from '../../handlers/screen';

// import onAnswer from './game-1-handler';
//
// let answer1Checked = ``;
// let answer2Checked = ``;
//
// let screen = {};
// let nextGame = {};
//
// let answer;
// let answerKey;

export const game1Screen = (
    currentGame, currentQuestion, currentAnswers) => {

  const headerContainer = createElement(``, `header`, [`header`]);
  const gameContainer = createElement(``, `div`, [`game`]);


  // const header = changeView(new HeaderView(currentGame));
  // const game = new Game1View(currentGame, currentQuestion, currentAnswers);

  centralContainer.appendChild(headerContainer);
  centralContainer.appendChild(gameContainer);



  // answerKey = answersKey.pop();


  // linkBack.onclick = () => {
  //
  //   while (answers.length) {
  //     answers.pop();
  //   }
  //
  //   for (const answerItem of INITIAL_ANSWERS) {
  //     answers.push(Object.assign({}, answerItem));
  //   }
  //
  //   answerKey = 0;
  //   answersKey.push(answerKey);
  //   introScreen();
  // };
  // screen = Hunt[currentGame.type][currentGame.screen];

  // form.onclick = () => {
  // answer1Checked = () => {
  //   return answers1.find((it) => it.checked);
  // };
  // answer2Checked = () => {
  //   return answers2.find((it) => it.checked);
  // };
  //
  // const answered = () => {
  //   return answer1Checked() && answer2Checked();
  // };
  //
  // if (answered()) {
  //
  //   nextGame = getAnswer(currentGame, answerKey, onAnswer(
  //
  //       answer1Checked().value, answer2Checked().value,
  //       answers, answerKey, screen));
  //
  //   currentGame = switchScreen(
  //       nextGame, Hunt, nextGame.type, answerKey, answers);
  //
  //   if (typeof currentGame === `string`) {
  //     statsScreen(currentGame, answers);
  //
  //   } else {
  //     screen = Hunt[currentGame.type][currentGame.screen];
  //     answer = answers[answerKey];
  //
  //     switch (answer.result) {
  //       case NEXT_TYPE:
  //
  //         answerKey++;
  //         answersKey.push(answerKey);
  //
  //         game2Screen(currentGame, getQuestion(screen), answers);
  //         return;
  //
  //       default:
  //
  //         answerKey++;
  //         answersKey.push(answerKey);
  //         game1Screen(currentGame, getQuestion(screen), answers);
  //         return;
  //     }
  //   }
  // }
  // };
};


