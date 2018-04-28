const correct = (userAnswer, currentScreen) => {
  return currentScreen[`option1`][userAnswer];
};

export default (answer, answersArray, answersArrayKey, screen) => {
  if (correct(answer, screen)) {
    answersArray[answersArrayKey].correct = `true`;

  } else {
    answersArray[answersArrayKey].correct = `false`;
  }

  return answersArray;
};
