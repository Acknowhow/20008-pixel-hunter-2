import introScreen from './../intro/intro';
// import {makeGame1Template} from './../game-1/game-1';
import rulesTemplate from './rules-view';
import {insertIntoContainer, makeTemplate} from './../../module-constructor';

import {switchBack} from '../../helper/switch-back';
import text from './rules-data';


export const makeRulesTemplate = () => {
  makeTemplate(rulesTemplate(text));

  const rulesInput = document.querySelector(`.rules__input`);
  const rulesButton = document.querySelector(`.rules__button`);

  const linkBack = document.querySelector(`img[alt='Back']`);

  const intro = () => introScreen();
  const resetGame = () => switchBack(
      linkBack, intro);

  const enable = () => {
    rulesButton.removeAttribute(`disabled`);
  };

  const empty = () => {
    rulesInput.addEventListener(`input`, enable);
  };

  const check = () => {
    return rulesInput.value === `` ? rulesButton.setAttribute(
        `disabled`, ``) : ``;
  };

  const next = () => {
    rulesInput.removeEventListener(`input`, enable);
    rulesInput.removeEventListener(`keydown`, empty);
    rulesButton.removeEventListener(`click`, next);

    // insertIntoContainer(makeGame1Template());
  };

  rulesInput.addEventListener(`focusout`, check);
  rulesInput.addEventListener(`keydown`, empty);
  rulesButton.addEventListener(`click`, next);

  linkBack.addEventListener(`click`, resetGame);
  return el;
};
