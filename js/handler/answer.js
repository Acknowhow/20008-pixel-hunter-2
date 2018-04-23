const takeLife = (game, lives) => {
  lives--;

  game = Object.assign({}, game, {lives});
  return game;
};

export const userAnswer = (game, answersArray, answerResult) => {

  switch (answerResult.correct) {
    case `false`:
      game = takeLife(game, game.lives);

      if (game.lives) {
        answersArray.push(Object.assign(
            {}, answerResult, {result: `next`}));
      }
      answersArray.push(Object.assign(
          {}, answerResult, {result: `end`}));

      return game;

    default:
      answersArray.push(Object.assign(
          {}, answerResult, {result: `next`}));

      return game;
  }
};
