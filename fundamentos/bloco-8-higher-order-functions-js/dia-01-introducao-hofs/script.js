//Fazendo uma HOF!
const awaking = () => 'Acordando!!';

const breakFast = () => 'Bora tomar café!!';

const sleep = () => 'Partiu dormir!!';

const doingThings = (func) => func();

//Agora prática Exercícios
//01
const hiredPerson = (fullName) => {
  const emailName = fullName.split(' ').join('_');
  const object = {};
  object.nomeCompleto = fullName;
  object.email = `${emailName.toLowerCase()}@trybe.com`;
  return object;
};

const newEmployees = (func) => {
  const employees = {
    id1: func('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: func('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: func('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};
// 02
const playerNumber = 2;
const winCheck = (yourNumber, n) => {
  if (yourNumber === n) {
    return true;
  } else {
    return false;
  }
}
const hof = (playerNumber, func) => {
  const luckyNumber = Math.floor(Math.random() * 5) + 1;
  if (func(playerNumber, luckyNumber)) {
    return 'Parabéns você ganhou!';
  } else {
    return 'Tente novamente!';
  }
};
// 03
const RIGHT_ANSWERS =   ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
let points = 0;
const testIfAproval = (arr1, arr2) => {
  for (let index = 0; index < arr1.length; index += 1) {
      if (arr1[index] === arr2[index]) {
        points += 1;
      } else if (arr2[index] === 'N.A') {
        points = points;
      } else if (arr1[index] !== arr2[index]) {
        points -= 0.5;
      }
    }
    return points;
  }; 
 
const higherOrder = (template, check, callback) => {
  return `Gabarito: ${template}
  Respostas: ${check}
  Pontuação: ${callback(template, check)}`;
};
// bônus
const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };
// Dano Dragon
const dragonDamage = () => {
  const drgDamage = Math.floor(Math.random() * (50 - 15 + 1) + 15);
  return drgDamage;
};
// Dano Warrior
const warriorDamage = () => {
  const warrDamage = Math.floor(Math.random() * (60 - 30 + 1) + 30);
  return warrDamage;
};
// Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
const roundForMage = () => {
  const mageShift = {
    damage: Math.floor(Math.random() * (90 - 45 + 1) + 45),
    mana: 15,
  }
  if (mage.mana < 15) {
    mageShift.damage = 'You dont have enough mana!';
    mageShift.mana = 0;
    return mageShift;
  } else {
    return mageShift;
  }
};

const gameActions = {
  warriorShift: (warriorDamage) => {
    warrior.damage = warriorDamage();
    dragon.healthPoints -= warrior.damage;
  },
  playMage: (roundForMage) => {
    mage.damage = roundForMage().damage;
    mage.mana = roundForMage().mana;
    dragon.healthPoints -= mage.damage;
  },
  dragonShift: (dragonDamage) => {
    dragon.damage = dragonDamage();
    warrior.healthPoints -= dragonDamage();
    mage.healthPoints -= dragonDamage();
  },
  shiftUpdate: () => {
   return battleMembers;
  }
};
gameActions.warriorShift(warriorDamage);
gameActions.playMage(roundForMage);
gameActions.dragonShift(dragonDamage);
console.table(battleMembers);

