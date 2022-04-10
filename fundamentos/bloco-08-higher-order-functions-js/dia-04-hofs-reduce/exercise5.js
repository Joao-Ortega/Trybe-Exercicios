const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.reduce((acc, value) => acc + value.split('').filter((element) => (element.toLowerCase() === 'a')).length, 0)
}

assert.deepStrictEqual(containsA(), 20);