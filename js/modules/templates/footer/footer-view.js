import footerData from './footer-data';
import AbstractView from '../../../util/view';

import {createElement} from '../../../util/contractor';

export default class FooterView extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return footerData.text;
  }

  render() {
    return createElement(this.template, `footer`, [`footer`]);
  }
}
