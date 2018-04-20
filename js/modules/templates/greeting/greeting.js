import {insertIntoContainer} from '../../module-constructor';
import greetingTemplate from './greeting-view';

import text from './greeting-data';

export default () => {
  insertIntoContainer(greetingTemplate(text));
};


