import { RowIn } from 'src/solution';
import { Maybe } from 'tsmonad';

const MAX_RECURSION: number = 255;
const PRECISION: number = 0.001;
const N_TOKENS: number = 2;

const dCalculation = (sumToken: number, prodToken: number, a: number, prevD: number, iterations: number = MAX_RECURSION): Maybe<number> => {
  // Convergence typically occurs in 4 rounds or less, this should be unreachable!
  // if it does happen the pool is borked.
  if (iterations === 0)
    return Maybe.nothing();

  const d: number = ((a * (N_TOKENS ** N_TOKENS) * sumToken) - ((prevD ** (N_TOKENS + 1)) / ((N_TOKENS ** N_TOKENS) * prodToken))) / (a * (N_TOKENS ** N_TOKENS) - 1);
  if (Math.abs(d - prevD) > PRECISION)
    return dCalculation(sumToken, prodToken, a, d, iterations - 1);

  return Maybe.just(d);
};

export default (row: RowIn): Maybe<RowIn> =>
  dCalculation(row.x + row.y, row.x * row.y, row.A, row.x + row.y)
    .lift((d: number): RowIn => ({
      ...row,
      d
    }));

// export default (row: RowIn): Maybe<RowIn> => {
//   const sum: number = row.x + row.y;
//   const prod: number = row.x * row.y;
//   let iterations: number = 0;
//   let d: number = sum;
//   let prevD: number;
//   while (true) {
//     prevD = d;
//     if (iterations === MAX_RECURSION) {
//       return Maybe.nothing();
//     }
//     d = ((row.A * (N_TOKENS ** N_TOKENS) * sum) - ((prevD ** (N_TOKENS + 1)) / ((N_TOKENS ** N_TOKENS) * prod))) / (row.A * (N_TOKENS ** N_TOKENS) - 1);
//     if (Math.abs(d - prevD) < PRECISION)
//       return Maybe.just({ ...row, d });

//     iterations++;
//   }
// };
