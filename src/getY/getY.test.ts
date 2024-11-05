import getY from './getY';
import { expect as expectChai } from 'chai';
import { RowIn } from 'src/solution';

describe('The pool exchanges the xToken tokens for the yToken tokens', () => {
  it(`Should return prev value yToken, if 0 xToken tokens has been added`, () => {
    const row: RowIn = {
      d: 1509.4092459909666,
      A: 95,
      x: 570.41,
      y: 939.25,
      'exchange x': 0,
      exchangeValue: 0
    };
    getY(row)
      .do({
        just: (result: RowIn) => {
          expectChai(Math.round(result.y * 100) / 100)
            .to.be.equal(row.y);
          expectChai(result.x)
            .to.be.equal(row.x);
        },
        nothing: () => fail(`Nothing has not been expected`)
      });
  });

  it(`Should return prev value yToken, if 0 xToken tokens has been added`, () => {
    const row: RowIn = {
      d: 771.3605731620742,
      A: 82,
      x: 671.1,
      y: 102.97,
      'exchange x': 0,
      exchangeValue: 0
    };
    getY(row)
      .do({
        just: (result: RowIn) => {
          expectChai(Math.round(result.y * 100) / 100)
            .to.be.equal(row.y);
          expectChai(result.x)
            .to.be.equal(row.x);
        },
        nothing: () => fail(`Nothing has not been expected`)
      });
  });

  it(`Should return new value yToken, if new xToken tokens has been added`, () => {
    const row: RowIn = {
      d: 1509.4092459909666,
      A: 95,
      x: 570.41,
      y: 939.25,
      'exchange x': 95.09,
      exchangeValue: 94.757185
    };
    getY(row)
      .do({
        just: (result: RowIn) => {
          expectChai(Math.round(result.y * 100) / 100)
            .to.be.equal(row.y - 94.95);
          expectChai(result.x)
            .to.be.equal(row.x + row.exchangeValue);
        },
        nothing: () => fail(`Nothing has not been expected`)
      });
  });

  it(`Should return new value yToken, if new xToken tokens has been added`, () => {
    const row: RowIn = {
      d: 771.3605731620742,
      A: 82,
      x: 671.1,
      y: 102.97,
      'exchange x': 800.16,
      exchangeValue: 797.36
    };
    getY(row)
      .do({
        just: (result: RowIn) => {
          expectChai(Math.round(result.y * 100) / 100)
            .to.be.equal(Math.round((row.y - 102.63) * 100) / 100);
          expectChai(result.x)
            .to.be.equal(row.x + row.exchangeValue);
        },
        nothing: () => fail(`Nothing has not been expected`)
      });
  });
});
