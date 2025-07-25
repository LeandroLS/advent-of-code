import { reportsList } from "../inputData.js";

function isIncreasing(
  lastNumber: number,
  currentNumber: number
): boolean {
  if (lastNumber > currentNumber) {
    return true;
  }
  return false;
}

function isReportNumbersSafe(reportNumbers: number[]): boolean {
  let isNumbersIncreasing: boolean = false;
  let isNumbersDecreasing: boolean = false;
  let isSafeReport: boolean = true;

  const unsafeNumber = reportNumbers.find((num, index) => {
    if (index === 0) {
      return;
    }
    if (isIncreasing(reportNumbers[index - 1], num)) {
      isNumbersIncreasing = true;
    }
    if (!isIncreasing(reportNumbers[index - 1], num)) {
      isNumbersDecreasing = true;
    }
    if (reportNumbers[index - 1] === num) {
      return true;
    }
    if (isNumbersIncreasing && isNumbersDecreasing) {
      return true;
    }
    const diff = Math.abs(reportNumbers[index - 1] - num);
    if (diff > 3) {
      return true;
    }
  });

  if (unsafeNumber) {
    isSafeReport = false;
  }

  return isSafeReport;
}

function countSafeReports(reportsList: string[]): number {
  return reportsList.map(report => report.split(" ").map(Number))
    .filter(isReportNumbersSafe).length
}

console.log(`The number of correct reports is: ${countSafeReports(reportsList)}`);

