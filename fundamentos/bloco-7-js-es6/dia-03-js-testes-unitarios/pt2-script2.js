const assert = require('assert');

const wordLengths = (arr) => {
  let wordCount = [];
  for (let index = 0; index < arr.length; index += 1) {
    wordCount.push(arr[index].length);
  }
  return wordCount;
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);