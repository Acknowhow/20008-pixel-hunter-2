// Expects answer object
// Deducts life if the answer was wrong
import {NEXT, END} from './../../data/hunt';
const takeLife = (game, lives) => {
  lives--;

  game = Object.assign({}, game, {lives});
  return game;
};

export default (game, answersArray, answerResult) => {

  switch (answerResult.correct) {
    case `false`:
      game = takeLife(game, game.lives);

      if (game.lives) {
        answersArray.push(Object.assign(
            {}, answerResult, {result: NEXT}));
      }
      answersArray.push(Object.assign(
          {}, answerResult, {result: END}));

      return game;

    default:
      answersArray.push(Object.assign(
          {}, answerResult, {result: NEXT}));

      return game;
  }
};
