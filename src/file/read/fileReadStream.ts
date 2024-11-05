import { createReadStream, ReadStream } from 'fs';
import { INPUT_FILE } from 'src/setings';

export default (): ReadStream =>
  createReadStream(INPUT_FILE);
