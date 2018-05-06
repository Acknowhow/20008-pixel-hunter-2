import {
  currentGame,
  Hunt,
  answers,
  answersKey, INITIAL_GAME
} from './hunt-data';

import {nextParameter, takeLife} from './hunt';

const getScreen = (state, screenParameter) => {
  return Hunt[state.type][screenParameter];
};

const getType = (typeParameter) => {
  return Hunt[typeParameter][currentGame.screen];
};

class HuntModel {
  constructor(playerName) {
    this.playerName = playerName;
    this.init();
  }

  // Gets current state
  get state() {
    return this._state;
  }

  // Assigns correct answer result into answers array
  // Returns answers array
  assignCorrect() {
    this._answers[this._answersKey].correct = `true`;
    return this._answers;
  }

  // Assigns wrong answer result into answers array
  // Returns answers array
  assignWrong() {
    this._answers[this._answersKey].correct = `false`;
    return this._answers;
  }

  // Determines if next screen exists on current type
  // Returns true of false
  hasNextScreen() {
    return getScreen(
        this._state, nextParameter(this._state.screen)) !== void 0;
  }

  // Determines if next type exists, returns true or false
  hasNextType() {
    return getType(
        nextParameter(this._state.type)) !== void 0;
  }

  // Returns next screen with current type
  getNextScreen() {
    const screen = nextParameter(this._state.screen);
    this._state = Object.assign({}, this._state, {screen});

    return getScreen(this._state, screen);
  }

  // Returns current answers array
  getAnswers() {
    return this._answers;
  }

  // Returns next type with screen-0
  getNextType() {
    const type = nextParameter(this._state.type);
    this._state = Object.assign({}, this._state, {type});

    return getType(type);
  }

  // Returns current screen
  getCurrentScreen() {
    return Hunt[this._state.type][this._state.screen];
  }

  // Returns answers key value
  getAnswersKey() {
    this._answersKey = this._answersKey.pop();
    return this._answersKey;
  }

  // Returns current answer
  getAnswer() {
    this._answer = answers[this.getAnswersKey()];
    return this._answer;
  }

  // Increments next key before next screen
  nextAnswersKey() {
    this._answersKey++;
    this._answersKey.push(this._answersKey);
  }

  // Deducts life
  takeLife() {
    this._state = takeLife(this._state, this._state.lives);
  }

  isDead() {
    return this._state.lives < 0;
  }

  restart() {
    this._state = INITIAL_GAME;
  }

  init() {
    this._state = currentGame;
    this._answers = answers;
    this._answersKey = answersKey;

  }
}

export default HuntModel;
