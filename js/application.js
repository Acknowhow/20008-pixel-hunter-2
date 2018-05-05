import WelcomeScreen from './modules/templates/welcome/welcome-screen';

import HuntModel from './data/hunt-model';
import GameScreen from './modules/templates/game/game-screen';

const central = document.querySelector(`.central`);

const changeView = (element) => {
  central.innerHTML = ``;
  central.appendChild(element);
};

export default class Application {

  static showWelcome() {
    const welcome = new WelcomeScreen();
    changeView(welcome.element);
  }

  static showScreen(userName) {
    const model = new HuntModel(userName);
    const gameScreen = new GameScreen(model);
    changeView(gameScreen.element);
    gameScreen.startGame();
  }
}
