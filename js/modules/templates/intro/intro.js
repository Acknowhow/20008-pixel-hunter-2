import {changeView} from '../../../util/contractor';
import IntroView from './intro-view';
// import greetingScreen from './../greeting/greeting';
import FooterView from './../footer/footer-view';


export const introScreen = () => {
  const intro = new IntroView();
  intro.next = () => {
    console.log(`Hello`);
  };

  const gameContainer = changeView(intro.element);
  gameContainer.appendChild(new FooterView().element);
};

