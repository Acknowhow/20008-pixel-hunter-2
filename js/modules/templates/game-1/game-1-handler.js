// Determines whether user answer was correct
// Pushes into answers array

let answer1;
let answer2;

const correct = (userAnswer1, userAnswer2, currentScreen) => {

  return currentScreen.options[`option1`][userAnswer1]
    && currentScreen.options[`option2`][userAnswer2];
};

export default (answer, answersArray, answersArrayKey, screen) => {

  if (answer.length === 2) {
    [answer1, answer2] = answer;
  }

  if (correct(answer1, answer2, screen)) {
    answersArray[answersArrayKey].correct = `true`;

  } else {
    answersArray[answersArrayKey].correct = `false`;
  }

  return answersArray;
};
