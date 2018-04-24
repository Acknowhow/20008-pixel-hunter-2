import {assert} from 'chai';
import {expect} from 'chai';

import {calculate} from '../util/score';

let answers = [
  {correct: true, time: 10},
  {correct: false, time: 10},
  {correct: false, time: 10},
  {correct: true, time: 10},
  {correct: false, time: 10},
  {correct: false, time: 10},
  {correct: false, time: 10},
  {correct: false, time: 10},
  {correct: false, time: 10},
  {correct: false, time: 10}
];

describe(`Test data types for a take off`, () => {

  it(`Should accept answers of array type
and lives of number type`, () => {

        expect(calculate(answers, 3)).to.be.a(`number`);
        expect(calculate(answers, 101)).to.be.a(`number`);
      });

  it(`Should not accept any other data types 
other than array as first argument`, () => {

        assert.throws(() => calculate(1, 2),
            /Answers should be of array type/);
        assert.throws(() => calculate(`1`, 2),
            /Answers should be of array type/);
      });

  it(`Should fail if answers.length < 10`, () => {
    expect(calculate(answers.slice(4), 1)).to.equal(-1);
  });

  it(`Should not accept any other data types 
other than number as second argument`, () => {

        assert.throws(() => calculate(answers, []),
            /Lives should be of number type/);
        assert.throws(() => calculate(answers, `2`),
            /Lives should be of number type/);
      });

  it(`Should not accept negative lives`, () => {

    assert.throws(() => calculate(answers, -1),
        /Lives should not be negative/);
  });
});
