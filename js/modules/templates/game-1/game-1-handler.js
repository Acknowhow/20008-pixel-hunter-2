// Determines whether user answer was correct
// Pushes into answers array
const correct = (userAnswer1, userAnswer2, currentScreen) => {
  return currentScreen[`option1`][userAnswer1] && currentScreen[`option2`][userAnswer2];
};

export default (answer1, answer2, answersArray, answersArrayKey, screen) => {

  if (correct(answer1, answer2, screen)) {
    answersArray[answersArrayKey].correct = `true`;

  } else {
    answersArray[answersArrayKey].correct = `false`;
  }

  return answersArray;
};
