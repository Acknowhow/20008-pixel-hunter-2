export const nextParameter = (str) => {
  let [string, numeric] = str.split(`-`);
  numeric++;

  string = `${string}-${numeric}`;
  return string;
};

export const takeLife = (game, lives) => {
  lives--;

  game = Object.assign({}, game, {lives});
  return game;
};

export const tick = (game) => {
  const time = game.time + 1;

  return Object.assign({}, game, {
    time
  });
};

