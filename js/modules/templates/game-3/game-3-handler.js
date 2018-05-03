let answer;
let answerKey;
let answersArrayKey;
let answersArray;
let screen;

const correct = (userAnswer, userAnswerKey, currentScreen) => {
  return currentScreen[`option1`][userAnswerKey][userAnswer];
};

export default (array) => {
  if (array.length === 5) {
    [answer, answerKey, answersArrayKey, answersArray, screen] = array;
  }
  if (correct(answer, answerKey, screen)) {

    answersArray[answersArrayKey].correct = `true`;
  } else {
    answersArray[answersArrayKey].correct = `false`;
  }

  return answersArray;
};
