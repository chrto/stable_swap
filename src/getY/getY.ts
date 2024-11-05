import { RowIn } from 'src/solution';
import { Maybe } from 'tsmonad';

const MAX_RECURSION: number = 100;
const PRECISION: number = 0.001;
const N_TOKENS: number = 2;

const yCalculation = (xToken: number, d: number, a: number, yTokenPrev: number, iterations: number = MAX_RECURSION): Maybe<number> => {
  if (iterations === 0)
    return Maybe.nothing();

  const c: number = (d ** 3) / (a * N_TOKENS ** (2 * N_TOKENS) * xToken);
  const b = xToken + (d / (a * N_TOKENS ** N_TOKENS)) - d;

  const yToken: number = ((yTokenPrev ** 2) + c) / ((2 * yTokenPrev) + b);

  if (Math.abs(yToken - yTokenPrev) > PRECISION)
    return yCalculation(xToken, d, a, yToken, iterations - 1);

  return Maybe.just(yToken);
};

export default (row: RowIn): Maybe<RowIn> =>
  yCalculation(row.exchangeValue + row.x, row.d, row.A, row.d)
    .lift((y: number): RowIn => ({
      ...row, y,
      x: row.exchangeValue + row.x
    }));

