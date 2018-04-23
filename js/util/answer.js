export const answer = (a) => {
  switch (a) {
    case `GAME OVER`:
      return `OVER`;

    case `WIN`:
      return `WIN`;

    case `LOSE`:
      return `LOSE`;

    default:
      return `something`;
  }
};

