import {INITIAL_GAME, END} from './../../data/hunt';

let answer = [];
const nextScreenParam = (str) => {
  let [string, numeric] = str.split(`-`);
  numeric++;

  string = string + `-` + `${numeric}`;
  return string;
};

const getNextType = (_gameObject, _huntData,
    nextType, initialScreen) => {

  if (!_huntData[nextType][initialScreen]) {
    return `GAME OVER`;
  }

  _gameObject = Object.assign(
      {}, _gameObject, {type: nextType}, {screen: initialScreen});

  return _gameObject;
};


const getNextScreen = (gameObject, huntData,
    currentType, nextScreen) => {

  if (!huntData[currentType][nextScreen]) {


    return getNextType(gameObject, huntData,
        nextScreenParam(gameObject.type), INITIAL_GAME.screen);
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
