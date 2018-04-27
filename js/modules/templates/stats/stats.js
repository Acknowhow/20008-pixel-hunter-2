import introScreen from './../intro/intro';
import {insertIntoContainer} from './../../module-constructor';

import statsTemplate from './stats-view';
import text from './stats-data';


export const statsScreen = (currentState, answersArray) => {
  insertIntoContainer(statsTemplate(currentState, text, answersArray));

  const linkBack = document.querySelector(`.header__back`);
  const resetGame = () => {
    linkBack.removeEventListener(`click`, linkBack);

    answersArray.forEach(() => answersArray.pop());
    introScreen();
  };

  linkBack.addEventListener(`click`, resetGame);
};
