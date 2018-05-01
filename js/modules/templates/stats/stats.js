import answers, {introScreen} from './../intro/intro';

import {answersKey, INITIAL_ANSWERS} from '../../../data/hunt';
import {changeView} from '../../../util/contractor';

import StatsView from './stats-view';
import FooterView from '../footer/footer-view';

let answerKey;

export const statsScreen = (currentState, answersArray) => {

  const game = new StatsView(currentState, answersArray);

  answerKey = answersKey.pop();

  game.onReset = () => {

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

  const gameContainer = changeView(game.element);
  gameContainer.appendChild(new FooterView().element);

};
