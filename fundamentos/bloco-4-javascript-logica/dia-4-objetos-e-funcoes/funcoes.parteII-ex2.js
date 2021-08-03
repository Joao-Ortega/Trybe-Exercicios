/* Criar uma função que receba uma lista de números
percorrer essa lista com um for começando de 0 
comparar o index que está percorrendo com minha variável inicial
Se for maior, atibuir a minha variável
Imprimir minha variável*/
let arrayTest = [2, 3, 6, 7, 10, 1];
function maiorIndice (arrayTest) {
    let higherNumber = 0
for(let index in arrayTest) {
    if(arrayTest[index] > arrayTest[higherNumber]  ) {
        higherNumber = index;
    }
}  
return higherNumber
}  console.log(maiorIndice(arrayTest));