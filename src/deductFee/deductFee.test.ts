import deductFee from './deductFee';
import { expect as expectChai } from 'chai';
import { RowIn } from 'src/solution';

describe('The pool deducts 0.35% fee from the incoming x tokens.', () => {
  it(`Should exchange 99.65 token, if 100 has been send.`, () => {
    const input: RowIn = {
      'exchange x': 100
    } as RowIn;
    const expected: RowIn = {
      ...input,
      exchangeValue: 99.65
    };

    deductFee(input)
      .do({
        just: (result: RowIn) => {
          expectChai(result.exchangeValue)
            .to.be.equal(expected.exchangeValue);
        },
        nothing: () => fail(`Nothing has not been expected`)
      });
  });

  it(`Should exchange 94.757185 token, if 95.09 has been send.`, () => {
    const input: RowIn = {
      'exchange x': 95.09
    } as RowIn;
    const expected: RowIn = {
      ...input,
      exchangeValue: 94.757185
    };

    deductFee(input)
      .do({
        just: (result: RowIn) => {
          expectChai(result.exchangeValue)
            .to.be.equal(expected.exchangeValue);
        },
        nothing: () => fail(`Nothing has not been expected`)
      });
  });

  it(`Should exchange 797.36 token, if 800.16 has been send.`, () => {
    const input: RowIn = {
      'exchange x': 800.16
    } as RowIn;
    const expected: RowIn = {
      ...input,
      exchangeValue: 797.36
    };

    deductFee(input)
      .do({
        just: (result: RowIn) => {
          expectChai(Math.round(result.exchangeValue * 100) / 100)
            .to.be.equal(expected.exchangeValue);
        },
        nothing: () => fail(`Nothing has not been expected`)
      });
  });

  it(`Should return Maybe with nothing, if 'exchange x' has not been specified.`, () => {
    const input: RowIn = {
    } as RowIn;

    deductFee(input)
      .do({
        just: () => fail(`Just has not been expected`),
        nothing: () => { }
      });
  });
});
