//Fazendo uma HOF!
const awaking = () => 'Acordando!!';

const breakFast = () => 'Bora tomar café!!';

const sleep = () =>  'Partiu dormir!!';

const doingThings = (func) => func();

//Agora prática Exercícios
//01
const hiredPerson = (fullName) => {
  const emailName = fullName.split(' ').join('_');
  const object = {};
  object.nomeCompleto = fullName;
  object.email = `${emailName.toLowerCase()}@trybe.com`;
  return object;
} 
console.log(hiredPerson('João Pedro'));

const newEmployees = () => {
  const employees = {
    id1: hiredPerson('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2:  hiredPerson('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3:  hiredPerson('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
}; console.log(newEmployees());