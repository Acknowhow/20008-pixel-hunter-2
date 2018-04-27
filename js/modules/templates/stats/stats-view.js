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
    <h1>${textData.title}${state.lives}</h1>
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
        <td colspan="5" class="result__total  result__total--final">${scoreCalc(answersData)}</td>
      </tr>
    </table>
    <!--<table class="result__table">-->
      <!--<tr>-->
        <!--<td class="result__number">2.</td>-->
        <!--<td>-->
          <!--<ul class="stats">-->
            <!--<li class="stats__result stats__result&#45;&#45;wrong"></li>-->
            <!--<li class="stats__result stats__result&#45;&#45;slow"></li>-->
            <!--<li class="stats__result stats__result&#45;&#45;fast"></li>-->
            <!--<li class="stats__result stats__result&#45;&#45;correct"></li>-->
            <!--<li class="stats__result stats__result&#45;&#45;wrong"></li>-->
            <!--<li class="stats__result stats__result&#45;&#45;unknown"></li>-->
            <!--<li class="stats__result stats__result&#45;&#45;slow"></li>-->
            <!--<li class="stats__result stats__result&#45;&#45;wrong"></li>-->
            <!--<li class="stats__result stats__result&#45;&#45;fast"></li>-->
            <!--<li class="stats__result stats__result&#45;&#45;wrong"></li>-->
          <!--</ul>-->
        <!--</td>-->
        <!--<td class="result__total"></td>-->
        <!--<td class="result__total  result__total&#45;&#45;final">fail</td>-->
      <!--</tr>-->
    <!--</table>-->
    <!--<table class="result__table">-->
      <!--<tr>-->
        <!--<td class="result__number">3.</td>-->
        <!--<td colspan="2">-->
          <!--<ul class="stats">-->
            <!--<li class="stats__result stats__result&#45;&#45;wrong"></li>-->
            <!--<li class="stats__result stats__result&#45;&#45;slow"></li>-->
            <!--<li class="stats__result stats__result&#45;&#45;fast"></li>-->
            <!--<li class="stats__result stats__result&#45;&#45;correct"></li>-->
            <!--<li class="stats__result stats__result&#45;&#45;wrong"></li>-->
            <!--<li class="stats__result stats__result&#45;&#45;unknown"></li>-->
            <!--<li class="stats__result stats__result&#45;&#45;slow"></li>-->
            <!--<li class="stats__result stats__result&#45;&#45;unknown"></li>-->
            <!--<li class="stats__result stats__result&#45;&#45;fast"></li>-->
            <!--<li class="stats__result stats__result&#45;&#45;unknown"></li>-->
          <!--</ul>-->
        <!--</td>-->
        <!--<td class="result__points">×&nbsp;100</td>-->
        <!--<td class="result__total">900</td>-->
      <!--</tr>-->
      <!--<tr>-->
        <!--<td></td>-->
        <!--<td class="result__extra">Бонус за жизни:</td>-->
        <!--<td class="result__extra">2&nbsp;<span class="stats__result stats__result&#45;&#45;heart"></span></td>-->
        <!--<td class="result__points">×&nbsp;50</td>-->
        <!--<td class="result__total">100</td>-->
      <!--</tr>-->
      <!--<tr>-->
        <!--<td colspan="5" class="result__total  result__total&#45;&#45;final">950</td>-->
      <!--</tr>-->
    <!--</table>-->
  </div>`;
  const article = `${textData.header}<div class="result">${content}</div>`;

  return makeTemplate(article);
};
