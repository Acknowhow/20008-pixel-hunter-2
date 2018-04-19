export const initialState = {
  type: 1,
  screen: 0,
  level: 0,
  lives: 3,
  time: 0
};

export const answers = [
  {correct: true, time: 9},
  {correct: false, time: 22},
  {correct: true, time: 10},
  {correct: true, time: 20},
  {correct: true, time: 9},
  {correct: false, time: 22},
  {correct: false, time: 10},
  {correct: true, time: 20},
  {correct: true, time: 4},
  {correct: true, time: 8},
];

const PHOTO = `photo`;
const PAINT = `paint`;

const PHOTO_1 = `photo_1`;
const PAINT_1 = `paint_1`;

export const question = {
  'type_0': {
    'screen_0': {
      [PAINT]: {
        src: `http://i.imgur.com/5kcp9i0.jpg`,
        name: `Man bearded`
      },
      [PHOTO]: {
        src: `http://i.imgur.com/8aNXpLk.jpg`,
        name: `Morgan Freeman`
      }
    },
    'screen_1': {
      [PHOTO]: {
        src: `http://i.imgur.com/PKtMBLt.jpg`,
        name: `Grandma Indian`
      },
      [PAINT]: {
        src: `http://i.imgur.com/aA3KkAW.jpg`,
        name: `Woman thoughtful`
      }
    }
  },

  'type_1': {
    'screen_0': {
      [PHOTO]: {
        src: `http://i.imgur.com/jX3HIry.jpg`,
        name: `Ethiopian girl`
      }
    },
    'screen_1': {
      [PAINT]: {
        src: `http://i.imgur.com/27nbLSA.jpg`,
        name: `Girls sitting`
      }
    }
  },

  'type_2': {
    'screen_0': {
      [PHOTO_1]: {
        src: `http://i.imgur.com/LWFCQSK.jpg`,
        name: `Cheetah`
      },
      [PAINT]: {
        src: `http://i.imgur.com/FA4D3kO.jpg`,
        name: `Lizard`
      },
      [PHOTO_2]: {
        src: `http://i.imgur.com/y9cN0UD.jpg`,
        name: `Figs`
      }
    },
    'screen_1': {
      [PHOTO]: {
        src: `http://i.imgur.com/OI49pzH.jpg`,
        name: `Bumble bee`
      },
      [PAINT_1]: {
        src: `http://i.imgur.com/Sjjnuyi.jpg`,
        name: `Metal spheres`
      },
      [PAINT_2]: {
        src: `http://i.imgur.com/rvDgwaA.jpg`,
        name: `Watermelon`
      },
    }
  }
};

