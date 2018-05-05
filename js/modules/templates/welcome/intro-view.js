import AbstractView from '../../../util/view';

import {createElement} from '../../../util/contractor';

export default class IntroView extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return `
    <div class="intro">
      <h1 class="intro__asterisk">*</h1>
      <p class="intro__motto"><sup>*</sup> Это не фото. 
      Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
    </div>`;
  }

  render() {
    const element = createElement(this.template, `div`, [`central__content`]);

    element.id = `main`;
    return element;
  }

  bind() {
    const asterisk = this.element.querySelector(`.intro__asterisk`);

    asterisk.addEventListener(`click`, (event) => {
      event.stopPropagation();
      event.preventDefault();

      this.onNext();
    });
  }

  onNext() {

  }
}
