let answer1;

const correct = (userAnswer, currentScreen) => {
  return currentScreen.options[`option1`][userAnswer];
};

export default (answer, answersArray, answerArrayKey, screen) => {

  if (answer.length === 1) {
    [answer1] = answer;
  }
  if (correct(answer1, screen)) {
    answersArray[answerArrayKey].correct = `true`;

  } else {
    answersArray[answerArrayKey].correct = `false`;
  }

  return answersArray;
};
