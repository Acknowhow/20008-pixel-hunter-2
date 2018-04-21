import {initialState} from '../../../data/hunt';
import introScreen from './../intro/intro';
import game1Template from './game-1-view';
import {insertIntoContainer} from './../../module-constructor';

import text from './game-1-data';

export default () => {
  insertIntoContainer(game1Template(initialState, text));
  const form = document.querySelector(`.game__content`);

  const formOptions1 = form.children[0];
  const formOptions2 = form.children[1];

  const formAnswers1 = Array.from(
      formOptions1.querySelectorAll(`input`));

  const formAnswers2 = Array.from(
      formOptions2.querySelectorAll(`input`));

  const linkBack = document.querySelector(`.header__back`);

  const resetGame = () => {
    linkBack.removeEventListener(`click`, linkBack);
    introScreen();
  };

  const proceed = () => {
    formOptions1.removeEventListener(`click`, checkOpt1);
    formOptions2.removeEventListener(`click`, checkOpt2);

    // setTimeout(() => {
    //
    //   insertIntoContainer(makeGame2Template());
    // }, 0);
  };

  const checkArr = (a) => {
    return a.checked === true;
  };

  const checkOpt1 = () => {
    if (formAnswers2.some(checkArr) === true) {
      proceed();
    }
  };
  const checkOpt2 = () => {
    if (formAnswers1.some(checkArr) === true) {
      proceed();
    }
  };
  formOptions1.addEventListener(`click`, checkOpt1);
  formOptions2.addEventListener(`click`, checkOpt2);

  linkBack.addEventListener(`click`, resetGame);
};


