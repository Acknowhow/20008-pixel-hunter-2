import {INITIAL_ANSWERS} from "../../../data/hunt";

import {changeView} from '../../../util/contractor';
import IntroView from './intro-view';
import greetingScreen from './../greeting/greeting';
import FooterView from './../footer/footer-view';

const answers = [];

for (const answer of INITIAL_ANSWERS) {
  answers.push(Object.assign({}, answer));
}

export const introScreen = () => {
  const intro = new IntroView();
  intro.onNext = greetingScreen;

  const gameContainer = changeView(intro.element);
  gameContainer.appendChild(new FooterView().element);
};

export default answers;
