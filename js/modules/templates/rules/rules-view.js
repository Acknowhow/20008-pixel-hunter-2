import rulesData from './rules-data';
import AbstractView from '../../../util/view';

import {createElement} from '../../../util/contractor';

export default class GreetingView extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return `
  <header class="header">${rulesData.header}</header>
  <h1 class="rules__title">${rulesData.title}</h1>
  <p class="rules__description">${rulesData.paragraph}</p>
  <form class="rules__form">
    <input class="rules__input" type="text" placeholder="Ваше Имя">
    <button class="rules__button  continue" type="submit" disabled>${rulesData.button}</button>
  </form>`;

  }

  onReset() {

  }

  render() {
    return createElement(this.template, `div`, [`rules`]);
  }

  bind() {
    const form = this.element.querySelector(`.rules__form`);
    const linkBack = this.element.querySelector(`.header__back`);

    const rulesButton = form.querySelector(`.rules__button`);
    const rulesInput = form.querySelector(`.rules__input`);

    linkBack.addEventListener(`click`, () => {
      this.onReset();

    });

    rulesInput.addEventListener(`focusout`, () => {
      return rulesInput.value === `` ? rulesButton.setAttribute(
          `disabled`, ``) : ``;
    });

    rulesInput.addEventListener(`keydown`, () => {

      rulesButton.removeAttribute(`disabled`);
    });

    rulesButton.addEventListener(`click`, () => {
      this.onNext();
    });
  }
}

