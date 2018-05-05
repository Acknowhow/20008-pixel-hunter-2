import {
  INITIAL_GAME,
  Hunt,
  answers,
  answersKey
} from './hunt-data';

class HuntModel {
  constructor(playerName) {
    this.playerName = playerName;
    this.init();
  }

  get state() {
    return this._state;
  }

  getAnswers() {
    return this._answers;
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
    answersKey.push(this._answerKey);
  }

  nextScreen() {

  }

  nextType() {

  }

  init() {
    this._answers = answers;
    this._answersKey = answersKey;
    this._state = INITIAL_GAME;
  }
}

export default HuntModel;
