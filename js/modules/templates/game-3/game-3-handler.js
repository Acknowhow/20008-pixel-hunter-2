let answer;
let answerKey;
let answersArrayKey;
let answersArray;
let screen;

const correct = (userAnswer, userAnswerKey, currentScreen) => {
  return currentScreen.options[`option1`][userAnswerKey][userAnswer];
};

export default (argumentsArray) => {
  if (argumentsArray.length === 5) {
    [answer, answerKey, answersArrayKey, answersArray, screen] = argumentsArray;
  }
  if (correct(answer, answerKey, screen)) {

    answersArray[answersArrayKey].correct = `true`;
  } else {
    answersArray[answersArrayKey].correct = `false`;
  }

  return answersArray;
};
