import {drawnAnswers} from '../../handlers/answers';
import AbstractView from '../../../util/view';
import {createElement} from '../../../util/contractor';

let selectedOption;
let selectedImage;
let selectedImageKey;

export default class Game2View extends AbstractView {
  constructor(screenData, answers) {
    super();

    this.screenData = screenData;
    this.answers = answers;
  }

  get template() {
    return `
    <p class="game__task">${this.screenData.title}</p>
    
    <form class="game__content  game__content--triple">
      <style>
        img[alt='option1'] {
          pointer-events: none;
        }
      </style>
      ${this.screenData.option1.map((param, key) => `<div class="game__option">
        <img src="${param.src}" data-value="${param.value}" alt="option1" width="${param.width}"
         height="${param.height}" data-key="${key}">
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


