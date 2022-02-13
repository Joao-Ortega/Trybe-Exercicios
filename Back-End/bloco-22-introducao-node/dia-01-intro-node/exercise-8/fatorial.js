const readline = require('readline-sync');

const fact = () => {
  const numb = readline.questionInt('Escolha um número inteiro maior que 0\n');
  let numbFact = numb;
  if (numb <= 0) {
    console.log('Número inválido');
  } else {
    for(let i = numb - 1; i > 0; i -= 1) {
      numbFact *= i;
    }
    console.log(numbFact);
  }
};

fact();