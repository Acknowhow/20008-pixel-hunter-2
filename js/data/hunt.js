export const INITIAL_GAME = {
  type: `type-0`,
  screen: `screen-0`,
  lives: 3,
  time: 0
};

export const currentGame = Object.assign({}, INITIAL_GAME);

export const answers = [];

export const NEXT = `NEXT SCREEN`;
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
      option2: {
        src: `http://i.imgur.com/27nbLSA.jpg`,
        name: `Girls sitting`,

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

          [PHOTO]: 1,
          [PAINT]: 0
        },
        {
          src: `http://i.imgur.com/FA4D3kO.jpg`,
          name: `Lizard`,

          [PHOTO]: 0,
          [PAINT]: 1
        },
        {
          src: `http://i.imgur.com/y9cN0UD.jpg`,
          name: `Figs`,

          [PHOTO]: 0,
          [PAINT]: 1
        }
      ],

      option2: [
        {
          src: `http://i.imgur.com/OI49pzH.jpg`,
          name: `Bumble bee`,

          [PHOTO]: 1,
          [PAINT]: 0
        },
        {
          src: `http://i.imgur.com/Sjjnuyi.jpg`,
          name: `Metal spheres`,

          [PHOTO]: 0,
          [PAINT]: 1
        },
        {
          src: `http://i.imgur.com/rvDgwaA.jpg`,
          name: `Watermelon`,

          [PHOTO]: 0,
          [PAINT]: 1
        }
      ]
    },

    'screen-1': {
      option1: [
        {
          src: `http://i.imgur.com/Eb5bc8u.jpg`,
          name: `Books abstract`,

          [PHOTO]: 1,
          [PAINT]: 0
        },
        {
          src: `http://i.imgur.com/Sjjnuyi.jpg`,
          name: `Metal spheres`,

          [PHOTO]: 0,
          [PAINT]: 1
        },
        {
          src: `http://i.imgur.com/Spk7kTG.jpg`,
          name: `Mug`,

          [PHOTO]: 0,
          [PAINT]: 1
        }
      ],

      option2: [
        {
          src: `http://i.imgur.com/OI49pzH.jpg`,
          name: `Bumble bee`,

          [PHOTO]: 1,
          [PAINT]: 0
        },
        {
          src: `http://i.imgur.com/l8J6vbh.jpg`,
          name: `Woman showered`,

          [PHOTO]: 0,
          [PAINT]: 1
        },
        {
          src: `http://i.imgur.com/mgbDqkB.jpg`,
          name: `Pomegranate`,

          [PHOTO]: 0,
          [PAINT]: 1
        }
      ]
    },
  }
};


