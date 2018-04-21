import {initialState} from '../../../data/hunt';
import introScreen from './../intro/intro';
import statsScreen from './../stats/stats';
import {insertIntoContainer} from './../../module-constructor';

import game3Template from './game-3-view';
import text from './game-3-data';

export default (currentState) => {

  insertIntoContainer(game3Template(currentState, text));
  const form = document.querySelector(`.game__content`);

  const options = Array.from(
      form.querySelectorAll(`.game__option`));
  const linkBack = document.querySelector(`.header__back`);

  const resetGame = () => {
    linkBack.removeEventListener(`click`, linkBack);
    introScreen();
  };

  const check = () => {
    options.forEach((option) => {
      option.removeEventListener(`click`, check);
    });

    statsScreen(initialState);
  };

  options.forEach((option) => {
    option.addEventListener(`click`, check);
  });

  linkBack.addEventListener(`click`, resetGame);
};
