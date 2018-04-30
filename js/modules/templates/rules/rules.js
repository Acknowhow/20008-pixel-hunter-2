// import {currentGame} from '../../../data/hunt';
import IntroView from './../intro/intro-view';
import {changeView} from '../../../util/contractor';

// import getQuestion from '../../handlers/question';
// import {game1Screen} from './../game-1/game-1';
import RulesView from './rules-view';
import FooterView from '../footer/footer-view';
import greetingScreen from "../greeting/greeting";


export default () => {
  const rules = new RulesView();

  rules.onReset = () => {
    const intro = new IntroView();
    intro.onNext = greetingScreen;

    const gameContainer = changeView(intro.element);
    gameContainer.appendChild(new FooterView().element);
  };

  const gameContainer = changeView(rules.element);
  gameContainer.appendChild(new FooterView().element);


  // const question = getQuestion(screen);
  // const next = () => {
  //
  //   game1Screen(currentGame, question, answers);
  // };
};
