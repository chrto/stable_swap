import { RowIn } from 'src/solution';
import { Maybe } from 'tsmonad';

const FEE_RATE_PERCENT: number = 0.35;

export default (row: RowIn): Maybe<RowIn> =>
  !!row['exchange x']
    ? Maybe.just({
      ...row,
      exchangeValue: row['exchange x'] * (100 - FEE_RATE_PERCENT) / 100
    })
    : Maybe.nothing();




