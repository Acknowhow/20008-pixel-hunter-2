import textData from './game-2-data';
import {drawnAnswers} from '../../handlers/answers';
import AbstractView from '../../../util/view';
import {createElement} from "../../../util/contractor";

export default class Game2View extends AbstractView {
  constructor(question, answers) {
    super();

    this.question = question;
    this.answers = answers;
  }

  get template() {
    return `
    <p class="game__task">${textData.title}</p>
   
    <form class="game__content  game__content--wide">
      ${this.question.map(({option, params}) => `<div class="game__option">
        <img src="${params.src}" alt="${option}" width="${params.width}"
         height="${params.height}">
        <label class="game__answer game__answer--wide game__answer--photo">
          <input name="${params.question}" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer game__answer--wide game__answer--paint">
          <input name="${params.question}" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>`).join(``)}
    </form>
    
    <div class="stats">
      <ul class="stats">
        ${drawnAnswers(this.answers)};
      </ul>
    </div>`;
  }

  onAnswer() {

  }

  render() {
    return createElement(this.template, `div`, [`game`]);
  }

  bind() {

  }

}


