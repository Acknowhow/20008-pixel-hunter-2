import StatsView from '../stats/stats-view';
import FooterView from '../footer/footer-view';


import DialogView from '../dialog/dialog-view';

import Application from '../../../application';

class StatsScreen {
  constructor(state, answers, playerName) {
    this.state = state;
    this.answers = answers;
    this.playerName = playerName;

    this.content = new StatsView(this.state, this.answers, this.playerName);

    this.dialog = new DialogView(`Повтор игры`, `Это было здорово, повторим?`);

    this.root = document.createElement(`div`);
    this.root.appendChild(this.content.element);
    this.root.appendChild(new FooterView().element);
  }

  get element() {
    return this.root;
  }

  onReset() {
    Application.showScreen(this.playerName);
  }
}

export default StatsScreen;
