import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const data = readFileSync(join(__dirname, '../../../inputs/day3Input.txt'), 'utf8');
const complexRegex = /(mul\((\d{1,3}),(\d{1,3})\)|do\(\)|don't\(\))/g;
const matches = Array.from(data.matchAll(complexRegex));

let enabled = true;
let sum = 0;

for (const match of matches) {
  if (match[0].startsWith('mul(')) {
    const num1 = parseInt(match[2], 10);
    const num2 = parseInt(match[3], 10);
    if (enabled) {
      sum += num1 * num2;
    }
    continue;
  }
  if (match[0] === 'do()') {
    enabled = true;
  } else if (match[0] === "don't()") {
    enabled = false;
  }
}

console.log(sum);