export const scoreCalc = (answersArray) => answersArray.map((item) => {
  if (item.correct === `false` || item.correct === `unknown`) {
    return 0;
  }

  if (item.time < 10) {
    return 150;
  }

  if (item.time > 20) {
    return 50;
  }

  return 100;
}).reduce((acc, cur) => acc + cur);

export const calculate = (answersArray, lives) => {
  let score = 0;

  if (!Array.isArray(answersArray)) {
    throw new Error(`Answers should be of array type`);
  }

  if (answersArray.length !== 10) {
    return -1;
  }

  if (typeof lives !== `number`) {
    throw new Error(`Lives should be of number type`);
  }

  if (lives < 0) {
    throw new Error(`Lives should not be negative`);
  }

  while (lives) {
    score += 50;
    lives--;
  }

  score += scoreCalc(answersArray);
  return score;
};
