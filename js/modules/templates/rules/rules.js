import {makeIntroTemplate} from './../intro/intro';
import {makeGame1Template} from './../game-1/game-1';
import {insertIntoContainer, makeTemplate} from './../../module-constructor';

import {switchBack} from '../../helper/switch-back';
import text from './rules-data';

const moduleRules = `<header class="header">${text.header}</header>
<div class="rules">
  <h1 class="rules__title">${text.title}</h1>
  <p class="rules__description">${text.paragraph}</p>
  <form class="rules__form">
    <input class="rules__input" type="text" placeholder="Ваше Имя">
    <button class="rules__button  continue" type="submit" disabled>${text.button}</button>
  </form>
</div>`;

export const makeRulesTemplate = () => {
  const el = makeTemplate(moduleRules);

  const rulesInput = el.querySelector(`.rules__input`);
  const rulesButton = el.querySelector(`.rules__button`);

  const linkBack = el.querySelector(`img[alt='Back']`);
  const intro = () => insertIntoContainer(
      makeIntroTemplate());

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

    insertIntoContainer(makeGame1Template());
  };

  rulesInput.addEventListener(`focusout`, check);
  rulesInput.addEventListener(`keydown`, empty);
  rulesButton.addEventListener(`click`, next);

  linkBack.addEventListener(`click`, resetGame);
  return el;
};
