import {makeTemplate} from '../../module-constructor';
import {drawnAnswers} from '../../handlers/answers';

export default (state, screenData, answersData) => {
  //   game__option--selected may be required
  const content = `
    <p class="game__task">${screenData.title}</p>
    
    <form class="game__content  game__content--triple">
      <style>
        img[alt='option1'] {
          pointer-events: none;
        }
      </style>
      ${screenData.option1.map((param, key) => `<div class="game__option">
        <img src="${param.src}" data-value="${param.value}" alt="option1" width="${param.width}"
         height="${param.height}" data-key="${key}">
      </div>`).join(``)}
      
    </form>
    
    <div class="stats">
      <ul class="stats">
        ${drawnAnswers(answersData)};
      </ul>
    </div>`;

  const article = `<div class="game">${content}</div>`;
  return makeTemplate(article);
};
