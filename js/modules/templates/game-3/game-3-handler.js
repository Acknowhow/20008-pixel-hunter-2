const correct = (userAnswer, userAnswerKey, currentScreen) => {
  return currentScreen[`option1`][userAnswerKey][userAnswer];
};

export default (answer, answerKey, answerArrayKey, answersArray, screen) => {
  if (correct(answer, answerKey, screen)) {
    answersArray[answerArrayKey].correct = `true`;

  } else {
    answersArray[answerArrayKey].correct = `false`;
  }

  return answersArray;
};
