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


export const HUNT = {
  'type-0': {
    'screen-0': {
      Option1: {
        src: `http://i.imgur.com/5kcp9i0.jpg`,
        name: `Man bearded`,

        [PHOTO]() {
          return 0;
        },

        [PAINT]() {
          return 1;
        }
      },
      Option2: {
        src: `http://i.imgur.com/8aNXpLk.jpg`,
        name: `Morgan Freeman`,

        [PHOTO]() {
          return 1;
        },

        [PAINT]() {
          return 0;
        }
      }
    },
    'screen-1': {
      Option1: {
        src: `http://i.imgur.com/PKtMBLt.jpg`,
        name: `Grandma Indian`,

        [PHOTO]() {
          return 1;
        },

        [PAINT]() {
          return 0;
        }
      },
      Option2: {
        src: `http://i.imgur.com/aA3KkAW.jpg`,
        name: `Woman thoughtful`,

        [PHOTO]() {
          return 0;
        },

        [PAINT]() {
          return 1;
        }
      }
    }
  },

  'type-1': {
    'screen-0': {
      Option1: {
        src: `http://i.imgur.com/jX3HIry.jpg`,
        name: `Ethiopian girl`,
        [PHOTO]() {
          return 1;
        },

        [PAINT]() {
          return 0;
        }
      }
    },
    'screen-1': {
      Option2: {
        src: `http://i.imgur.com/27nbLSA.jpg`,
        name: `Girls sitting`,
        [PHOTO]() {
          return 0;
        },

        [PAINT]() {
          return 1;
        }
      }
    }
  },

  'type-2': {
    'screen-0': {
      Option1: [
        {
          src: `http://i.imgur.com/LWFCQSK.jpg`,
          name: `Cheetah`,

          [PHOTO]() {
            return 1;
          },

          [PAINT]() {
            return 0;
          }
        },
        {
          src: `http://i.imgur.com/FA4D3kO.jpg`,
          name: `Lizard`,

          [PHOTO]() {
            return 0;
          },

          [PAINT]() {
            return 1;
          }
        },
        {
          src: `http://i.imgur.com/y9cN0UD.jpg`,
          name: `Figs`,

          [PHOTO]() {
            return 1;
          },

          [PAINT]() {
            return 0;
          }
        }
      ],

      Option2: [
        {
          src: `http://i.imgur.com/OI49pzH.jpg`,
          name: `Bumble bee`,

          [PHOTO]() {
            return 1;
          },

          [PAINT]() {
            return 0;
          }
        },
        {
          src: `http://i.imgur.com/Sjjnuyi.jpg`,
          name: `Metal spheres`,

          [PHOTO]() {
            return 0;
          },

          [PAINT]() {
            return 1;
          }
        },
        {
          src: `http://i.imgur.com/rvDgwaA.jpg`,
          name: `Watermelon`,

          [PHOTO]() {
            return 0;
          },

          [PAINT]() {
            return 1;
          }
        }
      ]
    },

    'screen-1': {
      Option1: [
        {
          src: `http://i.imgur.com/Eb5bc8u.jpg`,
          name: `Books abstract`,

          [PHOTO]() {
            return 1;
          },

          [PAINT]() {
            return 0;
          }
        },
        {
          src: `http://i.imgur.com/Sjjnuyi.jpg`,
          name: `Metal spheres`,

          [PHOTO]() {
            return 0;
          },

          [PAINT]() {
            return 1;
          }
        },
        {
          src: `http://i.imgur.com/Spk7kTG.jpg`,
          name: `Mug`,

          [PHOTO]() {
            return 1;
          },

          [PAINT]() {
            return 0;
          }
        }
      ],

      Option2: [
        {
          src: `http://i.imgur.com/OI49pzH.jpg`,
          name: `Bumble bee`,

          [PHOTO]() {
            return 1;
          },

          [PAINT]() {
            return 0;
          }
        },
        {
          src: `http://i.imgur.com/l8J6vbh.jpg`,
          name: `Woman showered`,

          [PHOTO]() {
            return 0;
          },

          [PAINT]() {
            return 1;
          }
        },
        {
          src: `http://i.imgur.com/mgbDqkB.jpg`,
          name: `Pomegranate`,

          [PHOTO]() {
            return 0;
          },

          [PAINT]() {
            return 1;
          }
        }
      ]
    },
  }
};


