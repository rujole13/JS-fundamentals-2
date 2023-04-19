"use strict";
/*
const calcAverage = (value1, value2, value3) => (value1 + value2 + value3) / 3;

const dolphinsAverage1 = calcAverage(44, 23, 71);
const koalasAverage1 = calcAverage(65, 54, 49);

const dolphinsAverage2 = calcAverage(85, 54, 41);
const koalasAverage2 = calcAverage(23, 34, 27);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins win ${avgDolphins} - ${avgKoalas}!`);
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`Koalas win ${avgKoalas} - ${avgDolphins}!`);
  } else {
    console.log(
      `There is no winner! Dolphins: ${avgDolphins} Koalas: ${avgKoalas}`
    );
  }
}

checkWinner(dolphinsAverage1, koalasAverage1);
checkWinner(dolphinsAverage2, koalasAverage2);
*/

const bills = [125, 555, 44];

const calcTip = function (bill) {
  if (bill >= 50 && bill <= 300) {
    return bill * 0.15;
  } else {
    return bill * 0.2;
  }
};

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);
