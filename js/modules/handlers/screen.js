import {INITIAL_GAME, NEXT_TYPE, END} from './../../data/hunt';

let answer;

const nextScreenParam = (str) => {
  let [string, numeric] = str.split(`-`);
  numeric++;

  string = string + `-` + `${numeric}`;
  return string;
};

const getNextType = (_gameObject, _huntData,
    nextType, initialScreen) => {

  if (!_huntData[nextType]) {

    answer.result = END;
    return answer.result;
  }

  answer.result = NEXT_TYPE;

  _gameObject = Object.assign(
      {}, _gameObject, {type: nextType},
      {screen: initialScreen});

  return _gameObject;
};

const getNextScreen = (gameObject, huntData,
    currentType, nextScreen, answersArray) => {

  if (!huntData[currentType][nextScreen]) {

    return getNextType(gameObject, huntData,
        nextScreenParam(gameObject.type),
        INITIAL_GAME.screen, answersArray);
  }

  gameObject = Object.assign(
      {}, gameObject, {screen: nextScreen});

  return gameObject;
};

export const centralContainer = document.querySelector(`.central`);

export const switchScreen = (game, data, type, answerKey, answers) => {
  answer = answers[answerKey];

  switch (answer.result) {

    case END:
      return END;

    default:
      return getNextScreen(
          game, data,
          type, nextScreenParam(game.screen), answers);

  }
};
