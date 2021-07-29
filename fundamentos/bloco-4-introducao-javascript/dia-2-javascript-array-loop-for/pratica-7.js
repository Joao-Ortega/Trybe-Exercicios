let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let smallNumber = numbers[0];
for(let index = 0; index < numbers.length; index += 1) {
    if(numbers[index] < smallNumber) {
        smallNumber = numbers[index];
    } else {

    }
} console.log(smallNumber);

//Criar uma variável para armazenar o menor número
//Percorrer o array com for
//Descobrir qual o menor número e adicioná-lo a minha variável
//Imprimir minha variável