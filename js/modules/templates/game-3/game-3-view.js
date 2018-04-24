import {makeTemplate} from '../../module-constructor';
import {drawHeader} from '../header/header';

export default (state, textData, questionData) => {
  const content = `
  <div class="game">
    <p class="game__task">${textData.title}</p>
    <form class="game__content  game__content--triple">
      <style>
        .game__content--triple .game__option:active::after {
          pointer-events: none;
        }
      </style>
      <div class="game__option">
        <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
      </div>
      <div class="game__option  game__option--selected">
        <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
      </div>
      <div class="game__option">
        <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
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
  const article = `${drawHeader(state)}<div class="game">${content}</div>`;

  return makeTemplate(article);
};
