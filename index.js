// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

function returnFirstTwoDrivers() {
  const newFirstTwoDriversArray = [drivers[0], drivers[1]];
  return newFirstTwoDriversArray;
}

function returnLastTwoDrivers() {
  const newLastTwoDriversArray = [drivers[2], drivers[3]];
  return newLastTwoDriversArray;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (fareMultiplier) {
  return function (num) {
    return fareMultiplier * num;
  }
}

const fareDoubler =(fare) => {
    return fare * 2};

const fareTripler  =(fare) => {
    return fare * 3};

function selectDifferentDrivers(drivers , returnFirstTwoDrivers){
return returnFirstTwoDrivers()
}