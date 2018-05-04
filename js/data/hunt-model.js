import {
  INITIAL_GAME,
  Hunt
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

  init() {
    this._state = INITIAL_GAME;
  }
}

export default HuntModel;
