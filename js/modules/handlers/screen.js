import {INITIAL_GAME, END} from './../../data/hunt';

let answer = [];
const nextScreenParam = (str) => {
  let [string, numeric] = str.split(`-`);
  numeric++;

  string = string + `-` + `${numeric}`;
  return string;
};

const getNextType = (_gameObject, _huntData,
    nextType, initialScreen, _userAnswers) => {

  if (!_huntData[nextType][initialScreen]) {
    answer.result = END;
    _userAnswers.push(answer);
  }
  _userAnswers.push(answer);

  _gameObject = Object.assign(
      {}, _gameObject, {type: nextType},
      {screen: initialScreen});

  return _gameObject;
};


const getNextScreen = (gameObject, huntData,
    currentType, nextScreen, _answers) => {

  if (!huntData[currentType][nextScreen]) {


    return getNextType(gameObject, huntData,
        nextScreenParam(gameObject.type),
        INITIAL_GAME.screen, _answers);
  }
  _answers.push(answer);

  gameObject = Object.assign(
      {}, gameObject, {screen: nextScreen});

  return gameObject;
};


export const switchScreen = (game, data, type, answers) => {
  answer = answers.pop();

  switch (answer.result) {

    case END:
      answers.push(answers);
      return END;

    default:
      return getNextScreen(
          game, data,
          type, nextScreenParam(game.screen), answers);

  }
};
