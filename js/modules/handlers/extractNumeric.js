export const extractNumeric = (str) => {
  let [, numeric] = str.split(`-`);
  numeric = +numeric;

  return numeric;
};
