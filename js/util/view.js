import {createElement} from './contractor';

export default class AbstractView {
  constructor() {
    if (new.target === AbstractView) {
      throw new Error(`Can't create another AbstractView`);
    }
  }

  get template() {
    throw new Error(`Must provide element's template`);
  }

  get element() {
    if (!this._element) {
      this._element = this.render();
      this.bind();
    }

    return this._element;
  }

  render() {
    return createElement(this.template);
  }

  bind() {

  }
}
