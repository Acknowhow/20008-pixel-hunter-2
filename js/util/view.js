export default class AbstractView {
  constructor() {
    if (new.target === AbstractView) {
      throw new Error(`Can't create another AbstractView`);
    }
  }

  get template() {
    if (this._element) {
      return this._element;
    }
    this._element = this.render();
    this.bind(this._element);
    return this._element;
  }

  render() {
    return createElement(this.template);
  }

  bind(element) {
    // bind handlers if required
  }
}

