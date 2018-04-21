import introScreen from './../intro/intro';
import {initialState} from '../../../data/hunt';
// import {makeGame3Template} from './../game-3/game-3';
import game2Template from './game-2-view';
import {insertIntoContainer} from './../../module-constructor';

import text from './game-2-data';

export default () => {
  insertIntoContainer(game2Template(initialState, text));
  const form = document.querySelector(`.game__content`);
  const linkBack = document.querySelector(`.header__back`);

  const formOption = form.children[0];
  const answer1 = formOption.querySelector(
      `.game__answer--photo`).children[0];

  const answer2 = formOption.querySelector(
      `.game__answer--paint`).children[0];

  const answersArr = [answer1, answer2];

  const resetGame = () => {
    linkBack.removeEventListener(`click`, linkBack);
    introScreen();
  };

  const checkArr = (input) => {
    return input.checked === true;
  };

  const check = () => {
    if (answersArr.some(checkArr)) {
      formOption.removeEventListener(`click`, check);

      // setTimeout(() => {
      //   insertIntoContainer(makeGame3Template());
      // }, 0);
    }
  };

  formOption.addEventListener(`click`, check);
  linkBack.addEventListener(`click`, resetGame);
};


