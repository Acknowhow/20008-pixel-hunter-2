import AbstractView from '../../../util/view';
import {createElement} from '../../../util/contractor';

export default class DialogView extends AbstractView {
  constructor(title, content) {
    super();
    this.title = title;
    this.content = content;
  }

  get template() {
    return `
      <form class="dialog-form" autocomplete="off">

        <div class="dialog-header">
          ${this.title}
        <span class="dialog-close">×</span>
        </div>

        <div class="dialog-content">
          ${this.content}
        </div>

        <div class="dialog-footer">
          <button class="button dialog-submit">OK</button>
          <button class="button dialog-cancel">Отмена</button>
        </div>
      </form>`;
  }

  onCancel() {

  }

  onConfirm() {

  }

  render() {
    return createElement(this.template, `dialog`, []);
  }

  bind() {
    const closeButton = this.element.querySelector(`.dialog-close`);
    const cancelButton = this.element.querySelector(`.dialog-cancel`);
    const confirmButton = this.element.querySelector(`.dialog-submit`);

    const cancelHandler = (evt) => {
      evt.stopPropagation();
      evt.preventDefault();

      this.onCancel();
    };

    cancelButton.addEventListener(`click`, cancelHandler);
    closeButton.addEventListener(`click`, cancelHandler);

    confirmButton.addEventListener(`click`, (evt) => {
      evt.stopPropagation();
      evt.preventDefault();

      this.onConfirm();
    });
  }
}
