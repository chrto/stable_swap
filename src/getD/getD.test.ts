import getD from './getD';
import { expect as expectChai } from 'chai';
import { RowIn } from 'src/solution';

describe('Count corect D constant value', () => {
  const n: number = 2;
  it(`Should be '771.3605731620742' for specific input`, () => {
    const row: RowIn = {
      A: 82,
      x: 671.1,
      y: 102.97
    } as RowIn;

    getD(row).do({
      just: (result: RowIn) => {
        expectChai(Math.floor(result.d))
          .to.be.equal(771);

        const leftSide: number = (result.A * (n ** n) * (result.x + result.y)) + result.d;
        const rightSide: number = (result.A * result.d * (n ** n)) + ((result.d ** (n + 1)) / ((n ** n) * (result.x * result.y)));
        expectChai(Math.floor(leftSide))
          .to.be.equal(Math.floor(rightSide));
      },
      nothing: () => fail(`Nothing has not been expected`)
    });
  });

  it(`Should be '1313.4474272007883' for specific input`, () => {
    const row: RowIn = {
      A: 101,
      x: 365.48,
      y: 948.76
    } as RowIn;

    getD(row).do({
      just: (result: RowIn) => {
        expectChai(Math.floor(result.d))
          .to.be.equal(1313);

        const leftSide: number = (result.A * (n ** n) * (result.x + result.y)) + result.d;
        const rightSide: number = (result.A * result.d * (n ** n)) + ((result.d ** (n + 1)) / ((n ** n) * (result.x * result.y)));
        expectChai(Math.floor(leftSide))
          .to.be.equal(Math.floor(rightSide));
      },
      nothing: () => fail(`Nothing has not been expected`)
    });
  });

  it(`Should be '1509.4071356299917' for specific input`, () => {
    const row: RowIn = {
      A: 95,
      x: 570.41,
      y: 939.25
    } as RowIn;

    getD(row).do({
      just: (result: RowIn) => {
        expectChai(Math.floor(result.d))
          .to.be.equal(1509);

        const leftSide: number = (result.A * (n ** n) * (result.x + result.y)) + result.d;
        const rightSide: number = (result.A * result.d * (n ** n)) + ((result.d ** (n + 1)) / ((n ** n) * (result.x * result.y)));
        expectChai(Math.floor(leftSide))
          .to.be.equal(Math.floor(rightSide));
      },
      nothing: () => fail(`Nothing has not been expected`)
    });
  });

  it(`Should be '1190.1444776492638' for specific input`, () => {
    const row: RowIn = {
      A: 48,
      x: 136.18,
      y: 1062.93
    } as RowIn;

    getD(row).do({
      just: (result: RowIn) => {
        expectChai(Math.floor(result.d))
          .to.be.equal(1190);

        const leftSide: number = (result.A * (n ** n) * (result.x + result.y)) + result.d;
        const rightSide: number = (result.A * result.d * (n ** n)) + ((result.d ** (n + 1)) / ((n ** n) * (result.x * result.y)));
        expectChai(Math.floor(leftSide))
          .to.be.equal(Math.floor(rightSide));
      },
      nothing: () => fail(`Nothing has not been expected`)
    });
  });

  it(`Should be '850.0082355040084 ' for specific input`, () => {
    const row: RowIn = {
      A: 12,
      x: 11.19,
      y: 1084.65
    } as RowIn;

    getD(row).do({
      just: (result: RowIn) => {
        expectChai(Math.floor(result.d))
          .to.be.an('number')
          .which.is.equal(850);

        const leftSide: number = (result.A * (n ** n) * (result.x + result.y)) + result.d;
        const rightSide: number = (result.A * result.d * (n ** n)) + ((result.d ** (n + 1)) / ((n ** n) * (result.x * result.y)));

        expectChai(leftSide)
          .to.be.an('number');
        expectChai(rightSide)
          .to.be.an('number');
        expectChai(Math.floor(leftSide))
          .to.be.equal(Math.floor(rightSide));
      },
      nothing: () => fail(`Nothing has not been expected`)
    });
  });

  // it(`Should be '1190.1444776492638' for specific input`, () => {
  //   // 1,615.05,1500.32,217.02
  //   const row: RowIn = {
  //     A: 1,
  //     x: 615.05,
  //     y: 1500.32
  //   } as RowIn;

  //   getD(row).do({
  //     just: (result: RowIn) => {
  //       // expectChai(Math.floor(result.d))
  //       //   .to.be.equal(850);

  //       const leftSide: number = (result.A * (n ** n) * (result.x + result.y)) + result.d;
  //       const rightSide: number = (result.A * result.d * (n ** n)) + ((result.d ** (n + 1)) / ((n ** n) * (result.x * result.y)));
  //       expectChai(Math.floor(leftSide))
  //         .to.be.equal(Math.floor(rightSide));
  //     },
  //     nothing: () => fail(`Nothing has not been expected`)
  //   });
  // });

  // it(`Should be '1190.1444776492638' for specific input`, () => {
  //   // 1, ,583.42,195.04
  //   const row: RowIn = {
  //     A: 1,
  //     x: 26.66,
  //     y: 583.42
  //   } as RowIn;

  //   getD(row).do({
  //     just: (result: RowIn) => {
  //       // expectChai(Math.floor(result.d))
  //       //   .to.be.equal(850);

  //       const leftSide: number = (result.A * (n ** n) * (result.x + result.y)) + result.d;
  //       const rightSide: number = (result.A * result.d * (n ** n)) + ((result.d ** (n + 1)) / ((n ** n) * (result.x * result.y)));
  //       expectChai(Math.floor(leftSide))
  //         .to.be.equal(Math.floor(rightSide));
  //     },
  //     nothing: () => fail(`Nothing has not been expected`)
  //   });
  // });
});
