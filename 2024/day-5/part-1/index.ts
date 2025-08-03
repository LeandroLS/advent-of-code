import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const data = readFileSync(join(__dirname, '../../../inputs/day5Input.txt'), 'utf8');
const splitedLists = data.split('\n\n');
const rulesList = splitedLists[0].split('\n');
const printedList = splitedLists[1].split('\n');
console.log(rulesList);
console.log(printedList);