const readline = require('readline-sync');

const fibFunc = () => {
  const arrFib = [0, 1];
  const n = readline.questionInt('Choose a number\n');
  if (n === 1) {
    arrFib.shift();
    console.log(arrFib);
  } else if (n === 2) {
    console.log([1, 1]);
  } else if (n > 2) {
    for(let i = 2; i <= n; i += 1) {
      arrFib[i] = arrFib[arrFib.length - 1] + arrFib[arrFib.length - 2];
    }
    arrFib.shift();
    console.log(arrFib);
  } else {
    console.log('Número inválido');
  }
};
fibFunc();