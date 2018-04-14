import {assert} from 'chai';
import {expect} from 'chai';

const answersArray = [];
for (let i = 10; i > 0; i--) {
  answersArray.push(i);
}

const calculate = (answers, lives) => {

  if (!Array.isArray(answers)) {
    throw new Error(`Answers should be of array type`);
  }

  if (answers.length !== 10) {
    return -1;
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

        assert.strictEqual(calculate(answersArray, 3), true);
        assert.strictEqual(calculate(answersArray, 101), true);
      });

  it(`Should not accept any other data types 
other than array as first argument`, () => {

        assert.throws(() => calculate(1, 2),
            /Answers should be of array type/);
        assert.throws(() => calculate(`1`, 2),
            /Answers should be of array type/);
      });

  it(`Should fail if answers.length < 10`, () => {
    expect(calculate(answersArray.slice(4), 1)).to.equal(-1);
  });

  it(`Should not accept any other data types 
other than number as second argument`, () => {

        assert.throws(() => calculate(answersArray, []),
            /Lives should be of number type/);
        assert.throws(() => calculate(answersArray, `2`),
            /Lives should be of number type/);
      });

  it(`Should not accept negative lives`, () => {

    assert.throws(() => calculate(answersArray, -1),
        /Lives should not be negative/);
  });
});
