const correct = (userAnswer, currentScreen) => {
  return currentScreen[`option1`][userAnswer];
};

export default (answer, answersArray, screen) => {
  if (correct(answer, screen)) {
    answersArray.push({time: 10, correct: `true`});

  } else {
    answersArray.push({time: 10, correct: `false`});
  }

  return answersArray;
};
