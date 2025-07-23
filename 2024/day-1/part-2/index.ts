import { listOne, listTwo } from '../inputData';

const similarityScoreList: number[] = []

function removeMinValueFromList(list: number[], minValue: number): void {
  const minValueIndex = list.indexOf(minValue);
  list.splice(minValueIndex, 1);
}

function getSimilarityScore(listOne: number[], listTwo: number[]): number {
  const listOneValue = listOne[0];
  const foundValues = listTwo.filter((value) => listOneValue === value);
  removeMinValueFromList(listOne, listOneValue);
  return listOneValue * foundValues.length;
}

function sumAllSimilarityScore(): number {
  const distance = getSimilarityScore(listOne, listTwo);
  similarityScoreList.push(distance);
  if (listOne.length === 0) {
    return similarityScoreList.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  }
  return sumAllSimilarityScore();
}

console.log(sumAllSimilarityScore());