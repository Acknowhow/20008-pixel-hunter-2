import {
  currentGame,
  Hunt,
  answers,
  answersKey, INITIAL_GAME
} from './hunt-data';

import {nextParameter, takeLife, tick} from './hunt';

const getScreen = (state, screenParameter) => {
  return Hunt[state.type][screenParameter];
};

const getType = (typeParameter) => {
  return Hunt[typeParameter][INITIAL_GAME.screen];
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

  getPlayerName() {
    return this.playerName;
  }

  // Assigns correct answer result into answers array
  // Returns answers array
  assignCorrect() {
    this._answersArray[this._answerKey].correct = `true`;
    return this._answersArray;
  }

  // Assigns wrong answer result into answers array
  // Returns answers array
  assignWrong() {
    this._answersArray[this._answerKey].correct = `false`;
    return this._answersArray;
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

  resetScreen() {
    this._state.screen = INITIAL_GAME.screen;
  }

  // Returns current answers array
  getAnswers() {
    return this._answersArray;
  }

  // Returns next type with screen-0
  getNextType() {
    const type = nextParameter(this._state.type);
    this._state = Object.assign({}, this._state, {type});

    this.resetScreen();

    return getType(type);
  }

  // Returns current screen
  getCurrentScreen() {
    return Hunt[this._state.type][this._state.screen];
  }

  // Returns answers key value
  getAnswerKey() {
    this._answerKey = this._answersKeyArray.pop();
    this._answersKeyArray.push(this._answerKey);
    return this._answerKey;
  }

  // Returns current answer
  getAnswer() {
    this._answer = this._answersArray[this.getAnswerKey()];
    return this._answer;
  }

  // Increments next key into answersKeyArray
  nextAnswerKey() {
    this._answerKey = this._answersKeyArray.pop();

    this._answerKey++;
    this._answersKeyArray.push(this._answerKey);
  }

  // Deducts life, returns lives left
  takeLife() {
    this._state = takeLife(this._state, this._state.lives);
    return this._state.lives;
  }

  isDead() {
    return this._state.lives < 0;
  }

  resetTick() {
    this._state.time = 0;
  }

  restart() {
    this._answerKey = this._answersKeyArray.pop();
    this._answerKey = 0;
    this._answersKeyArray.push(this._answerKey);
  }

  tick() {
    this._state = tick(this._state);
  }

  init() {
    this._state = currentGame;
    this._answersArray = answers();
    this._answersKeyArray = answersKey;

  }
}

export default HuntModel;
