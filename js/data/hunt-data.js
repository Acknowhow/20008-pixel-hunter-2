const PHOTO = `photo`;
const PAINT = `paint`;

export const INITIAL_ANSWERS = [
  {time: 15, correct: `unknown`, result: ``},
  {time: 15, correct: `unknown`, result: ``},
  {time: 15, correct: `unknown`, result: ``},
  {time: 15, correct: `unknown`, result: ``},
  {time: 15, correct: `unknown`, result: ``},
  {time: 15, correct: `unknown`, result: ``},
  {time: 15, correct: `unknown`, result: ``},
  {time: 15, correct: `unknown`, result: ``},
  {time: 15, correct: `unknown`, result: ``},
  {time: 15, correct: `unknown`, result: ``}
];

export const answers = () => {
  const currentAnswers = [];

  for (const answer of INITIAL_ANSWERS) {
    currentAnswers.push(Object.assign({}, answer));
  }
  return currentAnswers;
};

export const SCORE_CORRECT = 100;
export const BONUS_SCORE = 50;
export const SCORE_PENALTY = -50;

export const TIME_FAST = 10;
export const TIME_SLOW = 20;

export const INITIAL_GAME = Object.freeze({
  type: `type-0`,
  screen: `screen-0`,
  lives: 3,
  time: 0
});

export const currentGame = Object.assign({}, INITIAL_GAME);
export const answersKey = [0];

export const NEXT_SCREEN = `NEXT SCREEN`;
export const NEXT_TYPE = `NEXT TYPE`;

export const END = `GAME OVER`;

