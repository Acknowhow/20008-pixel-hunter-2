// Expects answer object
// Deducts life if the answer was wrong
import {NEXT_SCREEN, END} from './../../data/hunt-data';

let answer;
const takeLife = (game, lives) => {
  lives--;

  game = Object.assign({}, game, {lives});
  return game;
};

export default (game, answerKey, answers) => {
  answer = answers[answerKey];

  switch (answer.correct) {
    case `false`:
      game = takeLife(game, game.lives);

      if (game.lives >= 0) {
        answer.result = NEXT_SCREEN;
      } else {
        answer.result = END;
      }

      return game;

    default:
      answer.result = NEXT_SCREEN;

      return game;
  }
};
