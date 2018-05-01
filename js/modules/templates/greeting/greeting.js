import {changeView} from '../../../util/contractor';
import GreetingView from './greeting-view';
import FooterView from '../footer/footer-view';

import rulesScreen from './../rules/rules';

export default () => {
  const greeting = new GreetingView();

  greeting.onNext = () => {
    rulesScreen();
  };

  const gameContainer = changeView(greeting.element);
  gameContainer.appendChild(new FooterView().element);

  return gameContainer;
};
