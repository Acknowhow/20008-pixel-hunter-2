const correct = (userAnswer, currentScreen) => {
  return currentScreen[`option1`][userAnswer];
};

export default (answer, answersArray, answerArrayKey, screen) => {
  if (correct(answer, screen)) {
    answersArray[answerArrayKey].correct = `true`;

  } else {
    answersArray[answerArrayKey].correct = `false`;
  }

  return answersArray;
};
