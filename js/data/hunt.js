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

        [PHOTO]: `false`,
        [PAINT]: `true`
      },
      Option2: {
        src: `http://i.imgur.com/8aNXpLk.jpg`,
        name: `Morgan Freeman`,

        [PHOTO]: `true`,
        [PAINT]: `false`
      }
    },
    'screen-1': {
      Option1: {
        src: `http://i.imgur.com/PKtMBLt.jpg`,
        name: `Grandma Indian`,

        [PHOTO]: `true`,
        [PAINT]: `false`
      },
      Option2: {
        src: `http://i.imgur.com/aA3KkAW.jpg`,
        name: `Woman thoughtful`,

        [PHOTO]: `false`,
        [PAINT]: `true`
      }
    }
  },

  'type-1': {
    'screen-0': {
      Option1: {
        src: `http://i.imgur.com/jX3HIry.jpg`,
        name: `Ethiopian girl`,

        [PHOTO]: `true`,
        [PAINT]: `false`
      }
    },
    'screen-1': {
      Option2: {
        src: `http://i.imgur.com/27nbLSA.jpg`,
        name: `Girls sitting`,

        [PHOTO]: `false`,
        [PAINT]: `true`
      }
    }
  },

  'type-2': {
    'screen-0': {
      Option1: [
        {
          src: `http://i.imgur.com/LWFCQSK.jpg`,
          name: `Cheetah`,

          [PHOTO]: `true`,
          [PAINT]: `false`
        },
        {
          src: `http://i.imgur.com/FA4D3kO.jpg`,
          name: `Lizard`,

          [PHOTO]: `false`,
          [PAINT]: `true`
        },
        {
          src: `http://i.imgur.com/y9cN0UD.jpg`,
          name: `Figs`,

          [PHOTO]: `false`,
          [PAINT]: `true`
        }
      ],

      Option2: [
        {
          src: `http://i.imgur.com/OI49pzH.jpg`,
          name: `Bumble bee`,

          [PHOTO]: `true`,
          [PAINT]: `false`
        },
        {
          src: `http://i.imgur.com/Sjjnuyi.jpg`,
          name: `Metal spheres`,

          [PHOTO]: `false`,
          [PAINT]: `true`
        },
        {
          src: `http://i.imgur.com/rvDgwaA.jpg`,
          name: `Watermelon`,

          [PHOTO]: `false`,
          [PAINT]: `true`
        }
      ]
    },

    'screen-1': {
      Option1: [
        {
          src: `http://i.imgur.com/Eb5bc8u.jpg`,
          name: `Books abstract`,

          [PHOTO]: `true`,
          [PAINT]: `false`
        },
        {
          src: `http://i.imgur.com/Sjjnuyi.jpg`,
          name: `Metal spheres`,

          [PHOTO]: `false`,
          [PAINT]: `true`
        },
        {
          src: `http://i.imgur.com/Spk7kTG.jpg`,
          name: `Mug`,

          [PHOTO]: `false`,
          [PAINT]: `true`
        }
      ],

      Option2: [
        {
          src: `http://i.imgur.com/OI49pzH.jpg`,
          name: `Bumble bee`,

          [PHOTO]: `true`,
          [PAINT]: `false`
        },
        {
          src: `http://i.imgur.com/l8J6vbh.jpg`,
          name: `Woman showered`,

          [PHOTO]: `false`,
          [PAINT]: `true`
        },
        {
          src: `http://i.imgur.com/mgbDqkB.jpg`,
          name: `Pomegranate`,

          [PHOTO]: `false`,
          [PAINT]: `true`
        }
      ]
    },
  }
};


