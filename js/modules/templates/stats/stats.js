import answers, {introScreen} from './../intro/intro';
import {insertIntoContainer} from './../../module-constructor';

import {answersKey, INITIAL_ANSWERS} from '../../../data/hunt';

import statsTemplate from './stats-view';
import text from './stats-data';

let answerKey;

export const statsScreen = (currentState, answersArray) => {
  insertIntoContainer(statsTemplate(currentState, text, answersArray));

  const linkBack = document.querySelector(`.header__back`);
  linkBack.onclick = () => {
    while (answersArray.length) {
      answersArray.pop();
    }

    for (const answerItem of INITIAL_ANSWERS) {
      answersArray.push(Object.assign({}, answerItem));
    }

    answerKey = 0;
    answersKey.push(answerKey);
    introScreen();
  };
};
