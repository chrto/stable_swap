import { createWriteStream, WriteStream } from 'fs';
import { OUT_FILE } from 'src/setings';

export default (): WriteStream =>
  createWriteStream(OUT_FILE)
    .on('open', (_: number) => {
      console.log(`File has been opened for writing.`);
    })
    .on('close', () => {
      console.log(`File has been closed.`);
    })
    .on('end', () => {
      console.log('end event has been fired (writer)');
    });
