import AbstractView from '../../../util/view';
import {createElement} from '../../../util/contractor';

const drawHeart = (full) => {
  return `<img src="img/heart__${full ? `full` : `empty`}.svg" class="game__heart" alt="Life" width="32" height="32">`;
};

export default class HeaderView extends AbstractView {
  constructor(state, interval) {
    super();
    this.state = state;
    this.interval = interval;
  }

  get template() {
    return `
    <div class="header__back">
      <span class="back">
        <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
        <img src="img/logo_small.svg" width="101" height="44">
      </span>
    </div>
    <h1 class="game__timer">${this.state.time}</h1>
    <div class="game__lives">
      ${drawHeart(this.state.lives > 2)}
      ${drawHeart(this.state.lives > 1)}
      ${drawHeart(this.state.lives > 0)}
    </div>`;
  }
  onReset() {
    clearInterval(this.interval);
  }

  render() {
    return createElement(this.template, `header`, [`header`]);
  }

  bind() {
    const linkBack = this.element.querySelector(`.header__back`);
    linkBack.addEventListener(`click`, () => {


      this.onReset();
    });
  }
}
