// Exercise IMC
const { askHeight, askWeight } = require('./questions');
const imcFunc = require('./imc');

const WEIGHT = askWeight();
const HEIGHT = askHeight();

const result = () => {
  const t = imcFunc(HEIGHT, WEIGHT);
  if (t < 18.5) {
    console.log('Situação: Abaixo do peso (magreza)');
    return;
  }
  if (t >= 18.5 && t < 25) {
    console.log('Situação: Peso normal');
    return;
  }
  if (t >= 25 && t < 30) {
    console.log('Situação: Acima do peso (sobrepeso)');
    return;
  }
  if (t >= 30 && t < 35) {
    console.log('Situação: Obesidade grau I');
    return;
  }
  if (t >= 35 && t < 40) {
    console.log('Situação: Obesidade grau II');
    return;
  }
  console.log('Situação: Obesidade graus III e IV');
}

console.log(`Your IMC is => ${imcFunc(HEIGHT, WEIGHT).toFixed(2)}` );
console.log(result());
