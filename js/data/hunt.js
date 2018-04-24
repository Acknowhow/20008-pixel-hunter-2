export const INITIAL_GAME = {
  type: `type-0`,
  screen: `screen-0`,
  lives: 3,
  time: 0
};

export const currentGame = Object.assign({}, INITIAL_GAME);
export const answers = [];

export const NEXT_SCREEN = `NEXT SCREEN`;
export const NEXT_TYPE = `NEXT TYPE`;

export const END = `GAME OVER`;

const PHOTO = `photo`;
const PAINT = `paint`;

export const Hunt = {
  'type-0': {
    'screen-0': {
      option1: {
        question: `question1`,
        src: `http://i.imgur.com/5kcp9i0.jpg`,
        name: `Man bearded`,
        width: `468`,
        height: `458`,

        [PHOTO]: 0,
        [PAINT]: 1
      },
      option2: {
        question: `question2`,
        src: `http://i.imgur.com/8aNXpLk.jpg`,
        name: `Morgan Freeman`,
        width: `468`,
        height: `458`,

        [PHOTO]: 1,
        [PAINT]: 0
      }
    },
    'screen-1': {
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

  'type-1': {
    'screen-0': {
      option1: {
        question: `question1`,
        src: `http://i.imgur.com/jX3HIry.jpg`,
        name: `Ethiopian girl`,
        width: `705`,
        height: `455`,

        [PHOTO]: 1,
        [PAINT]: 0
      }
    },
    'screen-1': {
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
  },

  'type-2': {
    'screen-0': {
      option1: [
        {
          src: `http://i.imgur.com/LWFCQSK.jpg`,
          name: `Cheetah`,
          width: `304`,
          height: `455`,

          [PHOTO]: 1,
          [PAINT]: 0
        },
        {
          src: `http://i.imgur.com/FA4D3kO.jpg`,
          name: `Lizard`,
          width: `304`,
          height: `455`,

          [PHOTO]: 0,
          [PAINT]: 1
        },
        {
          src: `http://i.imgur.com/y9cN0UD.jpg`,
          name: `Figs`,
          width: `304`,
          height: `455`,

          [PHOTO]: 0,
          [PAINT]: 1
        }
      ],
    },

    'screen-1': {
      option1: [
        {
          src: `http://i.imgur.com/OI49pzH.jpg`,
          name: `Bumble bee`,
          width: `304`,
          height: `455`,

          [PHOTO]: 1,
          [PAINT]: 0
        },
        {
          src: `http://i.imgur.com/Sjjnuyi.jpg`,
          name: `Metal spheres`,
          width: `304`,
          height: `455`,

          [PHOTO]: 0,
          [PAINT]: 1
        },
        {
          src: `http://i.imgur.com/rvDgwaA.jpg`,
          name: `Watermelon`,
          width: `304`,
          height: `455`,

          [PHOTO]: 0,
          [PAINT]: 1
        }
      ]
    },

    'screen-2': {
      option1: [
        {
          src: `http://i.imgur.com/Eb5bc8u.jpg`,
          name: `Books abstract`,
          width: `304`,
          height: `455`,

          [PHOTO]: 1,
          [PAINT]: 0
        },
        {
          src: `http://i.imgur.com/Sjjnuyi.jpg`,
          name: `Metal spheres`,
          width: `304`,
          height: `455`,

          [PHOTO]: 0,
          [PAINT]: 1
        },
        {
          src: `http://i.imgur.com/Spk7kTG.jpg`,
          name: `Mug`,
          width: `304`,
          height: `455`,

          [PHOTO]: 0,
          [PAINT]: 1
        }
      ]
    },

    'screen-3': {
      option1: [
        {
          src: `http://i.imgur.com/OI49pzH.jpg`,
          name: `Bumble bee`,
          width: `304`,
          height: `455`,

          [PHOTO]: 1,
          [PAINT]: 0
        },
        {
          src: `http://i.imgur.com/l8J6vbh.jpg`,
          name: `Woman showered`,
          width: `304`,
          height: `455`,

          [PHOTO]: 0,
          [PAINT]: 1
        },
        {
          src: `http://i.imgur.com/mgbDqkB.jpg`,
          name: `Pomegranate`,
          width: `304`,
          height: `455`,

          [PHOTO]: 0,
          [PAINT]: 1
        }
      ]
    }
  }
};
