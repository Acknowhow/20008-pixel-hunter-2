import {insertIntoContainer} from '../../module-constructor';
import greetingTemplate from './greeting-view';

import text from './greeting-data';
import rulesScreen from "../rules/rules";

export default () => {
  insertIntoContainer(greetingTemplate(text));

  const linkNext = document.querySelector(`img[alt='Next']`);

  const next = () => {
    rulesScreen();

    linkNext.removeEventListener(`click`, next);
  };

  linkNext.addEventListener(`click`, next);
};


