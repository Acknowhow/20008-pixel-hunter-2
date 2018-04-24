import introScreen from './../intro/intro';
import {answers, INITIAL_GAME} from '../../../data/hunt';
import statsScreen from './../stats/stats';
import {insertIntoContainer} from './../../module-constructor';

import game3Template from './game-3-view';
import text from './game-3-data';

export const game3Screen = (currentGame, currentQuestion) => {
  insertIntoContainer(game3Template(currentGame, text, currentQuestion));

  const form = document.querySelector(`.game__content`);

  const options = Array.from(
      form.querySelectorAll(`.game__option`));

  const linkBack = document.querySelector(`.header__back`);
  linkBack.onclick = () => {
    answers.forEach(() => answers.pop());

    introScreen();
  };

  const resetGame = () => {
    linkBack.removeEventListener(`click`, linkBack);
    introScreen();
  };

  const check = () => {
    options.forEach((option) => {
      option.removeEventListener(`click`, check);
    });

    statsScreen(INITIAL_GAME);
  };

  options.forEach((option) => {
    option.addEventListener(`click`, check);
  });

  linkBack.addEventListener(`click`, resetGame);
};
