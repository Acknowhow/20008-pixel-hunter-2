import {END} from './../../data/hunt';

let answer = [];
const nextScreenParam = (str) => {
  let [string, numeric] = str.split(`-`);
  numeric++;

  string = string + `-` + `${numeric}`;
  return string;
};

export const getNextType = (_gameObject, _huntData,
    nextType, initialScreen) => {

  if (_huntData[nextType][initialScreen]) {

    _gameObject = Object.assign(
        {}, _gameObject, {type: nextType}, {screen: initialScreen});

    return _gameObject;
  }
  return END;
};


const getNextScreen = (gameObject, huntData,
    currentType, nextScreen) => {

  if (!huntData[currentType][nextScreen]) {
    return `Can't get next screen`;
  }

  gameObject = Object.assign(
      {}, gameObject, {screen: nextScreen});

  return gameObject;
};


export const switchScreen = (game, data, type, answers) => {
  answer = answers.pop();

  answers.push(answer);
  switch (answer.result) {

    case END:
      return END;

    default:
      return getNextScreen(
          game, data,
          type, nextScreenParam(game.screen));

  }
};
