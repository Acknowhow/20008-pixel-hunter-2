import {makeTemplate} from '../../module-constructor';
import {drawnAnswers} from '../../handlers/answers';

export default (state, textData, questionData, answersData) => {
  const content = `
    <p class="game__task">${textData.title}</p>

    <form class="game__content">
      ${questionData.map(({option, params}) => `<div class="game__option">
        <img src="${params.src}" alt="${option}" width="${params.width}"
         height="${params.height}">
        <label class="game__answer game__answer--photo">
          <input name="${params.question}" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer game__answer--paint">
          <input name="${params.question}" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>`).join(``)}
    </form>

    <div class="stats">
      <ul class="stats">
        ${drawnAnswers(answersData)};
      </ul>
    </div>`;

  const article = `<div class='game'>${content}</div>`;
  return makeTemplate(article);
};

