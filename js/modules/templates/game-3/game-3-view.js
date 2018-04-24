import {makeTemplate} from '../../module-constructor';
import {drawHeader} from '../header/header';

export default (state, textData, questionData) => {
  //   game__option--selected may be required
  const content = `
    <p class="game__task">${textData.title}</p>
    
    <form class="game__content  game__content--triple">
      <style>
        .game__content--triple .game__option:active::after {
          pointer-events: none;
        }
      </style>
      ${questionData.params.map((param) => `<div class="game__option">
        <img src="${param.src}" alt="${questionData.option}" width="${param.width}"
         height="${param.height}">
      </div>`).join(``)}
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
    </div>`;

  const article = `${drawHeader(state)}<div class="game">${content}</div>`;
  return makeTemplate(article);
};
