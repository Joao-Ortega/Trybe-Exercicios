const assert = require('assert');
const greetPeople = (people) => {
  let greeting = 'Hello ';
  let arrayWithGreeeting = [];
  for (const person in people) {
    arrayWithGreeeting.push(greeting + people[person]);
  }
  return arrayWithGreeeting;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];
assert.deepStrictEqual(greetPeople(parameter), result);
