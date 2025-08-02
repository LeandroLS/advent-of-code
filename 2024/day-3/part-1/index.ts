import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const data = readFileSync(join(__dirname, '../../../inputs/day3Input.txt'), 'utf8');
const mulRegex = /mul\((\d{1,3}),(\d{1,3})\)/g;
const mulsMatches = data.matchAll(mulRegex)
  .map(match => {
    const num1 = Number(match[1]);
    const num2 = Number(match[2]);
    return num1 * num2;
  })
  .reduce((acc, curr) => acc + curr, 0);
console.log(mulsMatches);