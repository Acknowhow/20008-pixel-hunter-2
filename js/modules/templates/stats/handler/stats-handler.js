import {
  SCORE_CORRECT,
  BONUS_SCORE,
  SCORE_PENALTY,
  TIME_FAST,
  TIME_SLOW} from '../../../../data/hunt';

const scoreCalc = (item) => {
  if (item.correct === `false`) {
    return `wrong`;
  }

  if (item.time < TIME_FAST) {
    return `fast`;
  }

  if (item.time > TIME_SLOW) {
    return `slow`;
  }

  return `correct`;
};

const drawAnswers = (answerResult) => {
  return `<li class="stats__result stats__result--${
    answerResult ? answerResult : `` }"></li>`;
};

export const drawnAnswers = (answers) => answers.map(
    (answer) => drawAnswers(scoreCalc(answer)));

export const drawAnswersScore = (_answers) => {
  return `<td class="result__points"> x ${SCORE_CORRECT}</td>
<td class="result__total">${_answers.filter(
      (answer) => answer.correct === `true`).length * SCORE_CORRECT}</td>`;
};

export const drawSpeedBonus = (_answers) => {
  return `<tr>
  <td></td>
  <td class="result__extra"> Бонус за скорость:<td>
  <td class="result__extra">${_answers.filter(
      (fastAnswer) => fastAnswer.time < TIME_FAST).length} <span class="stats__result stats__result--fast"></span></td>
  <td class="result__points">× ${_answers.filter(
      (fastAnswer) => fastAnswer.time < TIME_FAST).length * BONUS_SCORE}</td>
  <td class="result__total">50</td>
</tr>`;
};

export const drawLifeBonus = (lives) => {
  return `<tr>
  <td></td>
  <td class="result__extra"> Бонус за жизни:<td>
  <td class="result__extra">${lives} <span class="stats__result stats__result--heart"></span></td>
  <td class="result__points">× ${BONUS_SCORE}</td>
  <td class="result__total">${lives * BONUS_SCORE}</td>
</tr>`;
};

export const drawSlowPenalty = (___answers) => {
  return `<tr>
  <td></td>
  <td class="result__extra"> Бонус за скорость:<td>
  <td class="result__extra">${___answers.filter(
      (slowAnswer) => slowAnswer.time < TIME_SLOW).length} <span class="stats__result stats__result--slow"></span></td>
  <td class="result__points">× ${___answers.filter(
      (slowAnswer) => slowAnswer.time < TIME_SLOW).length * SCORE_PENALTY}</td>
  <td class="result__total">50</td>
</tr>`;
};

