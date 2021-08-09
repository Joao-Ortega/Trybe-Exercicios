let names = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
function biggerName (names) {
let final = 0;
for(let index in names) {
    if(names[index] > names[final]) {
        final = names[index];
    }
}
 return final;
} console.log(biggerName(names));



/* Percorrer o arrar com for in
criar uma variável com valor 0 para comparação com o index que percorre o array de uma em uma posição para saber se a posição que está sendo percorrida é maior que o array na posição da minha variável
Se for adiciona o valor da posição na minha variável */