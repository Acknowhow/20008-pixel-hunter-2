import IntroView from './intro-view';
import GreetingView from './intro-view';
import RulesView from './intro-view';

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
    this._element = this.welcomers.get(welcomeState);

    welcomeState++;
    return this._element.element;
  }

  onNext() {
    for (const [, welcomer] of this.welcomers) {
      welcomer.onReset = this.onReset.bind(this);
    }

    console.log(this.element);
  }

  onReset() {
    welcomeState = 0;
    return this.element;

  }
}

export default WelcomeScreen;
