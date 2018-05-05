import {TIME_FAST, TIME_SLOW} from '../../data/hunt-data';

const scoreCalc = (item) => {
  if (item.correct === `unknown`) {
    return `unknown`;
  }
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
