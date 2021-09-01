// Agora a prática
const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}
// 1
assert.equal(sum(4, 5), 9);
assert.equal(sum(0, 0), 0);
assert.strictEqual(sum(4, '5'), 9,);
console.log(sum(4, '5'));