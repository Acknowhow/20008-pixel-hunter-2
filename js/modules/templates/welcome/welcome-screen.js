import IntroView from './intro-view';
import GreetingView from './greeting-view';
import RulesView from './rules-view';

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

      return this._element.element;
    }
    return this.proceed();
  }

  onNext() {
    for (const [, welcomer] of this.welcomers) {
      welcomer.onReset = this.onReset.bind(this);
    }

    return changeView(this.element);
  }

  onReset() {
    welcomeState = 0;
    return changeView(this.element);

  }

  proceed() {
  // Game starts here
  }
}

export default WelcomeScreen;
