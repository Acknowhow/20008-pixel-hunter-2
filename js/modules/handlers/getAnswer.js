// Merged handler estimates answer result
// by comparing user response with current
// db info
let answer1;
let answer2;

let answer;
let answerKey;
let answersArrayKey;
let answersArray;
let screen;

const correct1 = (userAnswer1, userAnswer2, currentScreen) => {

  return currentScreen.options[`option1`][userAnswer1]
    && currentScreen.options[`option2`][userAnswer2];
};

const correct2 = (userAnswer, currentScreen) => {
  return currentScreen.options[`option1`][userAnswer];
};

const correct3 = (userAnswer, userAnswerKey, currentScreen) => {
  return currentScreen.options[`option1`][userAnswerKey][userAnswer];
};

export const getAnswerResult = (argumentsArray) => {

  if (argumentsArray.length === 4) {

    [answer, answersArray, answersArrayKey, screen] = argumentsArray;



    if (answer.length === 2) {
      [answer1, answer2] = answer;

      if (correct1(answer1, answer2, screen)) {
        answersArray[answersArrayKey].correct = `true`;

      } else {
        answersArray[answersArrayKey].correct = `false`;
      }

      return answersArray;
    }

    [answer1] = answer;

    if (correct2(answer1, screen)) {
      answersArray[answersArrayKey].correct = `true`;

    } else {
      answersArray[answersArrayKey].correct = `false`;
    }

    return answersArray;
  }

  [answer, answerKey, answersArrayKey, answersArray, screen] = argumentsArray;
  if (correct3(answer, answerKey, screen)) {

    answersArray[answersArrayKey].correct = `true`;
  } else {
    answersArray[answersArrayKey].correct = `false`;
  }

  return answersArray;
};
