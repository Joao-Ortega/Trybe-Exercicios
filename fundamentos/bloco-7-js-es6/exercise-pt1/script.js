/* function testingScope(escopo) {
  if (escopo === true) {
    var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
    console.log(ifScope);
  } else {
    var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
  console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
} */

/* testingScope(true); */
// Parte 1 ex 1 Modificando código acima
const testingScope = escopo => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}
testingScope(true);
// ex 2
const oddsAndEvens = [ 4, 10,13, 3, 7, 2, 2, 12, 24];
// Estou declarando uma constante que recebe uma função, que ordena o Array oddsAndEvens, e essa função de ordenamento recebe como parâmetros 2 argumentos (que seria dois elementos do array oddsAndEvens) e faz a subtração de um com outro; sendo resultado positivo o primeiro número é maior
oddsAndEvens.sort((a, b) => a-b);
 
console.log(oddsAndEvens); // será necessário alterar essa linha 😉