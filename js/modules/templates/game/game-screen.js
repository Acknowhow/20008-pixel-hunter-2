import Game1View from './../game-1/game-1-view';
import Game2View from './../game-2/game-2-view';
import Game3View from './../game-3/game-3-view';
// import StatsView from './../stats/stats-view';

import HeaderView from './../header/header-view';
import FooterView from '../footer/footer-view';

import {extractNumeric} from '../../handlers/extract';
import {isCorrectAnswer} from '../../handlers/answer-correct';
import getState from '../../handlers/answer';

import {switchScreen} from '../../handlers/screen';
import {NEXT_SCREEN, END} from '../../../data/hunt-data';

import Application from '../../../application';

let makeView;

class GameScreen {
  constructor(model) {
    this.model = model;

    this.screen = this.model.getCurrentScreen();

    this.answers = this.model.getAnswers();
    this.answerKey = this.model.getAnswerKey();
    this.answer = ``;

    this.game = new Map();

    this.header = new HeaderView(this.model.state);

    this.game.set(0, makeView = (screenParam, answersParam) => new Game1View(screenParam, answersParam));
    this.game.set(1, makeView = (screenParam, answersParam) => new Game2View(screenParam, answersParam));
    this.game.set(2, makeView = (screenParam, answersParam) => new Game2View(screenParam, answersParam));


    this.content = this.game.get(extractNumeric(
        this.model.state.type))(this.screen, this.answers);

    this.root = document.createElement(`div`);
    this.root.appendChild(this.header.element);
    this.root.appendChild(this.content.element);
    this.root.appendChild(new FooterView().element);

  }

  get element() {
    return this.root;
  }

  // getScreen(answer) {
  //   this.screen = this.model.getCurrentScreen();
  //   this.model.nextAnswerKey();
  //
  //   this.answerKey = this.model.getAnswerKey();
  //
  // }

  // getNextScreen(nextState) {
  //
  //   this.state = switchScreen(
  //       nextState, Hunt, nextState.type, this.answerKey, this.answers);
  //
  //   if (typeof this.state === `string`) {
  //     console.log(`bla`);
  //   } else {
  //
  //     this.getScreen(this.answer);
  //   }
  // }

  // getState(answerResult) {
  //   const nextState = getState(this.state, this.answerKey, answerResult);
  //
  //   this.getNextScreen(nextState);
  //
  // }

  getNextScreen(answerResult) {
    switch (answerResult) {
      case END:
        console.log(`end`);
        break;

      default:
        if (this.model.hasNextScreen()) {
          this.screen = this.model.getNextScreen();
          this.model.nextAnswerKey();

          this.changeScreen();
        }

    }
  }

  answerResult(answers, answersKey) {
    this.answer = answers[answersKey];
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
    const header = new HeaderView(this.model.state);
    this.root.replaceChild(header.element, this.header.element);

    this.header = header;
  }

  changeScreen() {
    this.updateHeader();

    this.screen = this.model.getCurrentScreen();
    this.answers = this.model.getAnswers();
    this.answerKey = this.model.getAnswerKey();

    console.log(this.screen);
    console.log(this.answers);
    console.log(this.answerKey);

    const content = this.game.get(extractNumeric(
        this.model.state.type))(this.screen, this.answers);

    this.header.onReset = this.onReset.bind(this);
    content.onAnswer = this.isCorrectAnswer.bind(this);

    this.changeContentView(content);

  }

  startGame() {
    this.changeScreen();

  }

  changeContentView(view) {
    this.root.replaceChild(view.element, this.content.element);
    this.content = view;
  }

  onReset() {
    // Must reset questions
    Application.showWelcome();
  }

}

export default GameScreen;
