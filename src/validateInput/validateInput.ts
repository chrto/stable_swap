import { RowIn } from 'src/solution';
import { Maybe } from 'tsmonad';

export type Predicate<T> = (input: T) => boolean;

const makeSure = <T> (predicate: Predicate<T>) =>
  (val: T): Maybe<T> =>
    predicate(val) ?
      Maybe.just(val) :
      Maybe.nothing();

const isNumeric = (v: any): boolean => !isNaN(v);

export default (row: RowIn): Maybe<RowIn> =>
  makeSure((row: RowIn) => isNumeric(row.A))(row)
    .bind(makeSure((row: RowIn) => isNumeric(row.x)))
    .bind(makeSure((row: RowIn) => isNumeric(row.y)))
    .bind(makeSure((row: RowIn) => isNumeric(row['exchange x'])))
    .lift((row: RowIn) => ({
      A: Number(row.A),
      x: Number(row.x),
      y: Number(row.y),
      'exchange x': Number(row['exchange x'])
    }));
