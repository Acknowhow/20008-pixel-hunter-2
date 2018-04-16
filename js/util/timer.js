const makeTimer = (time) => {
  if (typeof time !== `number`) {

    throw new Error(`Time value should be of number type`);
  }
  return {

    time,
    tick() {

      if (this.time === 1) {
        return this.reset();
      }

      this.time--;
      return this.time;
    },

    reset() {
      return `Time is up`;
    }
  };
};

export default makeTimer;

