import {changeView} from '../../../util/contractor';
import IntroView from './intro-view';
import greetingScreen from './../greeting/greeting';
import FooterView from './../footer/footer-view';


export default () => {
  const intro = new IntroView();
  intro.onNext = greetingScreen;

  const gameContainer = changeView(intro.element);
  gameContainer.appendChild(new FooterView().element);
};
