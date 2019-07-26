'use strict';

// Use a 'for' loop
function repeatStringNumTimesWithFor(str, num) {
  // eslint-disable-next-line prefer-const
  let result = '';
  if (num < 0) {
    result += '';
  } else {
    for (let i = 0; i < num; i++) {
      result += str;
    }
  }
  return result;
}

console.log('for', repeatStringNumTimesWithFor('abc', 3));
console.log('for', repeatStringNumTimesWithFor('abc', -2));

// Use a 'while' loop
function repeatStringNumTimesWithWhile(str, num) {
  // eslint-disable-next-line prefer-const
  let result = '';
  let i = 0;
  if (num < 0) {
    result += '';
  } else {
    while (i < num) {
      i++;
      result += str;
    }
  }
  return result;
}

console.log('while', repeatStringNumTimesWithWhile('abc', 3));
console.log('while', repeatStringNumTimesWithWhile('abc', -3));

// Use a 'do...while' loop
function repeatStringNumTimesWithDoWhile(str, num) {
  // eslint-disable-next-line prefer-const
  let result = '';
  let i = 0;
  if (num <= 0) {
    result += '';
  } else {
    do {
      i++;
      result += str;
    } while (i < num);
  }
  return result;
}

console.log('do-while', repeatStringNumTimesWithDoWhile('abc', 3));
console.log('do-while', repeatStringNumTimesWithDoWhile('abc', -2));
console.log('do-while', repeatStringNumTimesWithDoWhile('abc', 0));

// Do not change or remove anything below this line
module.exports = {
  repeatStringNumTimesWithFor,
  repeatStringNumTimesWithWhile,
  repeatStringNumTimesWithDoWhile,
};
