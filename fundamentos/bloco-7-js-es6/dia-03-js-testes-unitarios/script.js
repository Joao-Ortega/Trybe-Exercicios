// Agora a prática
const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}
// 1
assert.equal(sum(4, 5), 9, 'The sum of 4 and 5 is 9!');
assert.equal(sum(0, 0), 0, 'The sum of 0 with 0 is 0!');
assert.notStrictEqual(sum(4, '5'), 9, 'The parameters must be numbers');
