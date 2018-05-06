import {
  currentGame,
  Hunt,
  answers,
  answersKey
} from './hunt-data';

import {nextParameter} from './hunt';

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

  get state() {
    return this._state;
  }

  assignCorrect() {
    this._answers[this._answersKey].correct = `true`;
    return this._answers;
  }

  assignWrong() {
    this._answers[this._answersKey].correct = `false`;
    return this._answers;
  }

  hasNextScreen() {
    return getScreen(this._state,
        nextParameter(this._state.screen)) !== void 0;
  }

  hasNextType() {
    return getType(
        nextParameter(this._state.type)) !== void 0;
  }

  getNextScreen() {
    const screenParameter = nextParameter(this._state.screen);
    this._state = Object.assign(
        {}, this._state, {screen: screenParameter});

    return getScreen(this._state, screen);
  }

  getNextType() {
    const typeParameter = nextParameter(this._state.type);
    this._state = Object.assign(
        {}, this._state, {type: typeParameter});

    return getType(typeParameter);
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
    this._state = currentGame;
    this._answers = answers;
    this._answersKey = answersKey;

  }
}

export default HuntModel;
