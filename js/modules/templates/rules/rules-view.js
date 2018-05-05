import AbstractView from '../../../util/view';

import {createElement} from '../../../util/contractor';

export default class GreetingView extends AbstractView {
  constructor() {
    super();
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
  <h1 class="rules__title">Правила</h1>
  <p class="rules__description">Угадай 10 раз для каждого изображения фото 
  <img src="img/photo_icon.png" width="16" height="16"> или рисунок <img src="img/paint_icon.png" width="16" height="16" alt="">.<br>
  Фотографиями или рисунками могут быть оба изображения.<br>На каждую попытку отводится 30 секунд.<br>
  Ошибиться можно не более 3 раз.<br><br>
  Готовы?</p>
  <form class="rules__form">
    <input class="rules__input" type="text" placeholder="Ваше Имя" value="${this.playerName}">
    <button class="rules__button  continue" type="submit" disabled>Go!</button>
  </form>`;
  }

  onReset() {

  }

  onNext() {

  }

  render() {
    return createElement(this.template, `div`, [`rules`]);
  }

  bind() {
    const form = this.element.querySelector(`.rules__form`);
    const linkBack = this.element.querySelector(`.header__back`);

    const rulesButton = form.querySelector(`.rules__button`);
    const rulesInput = form.querySelector(`.rules__input`);

    linkBack.addEventListener(`click`, (event) => {
      event.stopPropagation();
      event.preventDefault();

      this.onReset();
    });

    rulesInput.addEventListener(`focusout`, () => {
      return rulesInput.value === `` ? rulesButton.setAttribute(
          `disabled`, ``) : ``;
    });

    rulesInput.addEventListener(`keydown`, () => {

      rulesButton.removeAttribute(`disabled`);
    });

    rulesButton.addEventListener(`click`, (event) => {
      event.stopPropagation();
      event.preventDefault();

      this.onNext();
    });
  }
}

