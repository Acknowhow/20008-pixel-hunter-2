import textData from './game-1-data';
import {drawnAnswers} from '../../handlers/answers';
import AbstractView from '../../../util/view';
import {createElement} from "../../../util/contractor";

let answer1Checked = ``;
let answer2Checked = ``;

export default class Game1View extends AbstractView {
  constructor(question, answers) {
    super();

    this.question = question;
    this.answers = answers;
  }

  get template() {
    return `
    <p class="game__task">${textData.title}</p>
    <form class="game__content">
      ${this.question.map(({option, params}) => `<div class="game__option">
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
        ${drawnAnswers(this.answers)};
      </ul>
    </div>`;
  }

  onAnswer() {

  }

  onReset() {

  }

  render() {
    return createElement(this.template, `div`, [`game`]);
  }

  bind() {
    const form = this.element.querySelector(`.game__content`);
    // const linkBack = this.element.querySelector(`.header__back`);
    const answers1 = Array.from(
        form.querySelectorAll(`input[name='question1']`));
    const answers2 = Array.from(
        form.querySelectorAll(`input[name='question2']`));

    // linkBack.addEventListener(`click`, (event) => {
    //   event.stopPropagation();
    //   event.preventDefault();
    //
    //   this.onReset();
    // });

    form.onclick = () => {
      answer1Checked = () => {
        return answers1.find((it) => it.checked);
      };
      answer2Checked = () => {
        return answers2.find((it) => it.checked);
      };

      const answered = () => {
        return answer1Checked() && answer2Checked();
      };

      if (answered()) {
        this.onAnswer([answer1Checked().value, answer2Checked().value]);

      }
    };
  }
}
