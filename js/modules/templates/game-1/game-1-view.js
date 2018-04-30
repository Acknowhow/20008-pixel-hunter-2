import textData from './game-1-data';
import {drawnAnswers} from '../../handlers/answers';
import AbstractView from '../../../util/view';

import HeaderView from '../header/header-view';
import {createElement} from "../../../util/contractor";

export default class Game1View extends AbstractView {
  constructor(state, questionData, answersData) {
    super();

    this.state = state;
    this.questionData = questionData;
    this.answersData = answersData;
  }

  get template() {
    return `
    ${new HeaderView(this.state).element}
    <p class="game__task">${textData.title}</p>
    <form class="game__content">
      ${this.questionData.map(({option, params}) => `<div class="game__option">
        <img src="${params.src}" alt="${option}" width="${params.width}"
         height="${params.height}">
        <label class="game__answer game__answer--photo">
          <input name="${params.question}" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer game__answer--paint">
          <input name="${params.question}" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>`).join(``)}
    </form>
    <div class="stats">
      <ul class="stats">
        ${drawnAnswers(this.answersData)};
      </ul>
    </div>`;
  }

  onReset() {

  }

  render() {
    return createElement(this.template, `div`, [`game`]);
  }

  bind() {

  }
}
