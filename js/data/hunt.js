export const nextParameter = (str) => {
  let [string, numeric] = str.split(`-`);
  numeric++;

  string = `${string}-${numeric}`;
  return string;
};

