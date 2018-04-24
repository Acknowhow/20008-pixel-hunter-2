import introScreen from './../intro/intro';
import {answers, Hunt, NEXT_TYPE} from '../../../data/hunt';
// import statsScreen from './../stats/stats';
import {insertIntoContainer} from './../../module-constructor';
import getQuestion from '../../handlers/question';

import game3Template from './game-3-view';
import text from './game-3-data';

import onAnswer from './../game-2/game-2-handler';
import getAnswer from '../../handlers/answer';
import {switchScreen} from '../../handlers/screen';

let answerChecked = ``;

let screen = {};
let nextGame = {};

let answer;
let selectedOption;

export const game3Screen = (currentGame, currentQuestion) => {
  insertIntoContainer(game3Template(currentGame, text, currentQuestion));

  const form = document.querySelector(`.game__content`);
  const answers1 = Array.from(
      form.querySelectorAll(`img[alt='option1']`));

  const linkBack = document.querySelector(`.header__back`);

  linkBack.onclick = () => {
    answers.forEach(() => answers.pop());

    introScreen();
  };

  // Check later on whether its needed or not
  screen = Hunt[currentGame.type][currentGame.screen];

  form.onclick = (evt) => {

    selectedOption = evt.target;
    selectedOption.classList.add(`game__option--selected`);

    console.log(selectedOption.firstElementChild);

    const answered = () => {
      return selectedOption.firstElementChild;
    };

    if (answered()) {
      nextGame = getAnswer(currentGame, answers, onAnswer(
          answerChecked().value, answers, screen).pop());

      currentGame = switchScreen(
          nextGame, Hunt, nextGame.type, answers);

      screen = Hunt[currentGame.type][currentGame.screen];

      // Later on may create separate function
      if (typeof currentGame === `string`) {

        // Here load stats screen
        console.log(currentGame);

      } else {

        answer = answers.pop();
        answers.push(answer);

        switch (answer.result) {
          case NEXT_TYPE:

            console.log(`game over`);
        }
      }
      game3Screen(currentGame, getQuestion(screen)[0]);
    }
  };
};
