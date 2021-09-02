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
  if (yourNumber === n){
    return true;
  } else {
    return false;
  }
}
const hof = (playerNumber, func) => {
  const luckyNumber = Math.floor(Math.random() * 5) + 1;
  if (func(playerNumber, luckyNumber)){
    return 'Parabéns você ganhou!';
  } else {
    return 'Tente novamente!';
  }
};
