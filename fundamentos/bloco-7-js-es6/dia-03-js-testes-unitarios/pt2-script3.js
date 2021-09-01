const assert = require('assert');

const sumAllNumbers = arr => {
  let totalSum = 0;
  for (let index = 0; index < arr.length; index +=1) {
    totalSum += arr[index];
  }
  return totalSum;
}

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);