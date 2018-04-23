const correct = (ans1, ans2) => {
  return screen[`option1`][ans1] && screen[`option2`][ans2];
};

export const onAnswer = (answer1, answer2, answersArray) => {

  if (correct(answer1, answer2)) {
    answersArray.push({time: 10, correct: `true`});
  } else {
    answersArray.push({time: 10, correct: `false`});
  }

  return answersArray;
};
