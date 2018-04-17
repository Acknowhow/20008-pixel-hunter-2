import {makeIntroTemplate} from './../intro/intro';
import {makeGame3Template} from './../game-3/game-3';
import {insertIntoContainer, makeTemplate} from './../../module-constructor';

const moduleGame2 = `<header class="header">
    <div class="header__back">
      <span class="back">
        <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
        <img src="img/logo_small.svg" width="101" height="44">
      </span>
    </div>
    <h1 class="game__timer">NN</h1>
    <div class="game__lives">
      <img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">
      <img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">
      <img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">
    </div>
  </header>
  <div class="game">
    <p class="game__task">Угадай, фото или рисунок?</p>
    <form class="game__content  game__content--wide">
      <div class="game__option">
        <img src="http://placehold.it/705x455" alt="Option 1" width="705" height="455">
        <label class="game__answer  game__answer--photo">
          <input name="question1" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer  game__answer--wide  game__answer--paint">
          <input name="question1" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>
    </form>
    <div class="stats">
      <ul class="stats">
        <li class="stats__result stats__result--wrong"></li>
        <li class="stats__result stats__result--slow"></li>
        <li class="stats__result stats__result--fast"></li>
        <li class="stats__result stats__result--correct"></li>
        <li class="stats__result stats__result--wrong"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--slow"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--fast"></li>
        <li class="stats__result stats__result--unknown"></li>
      </ul>
    </div>
  </div>`;
export const makeGame2Template = () => {
  const el = makeTemplate(moduleGame2);
  const form = el.querySelector(`.game__content`);

  const formOption = form.children[0];
  const answer1 = formOption.querySelector(`.game__answer--photo`).children[0];
  const answer2 = formOption.querySelector(`.game__answer--paint`).children[0];

  const answersArr = [answer1, answer2];
  const linkBack = el.querySelector(`.header__back`);

  const switchBack = () => {
    linkBack.removeEventListener(`click`, switchBack);

    const introTemplate = makeIntroTemplate();
    insertIntoContainer(introTemplate);
  };

  const checkArr = (input) => {
    return input.checked === true;
  };

  const check = (ev) => {
    if (ev.currentTarget !== formOption) {
      return;
    }
    if (answersArr.some(checkArr)) {
      formOption.removeEventListener(`click`, check);

      const game3Template = makeGame3Template();
      insertIntoContainer(game3Template);
    }
  };

  formOption.addEventListener(`click`, check);
  linkBack.addEventListener(`click`, switchBack);
  return el;
};
