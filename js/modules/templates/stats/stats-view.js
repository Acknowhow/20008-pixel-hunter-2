import {makeTemplate} from '../../module-constructor';
import {TIME_FAST, TIME_SLOW} from '../../../data/hunt';
import {scoreCalc} from '../../../util/score';
import {
  drawnAnswers,
  drawAnswersScore,
  drawSpeedBonus,
  drawLifeBonus,
  drawSlowPenalty} from "./handler/stats-handler";

export default (state, textData, answersData) => {
  const content = `<div class="result">
    <h1>${answersData.find((it) => it.correct === `unknown`) ? `Поражение` : textData.title}</h1>
    <table class="result__table">
      <tr>
        <td class="result__number">1.</td>
        <td colspan="2">
          <ul class="stats">
            ${drawnAnswers(answersData)}
          </ul>
        </td>
        ${drawAnswersScore(answersData)}
      </tr>
      ${(answersData.find((it) => it.time < TIME_FAST)) ? drawSpeedBonus(answersData) : ``}
      ${state.lives ? drawLifeBonus(state.lives) : ``}
      ${(answersData.find((it) => it.time > TIME_SLOW)) ? drawSlowPenalty(answersData) : ``}
      <tr>
        <td colspan="5" class="result__total  result__total--final">${answersData.find((it) => it.correct === `unknown`) ? `FAIL` : scoreCalc(answersData)}</td>
      </tr>
    </table>
  </div>`;
  const article = `${textData.header}<div class="result">${content}</div>`;

  return makeTemplate(article);
};
