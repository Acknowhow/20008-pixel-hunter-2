import {changeView} from '../../../util/contractor';
import GreetingView from './greeting-view';
import FooterView from '../footer/footer-view';


export default () => {
  const greeting = new GreetingView();

  const gameContainer = changeView(greeting.element);
  gameContainer.appendChild(new FooterView().element);

  return gameContainer;
};


