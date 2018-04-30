import {currentGame, Hunt} from '../../../data/hunt';
// import IntroView from './../intro/intro-view';
import {changeView} from '../../../util/contractor';

import getQuestion from '../../handlers/question';
import {game1Screen} from './../game-1/game-1';
import RulesView from './rules-view';
import FooterView from '../footer/footer-view';
import answers, {introScreen} from '../intro/intro';

const screen = Hunt[currentGame.type][currentGame.screen];

export default () => {
  const rules = new RulesView();
  const question = getQuestion(screen);

  console.log(question);

  rules.onReset = () => {
    introScreen();
  };

  rules.onNext = () => {
    game1Screen(currentGame, question, answers);
  };

  const gameContainer = changeView(rules.element);
  gameContainer.appendChild(new FooterView().element);

};
