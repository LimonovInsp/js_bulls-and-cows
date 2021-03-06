'use strict';

/**
 * Implement bullsAndCows function:
 *
 * Function takes 2 strings: generatedNumber (generated by computer) and
 * enteredNumber (entered by player) and returns count of bulls and cows
 * according to rules (see readme.md). Each parameter should be exactly 4 digits
 * long.
 *
 * Function returns result as object with properties 'bulls' and 'cows' where
 * 'result.bulls' is a count of bulls and result.cows is a count of cows.
 *
 * If wrong parameter enteredNumber is given function returns undefined.
 *
 * bullsAndCows('1234', '1345') === [1, 2]
 * bullsAndCows('1234', '1234') === [4, 0]
 * bullsAndCows('1234', '') === undefined
 * bullsAndCows('1234', '12') === undefined
 * bullsAndCows('1234', 'asdf') === undefined
 * bullsAndCows('1234', '1234567890') === undefined
 *
 * @param {string} generatedNumber - generated by computer
 * @param {string} enteredNumber - entered by a player
 *
 * @return {object} - like {bulls: 0, cows: 0}
 */
function bullsAndCows(generatedNumber, enteredNumber) {
  const enteredSet = enteredNumber ? new Set([...enteredNumber]) : '';

  if (generatedNumber.length !== enteredSet.size) {
    return undefined;
  }

  let countOfBulls = 0;
  let countOfCows = 0;

  for (let i = 0; i < generatedNumber.length; i++) {
    if (generatedNumber[i] === enteredNumber[i]) {
      countOfBulls++;
    } else if (enteredNumber.includes(generatedNumber[i])) {
      countOfCows++;
    }
  }

  return {
    bulls: countOfBulls,
    cows: countOfCows,
  };
}

module.exports = bullsAndCows;
