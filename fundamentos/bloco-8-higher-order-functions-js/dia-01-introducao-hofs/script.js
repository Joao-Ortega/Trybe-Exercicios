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
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
let points = 0;
const testIfAproval = (arr1, arr2) => {
  for (let index = 0; index < arr1.length; index += 1) {
    for (let index2 = 0; index2 < arr2.length; index2 += 1) {
      if (arr1[index] === arr2[index2]) {
        points += 1;
      } else if (arr1[index] !== arr2[index2]) {
        points - 0.5;
      } else if (arr2[index2] === 'N.A') {
        points;
      }
    }
  }
  return points;
}
const higherOrder = (template, check, callback) => {
  return `Gabarito: ${template}
  Respostas: ${check}
  Pontuação: ${callback(template, check)}`;
};

