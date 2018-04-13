import {assert} from 'chai';

const calculate = (answers, lives) => {

  if (!Array.isArray(answers)) {
    throw new Error(`Answers should be of array type`);
  }

  if (typeof lives !== `number`) {
    throw new Error(`Lives should be of number type`);
  }

  if (lives < 0) {
    throw new Error(`Lives should not be negative`);
  }

  return true;
};

describe(`Test data types for a take off`, () => {

  it(`Should accept answers of array type
and lives of number type`, () => {

        assert(calculate([1, 2, 4], 3), true);
        assert(calculate([], 3), true);
      });

  it(`Should not accept any other data types 
other than array as first argument`, () => {

        assert.throws(() => calculate(1, 2),
            /Answers should be of array type/);
        assert.throws(() => calculate(`1`, 2),
            /Answers should be of array type/);
      });

  it(`Should not accept any other data types 
other than number as second argument`, () => {

        assert.throws(() => calculate([], []),
            /Lives should be of number type/);
        assert.throws(() => calculate([], `2`),
            /Lives should be of number type/);
      });

  it(`Should not accept negative lives`, () => {

    assert.throws(() => calculate([], -1),
        /Lives should not be negative/);
  });
});
