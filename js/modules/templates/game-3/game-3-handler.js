const correct = (userAnswer, userAnswerKey, currentScreen) => {
  return currentScreen[`option1`][userAnswerKey][userAnswer];
};

export default (answer, answerKey, answersArray, screen) => {
  if (correct(answer, answerKey, screen)) {
    answersArray.push({time: 10, correct: `true`});

  } else {
    answersArray.push({time: 10, correct: `false`});
  }

  return answersArray;
};
