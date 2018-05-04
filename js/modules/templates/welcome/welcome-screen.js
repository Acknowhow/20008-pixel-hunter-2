import IntroView from './intro-view';
import GreetingView from './intro-view';
import RulesView from './intro-view';

let welcomeState = 0;
class WelcomeScreen {
  constructor() {
    this.welcomers = new Map();

    this.intro = new IntroView();
    this.greeting = new GreetingView();
    this.rules = new RulesView();

    this.welcomers.set(0, this.intro.element);
    this.welcomers.set(1, this.greeting.element);
    this.welcomers.set(2, this.rules.element);
  }

  get element() {
    this._element = this.welcomers.get(welcomeState);
    return this._element;
  }

  onNext() {
    for (const [, welcomer] of this.welcomers) {
      welcomer.onReturn = this.onReturn.bind(this);
    }

    welcomeState++;
    return this.element;
  }

  onReturn() {
    welcomeState = 0;
    return this.element;

  }
}

export default WelcomeScreen;
