import AbstractView from '../../../util/view';
import {createElement} from '../../../util/contractor';


import {TIME_FAST, TIME_SLOW} from '../../../data/hunt-data';
import {scoreCalc} from '../../../util/score';
import {
  drawnAnswers,
  drawAnswersScore,
  drawSpeedBonus,
  drawLifeBonus,
  drawSlowPenalty} from './handler/stats-handler';

export default class StatsView extends AbstractView {
  constructor(state, answers) {
    super();

    this.state = state;
    this.answers = answers;
  }

  get template() {
    return `
  <header class="header">
    <div class="header__back">
      <span class="back">
        <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
        <img src="img/logo_small.svg" width="101" height="44">
      </span>
    </div>
  </header>
  <div class="result">
    <h1>${this.answers.find((it) => it.correct === `unknown`) ? `Поражение` : `Победа`}</h1>
    <table class="result__table">
      <tr>
        <td class="result__number">1.</td>
        <td colspan="2">
          <ul class="stats">
            ${drawnAnswers(this.answers)}
          </ul>
        </td>
        ${drawAnswersScore(this.answers)}
      </tr>
      ${(this.answers.find((it) => it.time < TIME_FAST)) ? drawSpeedBonus(this.answers) : ``}
      ${this.state.lives ? drawLifeBonus(this.state.lives) : ``}
      ${(this.answers.find((it) => it.time > TIME_SLOW)) ? drawSlowPenalty(this.answers) : ``}
      <tr>
        <td colspan="5" class="result__total  result__total--final">${this.answers.find((it) => it.correct === `unknown`) ? `FAIL` : scoreCalc(this.answers)}</td>
      </tr>
    </table>
  </div>`;
  }
  onReset() {

  }

  render() {
    return createElement(this.template, `div`, [`rules`]);
  }

  bind() {
    const linkBack = this.element.querySelector(`.header__back`);
    linkBack.addEventListener(`click`, (event) => {
      event.preventDefault();
      event.stopPropagation();

      this.onReset();
    });
  }
}


