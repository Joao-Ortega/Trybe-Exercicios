let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let totalOfOdd = 0;
for(let index = 0; index < numbers.length; index += 1) {
    if(numbers[index] % 2 !== 0) {
        totalOfOdd += 1
    } else {
    } 
}   if(totalOfOdd > 0) {
    console.log(totalOfOdd);
} else {
    console.log("Nenhum valor ímpar encontrado");
}
/*declarar variável para armazenar quantos ímpares tem
percorrer o array com um for
fazer um if para saber quantos são ímpares e armazená-los na variável criada
imprimir a variável criada*/