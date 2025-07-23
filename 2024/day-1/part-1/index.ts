import { listOne, listTwo } from '../inputData';

const distanceList: number[] = []

function removeMinValueFromList(list: number[], minValue: number): void {
  const minValueIndex = list.indexOf(minValue);
  list.splice(minValueIndex, 1);
}

function getDistance(listOne: number[], listTwo: number[]): number {
  let distance = 0;
  const listOneMinValue: number = Math.min(...listOne);
  const listTwoMinValue: number = Math.min(...listTwo);

  if (listOneMinValue !== listTwoMinValue) {
    if (listOneMinValue < listTwoMinValue) {
      distance = listTwoMinValue - listOneMinValue;
    } else {
      distance = listOneMinValue - listTwoMinValue;
    }
  }
  removeMinValueFromList(listOne, listOneMinValue);
  removeMinValueFromList(listTwo, listTwoMinValue);

  return distance;
}

function sumAllDistance(): number {
  const distance = getDistance(listOne, listTwo);
  distanceList.push(distance);
  if (listOne.length === 0 || listTwo.length === 0) {
    return distanceList.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  }
  return sumAllDistance();
}

console.log(sumAllDistance());