import fs from 'fs';
import readline from 'readline';
import { isFinite } from 'lodash';

const rl = readline.createInterface({
  input: fs.createReadStream('./input.txt'),
});

let overAllSum = 0;
let folderSum = 0;

rl.on('line', (line) => {
  if (line === '') {
    console.log('this is an empty string');
  }
  //an empty line or a command means we do our math
  if (line.startsWith('$') || line === '') {
    if (folderSum <= 10000) {
      overAllSum += folderSum;
    }
    folderSum = 0;
    return;
  }

  const [maybeNumber] = line.split(' ');
  const maybeNumberNumber = parseInt(maybeNumber);
  if (isFinite(maybeNumberNumber)) {
    // console.log(maybeNumberNumber);
    folderSum += maybeNumberNumber;
  }
});

rl.on('close', () => {
  console.log('done');
  console.log(overAllSum);
});
