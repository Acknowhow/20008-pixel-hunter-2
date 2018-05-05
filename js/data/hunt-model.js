import {
  INITIAL_GAME,
  Hunt,
  answers
} from './hunt-data';

class HuntModel {
  constructor(playerName) {
    this.playerName = playerName;
    this.init();
  }

  get state() {
    return this._state;
  }

  getCurrentScreen() {
    return Hunt[this._state.type][this._state.screen];
  }

  getAnswerKey() {
    this._answerKey = this._answersKey.pop();
    return this._answerKey;
  }

  getAnswer() {
    this._answer = answers[this.getAnswerKey()];
    return this._answer;
  }

  nextAnswerKey() {
    this._answerKey++;
    this._answersKey.push(this._answerKey);
  }

  init() {
    this._state = INITIAL_GAME;
  }
}

export default HuntModel;
