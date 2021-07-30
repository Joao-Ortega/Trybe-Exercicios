/* Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo: */
//Criar uma variável com asterisco;
//imprimir essa variável n vezes;
//Imprimir essa linha n vezes;
let n = 8;
let linhaAsterisco = '*'
for(let count = 1; count <= n; count += 1){
    linhaAsterisco += '*';
} for(let count2 = 1; count2 <= n; count2 += 1) {
    console.log(linhaAsterisco);
}

