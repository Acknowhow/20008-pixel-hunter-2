// Determines whether user answer was correct
// Pushes into answers array
const correct = (userAnswer1, userAnswer2) => {
  return screen[`option1`][userAnswer1] && screen[`option2`][userAnswer2];
};

export default (answer1, answer2, answersArray) => {

  if (correct(answer1, answer2)) {
    answersArray.push({time: 10, correct: `true`});
  } else {
    answersArray.push({time: 10, correct: `false`});
  }

  return answersArray;
};
