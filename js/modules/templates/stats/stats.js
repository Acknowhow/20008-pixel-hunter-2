import introScreen from './../intro/intro';
import {insertIntoContainer} from './../../module-constructor';

import statsTemplate from './stats-view';
import text from './stats-data';

export default (currentState) => {
  insertIntoContainer(statsTemplate(currentState, text));

  const linkBack = document.querySelector(`.header__back`);
  const resetGame = () => {
    linkBack.removeEventListener(`click`, linkBack);

    introScreen();
  };

  linkBack.addEventListener(`click`, resetGame);
};
