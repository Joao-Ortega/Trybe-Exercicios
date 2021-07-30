let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let arrayNumerosMultiplicados = [];

for(let index = 0; index < numbers.length; index += 1) {
    for(var secondIndex = 1; secondIndex < numbers.length; secondIndex += 1) {
        arrayNumerosMultiplicados.push(numbers[index] * numbers[secondIndex]);
        index += 1;
    }
    if(secondIndex >= numbers.length) {
        arrayNumerosMultiplicados.push(numbers[index] * 2);
    }
} console.log(arrayNumerosMultiplicados);

//Percorrer o array numbers pegando a primeira posição;
//Percorrer o array numbers pegando a segunda posição;
//Multiplicar a primeira posição com a segunda e armazenar com .push no novo array;
//Fazer com que volte para o primeiro for ou outra opção;
// caso seja a última posição e a segunda posição dê false, multiplique o valor do primeiro for por 2 e armazene também no novo array;
