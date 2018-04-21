import {initialState} from '../../../data/hunt';
import introScreen from './../intro/intro';

import game1Screen from './../game-1/game-1';
import rulesTemplate from './rules-view';
import {insertIntoContainer} from './../../module-constructor';

import text from './rules-data';

export default () => {
  insertIntoContainer(rulesTemplate(text));

  const form = document.querySelector(`.rules__form`);
  const rulesInput = form.querySelector(`.rules__input`);
  const rulesButton = form.querySelector(`.rules__button`);

  const linkBack = document.querySelector(`.header__back`);

  const resetGame = () => {
    linkBack.removeEventListener(`click`, resetGame);
    introScreen();
  };

  const enable = () => {
    rulesButton.removeAttribute(`disabled`);
  };

  const empty = () => {
    rulesInput.addEventListener(`input`, enable);
  };

  const next = () => {
    rulesInput.removeEventListener(`input`, enable);
    rulesInput.removeEventListener(`keydown`, empty);
    rulesButton.removeEventListener(`click`, next);


    game1Screen(initialState);
  };

  const check = () => {
    return rulesInput.value === `` ? rulesButton.setAttribute(
        `disabled`, ``) : ``;
  };

  rulesInput.addEventListener(`focusout`, check);
  rulesInput.addEventListener(`keydown`, empty);
  rulesButton.addEventListener(`click`, next);

  linkBack.addEventListener(`click`, resetGame);
};
