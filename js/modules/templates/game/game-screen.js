import Game1View from './../game-1/game-1-view';
import Game2View from './../game-2/game-2-view';
import Game3View from './../game-3/game-3-view';

import HeaderView from './../header/header-view';

import {extractNumeric} from '../../handlers/extractNumeric';
import FooterView from '../footer/footer-view';

class GameScreen {
  constructor(model) {
    this.model = model;

    this.screen = this.model.getCurrentScreen();

    this.game = new Map();

    this.header = new HeaderView(this.model.state);


    this.game.set(0, new Game1View());
    this.game.set(1, new Game2View());
    this.game.set(2, new Game2View());

    // Gets corresponding view
    this.content = this.game.get(extractNumeric(
        this.model.state.type));

    console.log(this.content);
    // this.root = document.createElement(`div`);
    // this.root.appendChild(this.header.element);
    // this.root.appendChild(this.content.element);
    // this.root.appendChild(new FooterView().element);

  }

  get element() {
    return this.root;
  }

  updateHeader() {
    const header = new HeaderView(this.model.state);
    this.root.replaceChild(header.element, this.header.element);

    this.header = header;
  }

  changeScreen() {
    this.updateHeader();

    // const content = this.game.get(extractNumeric(
    //     this.model.state.type)).element;
    //
    // content.onAnswer = this.content.bind(this);

  }

  startGame() {
    this.changeScreen();

  }
}

export default GameScreen;
