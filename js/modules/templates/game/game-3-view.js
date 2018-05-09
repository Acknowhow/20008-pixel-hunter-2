import {drawnAnswers} from '../../handlers/answers';
import AbstractView from '../../../util/view';
import {createElement} from '../../../util/contractor';

let selectedOption;
let selectedImage;
let selectedImageKey;

export default class Game3View extends AbstractView {
  constructor(question, answers) {
    super();

    this.question = question;
    this.answers = answers;
  }

  get template() {
    return `
    <p class="game__task">${this.question.text}</p>
    
    <form class="game__content  game__content--triple">
      ${this.question.options.map((param, key) => `<div class="game__option">
        <img src="${param.src}" data-value="${param.value}" alt="option1" width="${param.width}"
         height="${param.height}" data-key="${key}">
      </div>`).join(``)}
      <style>
        img[alt='option1'] {
          pointer-events: none;
        }
      </style>      
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
    const form = this.element.querySelector(`.game__content`);

    form.onclick = (event) => {
      selectedOption = event.target;
      selectedOption.classList.add(`game__option--selected`);

      selectedImage = selectedOption.firstElementChild.attributes[
          `data-value`].nodeValue;

      selectedImageKey = selectedOption.firstElementChild.attributes[
          `data-key`].nodeValue;

      this.onAnswer(selectedImage, selectedImageKey);
    };
  }
}