export const Hunt = {
  'type-0': {
    'screen-0': {
      text: `Угадайте для каждого изображения фото или рисунок?`,
      options: [
        {
          question: `question1`,
          src: `http://i.imgur.com/5kcp9i0.jpg`,
          name: `Man bearded`,
          width: `468`,
          height: `458`,

          [PHOTO]: 0,
          [PAINT]: 1
        },
        {
          question: `question2`,
          src: `http://i.imgur.com/8aNXpLk.jpg`,
          name: `Morgan Freeman`,
          width: `468`,
          height: `458`,

          [PHOTO]: 1,
          [PAINT]: 0
        }
      ],
    },
    'screen-1': {
      text: `Угадайте для каждого изображения фото или рисунок?`,
      options: {
        option1: {
          question: `question1`,
          src: `http://i.imgur.com/PKtMBLt.jpg`,
          name: `Grandma Indian`,
          width: `468`,
          height: `458`,

          [PHOTO]: 1,
          [PAINT]: 0
        },
        option2: {
          question: `question2`,
          src: `http://i.imgur.com/aA3KkAW.jpg`,
          name: `Woman thoughtful`,
          width: `468`,
          height: `458`,

          [PHOTO]: 0,
          [PAINT]: 1
        }
      },
    },
    'screen-2': {
      text: `Угадайте для каждого изображения фото или рисунок?`,
      options: {
        option1: {
          question: `question1`,
          src: `https://i.imgur.com/7xx5YHZ.jpg`,
          name: `Mercedes`,
          width: `468`,
          height: `458`,

          [PHOTO]: 1,
          [PAINT]: 0
        },
        option2: {
          question: `question2`,
          src: `https://i.imgur.com/KbQm9NJ.jpg`,
          name: `Retro car`,
          width: `468`,
          height: `458`,

          [PHOTO]: 0,
          [PAINT]: 1
        }
      },
    },
    'screen-3': {
      text: {
        title: `Угадайте для каждого изображения фото или рисунок?`
      },
      options: {
        option1: {
          question: `question1`,
          src: `https://i.imgur.com/Br8HagL.jpg`,
          name: `Motel`,
          width: `468`,
          height: `458`,

          [PHOTO]: 1,
          [PAINT]: 0
        },
        option2: {
          question: `question2`,
          src: `https://i.imgur.com/oF5st69.jpg`,
          name: `Town`,
          width: `468`,
          height: `458`,

          [PHOTO]: 0,
          [PAINT]: 1
        }
      }
    }
  },

  'type-1': {
    'screen-0': {
      text: {
        title: `Угадай, фото или рисунок?`
      },
      options: {
        option1: {
          question: `question1`,
          src: `http://i.imgur.com/jX3HIry.jpg`,
          name: `Ethiopian girl`,
          width: `705`,
          height: `455`,

          [PHOTO]: 1,
          [PAINT]: 0
        }
      }
    },
    'screen-1': {
      text: {
        title: `Угадай, фото или рисунок?`
      },
      options: {
        option1: {
          question: `question1`,
          src: `http://i.imgur.com/27nbLSA.jpg`,
          name: `Girls sitting`,
          width: `705`,
          height: `455`,

          [PHOTO]: 0,
          [PAINT]: 1
        }
      }
    }
  },

  'type-2': {
    'screen-0': {
      text: {
        title: `Найдите рисунок среди изображений`
      },
      options: {
        option1: [
          {
            src: `http://i.imgur.com/LWFCQSK.jpg`,
            name: `Cheetah`,
            width: `304`,
            height: `455`,
            value: PAINT,

            [PHOTO]: 1,
            [PAINT]: 0
          },
          {
            src: `http://i.imgur.com/FA4D3kO.jpg`,
            name: `Lizard`,
            width: `304`,
            height: `455`,
            value: PAINT,

            [PHOTO]: 0,
            [PAINT]: 1
          },
          {
            src: `http://i.imgur.com/y9cN0UD.jpg`,
            name: `Figs`,
            width: `304`,
            height: `455`,
            value: PAINT,

            [PHOTO]: 1,
            [PAINT]: 0
          }
        ]
      }
    },

    'screen-1': {
      text: {
        title: `Найдите изображение среди рисунков`
      },
      options: {
        option1: [
          {
            src: `http://i.imgur.com/OI49pzH.jpg`,
            name: `Bumble bee`,
            width: `304`,
            height: `455`,
            value: PHOTO,

            [PHOTO]: 1,
            [PAINT]: 0
          },
          {
            src: `http://i.imgur.com/Sjjnuyi.jpg`,
            name: `Metal spheres`,
            width: `304`,
            height: `455`,
            value: PHOTO,

            [PHOTO]: 0,
            [PAINT]: 1
          },
          {
            src: `http://i.imgur.com/rvDgwaA.jpg`,
            name: `Watermelon`,
            width: `304`,
            height: `455`,
            value: PHOTO,

            [PHOTO]: 0,
            [PAINT]: 1
          }
        ]
      }
    },

    'screen-2': {
      text: {
        title: `Найдите рисунок среди изображений`
      },
      options: {
        option1: [
          {
            src: `http://i.imgur.com/Eb5bc8u.jpg`,
            name: `Books abstract`,
            width: `304`,
            height: `455`,
            value: PAINT,

            [PHOTO]: 1,
            [PAINT]: 0
          },
          {
            src: `https://i.imgur.com/9YXCXQ7.jpg`,
            name: `Woman underwater`,
            width: `304`,
            height: `455`,
            value: PAINT,

            [PHOTO]: 0,
            [PAINT]: 1
          },
          {
            src: `http://i.imgur.com/Spk7kTG.jpg`,
            name: `Mug`,
            width: `304`,
            height: `455`,
            value: PAINT,

            [PHOTO]: 1,
            [PAINT]: 0
          }
        ]
      }
    },

    'screen-3': {
      text: {
        title: `Найдите изображение среди рисунков`,
      },
      options: {
        option1: [
          {
            src: `https://i.imgur.com/tTqHG9m.jpg`,
            name: `Woman afrika`,
            width: `304`,
            height: `455`,
            value: PHOTO,

            [PHOTO]: 1,
            [PAINT]: 0
          },
          {
            src: `http://i.imgur.com/l8J6vbh.jpg`,
            name: `Woman showered`,
            width: `304`,
            height: `455`,
            value: PHOTO,

            [PHOTO]: 0,
            [PAINT]: 1
          },
          {
            src: `http://i.imgur.com/mgbDqkB.jpg`,
            name: `Pomegranate`,
            width: `304`,
            height: `455`,
            value: PHOTO,

            [PHOTO]: 0,
            [PAINT]: 1
          }
        ]
      }
    }
  }
};
