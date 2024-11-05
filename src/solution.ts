import { parse, format } from 'fast-csv';
import deductFee from 'src/deductFee/deductFee';
import getD from 'src/getD/getD';
import getY from 'src/getY/getY';
import validateInput from 'src/validateInput/validateInput';
import fileWriteStream from './file/write/fileWriteSteam';
import fileReadStream from './file/read/fileReadStream';

export interface RowIn {
  A: number;
  x: number;
  y: number;
  d?: number;
  'exchange x': number;
  exchangeValue?: number;
  exchangeResult?: number;
}

export interface RowOut {
  'exchange y': number;
}

export default () => {
  fileReadStream()
    .pipe(parse({ headers: true }))
    .on('error', error => console.error(error))
    .on('end', (rowCount: number) => console.log(`\nProcessed ${rowCount} rows`))
    .pipe(format<RowIn, RowOut>({ headers: true }))
    .on('error', error => console.error(error))
    .transform((poolState: RowIn, next): void => {
      validateInput(poolState)
        // .do({ just: console.log })
      .bind(deductFee)
        .bind(getD)
        .bind(getY)
        .do({
          just: (newState: RowIn) => {
            return next(null, {
              'exchange y': Math.round((poolState.y - newState.y) * 100) / 100
            });
          },
          nothing: () => {
            return next(null, { 'exchange y': -1 });
          }
        });
    })
    .pipe(fileWriteStream());
  // .pipe(process.stdout);
};
