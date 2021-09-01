const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}
const number = 15;
assert.deepStrictEqual(myFizzBuzz(number), 'fizzbuzz');
const nine = 9;
assert.deepStrictEqual(myFizzBuzz(nine), 'fizz');
const ten = 10;
assert.deepStrictEqual(myFizzBuzz(ten), 'buzz');
const seven = 7;
assert.deepStrictEqual(myFizzBuzz(seven), seven);
const name = 'João';
assert.deepStrictEqual(myFizzBuzz(name), false);
