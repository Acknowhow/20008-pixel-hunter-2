import Game1View from './game-1-view';
import Game2View from './game-2-view';
import Game3View from './game-3-view';
import StatsView from './stats-view';

import HeaderView from './../header/header-view';
import FooterView from '../footer/footer-view';

import {isCorrectAnswer} from '../../handlers/answer-correct';

import {extractNumeric} from '../../../data/hunt';
import {NEXT_SCREEN, END} from '../../../data/hunt-data';

import Application from '../../../application';

let makeView;

class GameScreen {
  constructor(model) {
    this.model = model;
    this.makeView = makeView;

    this.screen = this.model.getCurrentScreen();
    this.answers = this.model.getAnswers();

    this.answerKey = this.model.getAnswerKey();
    this.answer = ``;

    this.game = new WeakMap();
    this.header = new HeaderView(this.model.state);

    this.keys = [{key: 0}, {key: 1}, {key: 2}];

    this.game.set(this.keys[0], makeView = (
        screenParam, answersParam) => new Game1View(
        screenParam, answersParam));

    this.game.set(this.keys[1], makeView = (
        screenParam, answersParam) => new Game2View(
        screenParam, answersParam));

    this.game.set(this.keys[2], makeView = (
        screenParam, answersParam) => new Game3View(
        screenParam, answersParam));


    // gets WeakMap element with current type number,
    // then creates new View with function call
    this.content = this.game.get(this.keys[extractNumeric(
        this.model.state.type)])(this.screen, this.answers);

    this.root = document.createElement(`div`);
    this.root.appendChild(this.header.element);
    this.root.appendChild(this.content.element);
    this.root.appendChild(new FooterView().element);
  }

  get element() {
    return this.root;
  }

  getNextScreen(answerResult) {
    switch (answerResult) {
      case END:
        this.gameOver();
        break;

      default:
        if (this.model.hasNextScreen()) {
          this.screen = this.model.getNextScreen();
          this.model.nextAnswerKey();

          this.startGame();
        } else if (!this.model.hasNextScreen() && this.model.hasNextType()) {
          this.screen = this.model.getNextType();

          this.model.nextAnswerKey();

          this.startGame();
        } else if (!this.model.hasNextScreen() && !this.model.hasNextType()) {
          this.gameOver();
        }

    }
  }

  answerResult(answers, answersKey) {
    this.stopGame();

    this.answer = answers[answersKey];
    this.answer.time = this.model.state.time;

    switch (this.answer.correct) {

      case `false`:
        this.model.assignWrong();

        if (this.model.takeLife() < 0) {

          this.answer.result = END;
        } else {

          this.answer.result = NEXT_SCREEN;
        }
        return this.answer.result;

      default:
        this.model.assignCorrect();
        this.answer.result = NEXT_SCREEN;

        return this.answer.result;
    }
  }

  isCorrectAnswer(answer) {
    this.answer = answer;

    isCorrectAnswer(
        [answer, this.answers, this.answerKey, this.screen]
    );
    this.getNextScreen(
        this.answerResult(this.answers, this.answerKey));
  }

  updateHeader() {
    const header = new HeaderView(this.model.state, this._interval);
    header.onReset = this.onReset.bind(this);

    this.root.replaceChild(header.element, this.header.element);
    this.header = header;
  }

  removeHeader() {
    this.root.removeChild(this.header.element);
  }

  changeScreen() {
    this.updateHeader();

    this.screen = this.model.getCurrentScreen();
    this.answers = this.model.getAnswers();
    this.answerKey = this.model.getAnswerKey();

    const content = this.game.get(this.keys[extractNumeric(
        this.model.state.type)])(this.screen, this.answers);

    this.header.onReset = this.onReset.bind(this);

    content.onAnswer = this.isCorrectAnswer.bind(this);
    this.changeContentView(content);
  }

  gameOver() {

    this.removeHeader();
    this.answers = this.model.getAnswers();
    this.playerName = this.model.getPlayerName();

    const statsContent = new StatsView(
        this.model.state, this.answers, this.playerName);
    this.changeContentView(statsContent);
  }

  changeContentView(view) {
    this.root.replaceChild(view.element, this.content.element);
    this.content = view;
  }

  startGame() {
    this.model.resetTick();
    this.changeScreen();

    this._interval = window.setInterval(() => {

      this.model.tick();
      this.updateHeader();
    }, 1000);

  }

  stopGame() {
    window.clearInterval(this._interval);
  }

  onReset() {
    this.stopGame();

    this.model.restart();
    Application.showWelcome();
  }

  onRestart() {

    this.model.restart();
    Application.showWelcome();
  }

}

export default GameScreen;
