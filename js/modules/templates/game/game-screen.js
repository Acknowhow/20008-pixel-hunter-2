import Game1View from './../game-1/game-1-view';
import Game2View from './../game-2/game-2-view';
import Game3View from './../game-3/game-3-view';

import HeaderView from './../header/header-view';
import FooterView from '../footer/footer-view';

import {extractNumeric} from '../../handlers/extract';
import {getAnswerResult} from '../../handlers/answer-result';
import getAnswer from '../../handlers/answer';

import Application from '../../../application';

class GameScreen {
  constructor(model) {
    this.model = model;
    this.state = this.model.state;

    this.screen = this.model.getCurrentScreen();


    this.answers = this.model.getAnswers();
    this.answerKey = this.model.getAnswerKey();

    this.game = new Map();

    this.header = new HeaderView(this.state);

    this.game.set(0, new Game1View(this.screen, this.answers));
    this.game.set(1, new Game2View(this.screen, this.answers));
    this.game.set(2, new Game3View(this.screen, this.answers));


    this.content = this.game.get(extractNumeric(
        this.model.state.type));

    this.root = document.createElement(`div`);
    this.root.appendChild(this.header.element);
    this.root.appendChild(this.content.element);
    this.root.appendChild(new FooterView().element);

  }

  get element() {
    return this.root;
  }

  getAnswer(answerResult) {

    const nextState = getAnswer(this.state, this.answerKey, answerResult);

    console.log(nextState);
  }

  getAnswerResult(answer) {
    const answerResult = getAnswerResult([
      answer, this.answers, this.answerKey, this.screen]);

    this.getAnswer(answerResult);
  }

  updateHeader() {
    const header = new HeaderView(this.state);
    this.root.replaceChild(header.element, this.header.element);

    this.header = header;
  }

  changeScreen() {
    this.updateHeader();
    this.screen = this.model.getCurrentScreen();

    const content = this.game.get(extractNumeric(
        this.model.state.type
    ));

    content.onAnswer = this.getAnswerResult.bind(this);

    this.header.onReset = this.onReset.bind(this);
    // const content = this.game.get(extractNumeric(
    //     this.model.state.type)).element;
    //
    // content.onAnswer = this.content.bind(this);

  }

  startGame() {
    this.changeScreen();

  }

  onReset() {
    // Must reset questions
    Application.showWelcome();
  }

}

export default GameScreen;
