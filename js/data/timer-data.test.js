import {assert} from 'chai';
import {expect} from 'chai';

import makeTimer from '../util/timer';

const createdTimer = makeTimer(5);

describe(`Test series for timer function`, () => {

  it(`Should return timer object`, () => {
    expect(createdTimer).to.be.an(`object`);
  });

  it(`Should only accept number values`, () => {

    assert.throws(() => makeTimer({}),
        /Time value should be of number type/);
    assert.throws(() => makeTimer([1, 4]),
        /Time value should be of number type/);
    assert.throws(() => makeTimer(`123`),
        /Time value should be of number type/);
  });

  it(
      `Should have tick property that decreases time by 1`,
      () => {
        expect(createdTimer.tick()).to.equal(4);
        expect(createdTimer.tick()).to.equal(3);
        expect(createdTimer.tick()).to.equal(2);
      });

  it(
      `Should indicate when time runs out`,
      () => {
        expect(makeTimer(1).tick()).to.equal(`Time is up`);
      });
});

