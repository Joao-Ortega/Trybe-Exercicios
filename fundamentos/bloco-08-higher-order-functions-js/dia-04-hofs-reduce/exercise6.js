const assert = require('assert');

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
  const notes = grades.map((value) => value.reduce((acc, element) => acc += element, 0))
  return students.map((element, index) =>
  ({
    name: element,
    average: (notes[index] / grades[index].length),
  })
  )
}
console.log(studentAverage());
const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

assert.deepStrictEqual(studentAverage(), expected);