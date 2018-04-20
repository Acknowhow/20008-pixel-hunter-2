import {initialState} from '../../../data/hunt';
import {makeIntroTemplate} from './../intro/intro';
import {makeGame2Template} from './../game-2/game-2';
import {insertIntoContainer, makeTemplate} from './../../module-constructor';

import {switchBack} from '../../helper/switch-back';

import {drawHeader} from '../header/header';
// import text from './game-1-data';

export default (state, textData, questionData = {}) => {
  const content = `
    <p class="game__task">${textData.title}</p>
    <form class="game__content">
      <div class="game__option">       
        <img src="http://placehold.it/468x458" alt="Option 1" width="468" height="458">
        <label class="game__answer game__answer--photo">
          <input name="question1" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer game__answer--paint">
          <input name="question1" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>
      <div class="game__option">
        <img src="http://placehold.it/468x458" alt="Option 2" width="468" height="458">
        <label class="game__answer  game__answer--photo">
          <input name="question2" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer  game__answer--paint">
          <input name="question2" type="radio" value="paint">
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
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
      </ul>
    </div>`;

  const article = `${drawHeader(state)}<div class='game'>${content}</div>`;

  return makeTemplate(article);
  // const form = el.querySelector(`.game__content`);
  //
  // // First and Second options screen
  // const formOptions1 = form.children[0];
  // const formOptions2 = form.children[1];
  //
  // const formAnswers1 = Array.from(
  //     formOptions1.querySelectorAll(`input`));
  //
  // const formAnswers2 = Array.from(
  //     formOptions2.querySelectorAll(`input`));
  //
  // const linkBack = el.querySelector(`.header__back`);
  // const intro = () => insertIntoContainer(makeIntroTemplate());
  //
  // const resetGame = () => switchBack(
  //     linkBack, intro);
  //
  // const proceed = () => {
  //   formOptions1.removeEventListener(`click`, checkOpt1);
  //   formOptions2.removeEventListener(`click`, checkOpt2);
  //
  //   setTimeout(() => {
  //
  //     insertIntoContainer(makeGame2Template());
  //   }, 0);
  // };
  //
  // const checkArr = (a) => {
  //   return a.checked === true;
  // };
  //
  // const checkOpt1 = () => {
  //   if (formAnswers2.some(checkArr) === true) {
  //     proceed();
  //   }
  // };
  // const checkOpt2 = () => {
  //   if (formAnswers1.some(checkArr) === true) {
  //     proceed();
  //   }
  // };
  // formOptions1.addEventListener(`click`, checkOpt1);
  // formOptions2.addEventListener(`click`, checkOpt2);
  //
  // linkBack.addEventListener(`click`, resetGame);
  // return el;
};

