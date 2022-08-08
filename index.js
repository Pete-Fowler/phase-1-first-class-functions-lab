const returnFirstTwoDrivers = (arr) => {
  return [arr[0], arr[1]];
}

const returnLastTwoDrivers = (arr) => {
  return [arr[2], arr[3]];
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (factor) => {
  return (fare) => fare * factor;
}
const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (arr, fn) => {
  return fn(arr);
}