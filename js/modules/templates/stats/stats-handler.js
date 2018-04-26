export const drawAnswers = (answerResult) => {
  return `<li class="stats__result stats__result--${answerResult ? answerResult : `` }"></li>`;
};
