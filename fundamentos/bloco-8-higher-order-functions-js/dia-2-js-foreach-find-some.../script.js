// Para fixar I
const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const showEmailList = (email) => {
  console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
};

emailListInData.forEach(showEmailList);
// Para fixar .find()
const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = () => numbers.find((element) => element % 3 === 0 && element % 5 === 0);

console.log(findDivisibleBy3And5())
// 02
const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
  return names.find((element) => {
    if (element.length === 5) {
      return element;
    }
  })
}

console.log(findNameWithFiveLetters());
// 03
const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]

function findMusic(id) {
  return musicas.find((element) => {
    if (element.id === id) {
      return element;
    }
  })
}

console.log(findMusic('31031685'));
//Para ficar .some() and .every()
const names = ['Mateus', 'José', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  return arr.some((element) => {
    if (element === name) {
      return true;
    }
    return false;
  })
}

console.log(hasName(names, 'Ana'))
// 02
const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 18 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minimumAge) => {
  return arr.every((element) => {
    if (element.age >= minimumAge) {
      return true;
    }
    return false;
  })
}

console.log(verifyAges(people, 18));
// Para fixar .sort()
const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

people.sort((a, b) => b.age -a.age);
console.log(people);
