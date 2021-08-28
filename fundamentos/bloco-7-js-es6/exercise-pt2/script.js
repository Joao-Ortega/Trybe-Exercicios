/* Crie uma função que receba um número e retorne seu fatorial.
Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha usando ternary operator . */
const n = 4;
let result = 1;
const factorial = n => {
    for(let index = 1; index <= n; index += 1) {
      result = result * index;
    }
    return result;
  } 
  console.log(factorial(4));
// Recursiva
  const n1 = 5;
const recursiva = n1 => (n1 > 0) ? (n1 * recursiva(n1-1)) : 1;
console.log(recursiva(n1));
