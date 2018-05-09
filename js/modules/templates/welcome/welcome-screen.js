import IntroView from './intro-view';
import GreetingView from './greeting-view';
import RulesView from './rules-view';
import FooterView from './../footer/footer-view';

import {changeView} from '../../../util/contractor';

let welcomeState = 0;
class WelcomeScreen {
  constructor() {
    this.welcomers = new Map();

    this.intro = new IntroView();
    this.greeting = new GreetingView();
    this.rules = new RulesView();

    this.welcomers.set(0, this.intro);
    this.welcomers.set(1, this.greeting);
    this.welcomers.set(2, this.rules);

    for (const [, welcomer] of this.welcomers) {
      welcomer.onNext = this.onNext.bind(this);
    }
  }

  get element() {
    if (welcomeState !== 3) {
      this._element = this.welcomers.get(welcomeState);
      welcomeState++;
    }
    if (welcomeState === 3) {
      welcomeState = 2;
    }
    return this._element.element;
  }

  onNext() {
    for (const [, welcomer] of this.welcomers) {
      welcomer.onReset = this.onReset.bind(this);
    }

    return changeView(this.element).appendChild(
        new FooterView().element);
  }

  onReset() {
    welcomeState = 0;

    return changeView(this.element).appendChild(
        new FooterView().element);
  }
}

export default WelcomeScreen;
