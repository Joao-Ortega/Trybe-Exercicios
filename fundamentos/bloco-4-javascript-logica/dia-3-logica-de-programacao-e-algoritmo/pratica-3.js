//Percorrer n com um for começando de 1;(index)
//Fazer outro for para começar com n-1 espaços vazios, sendo >= 1, decremento de 1 em 1;(index2)
//blankSpace = " ";
//Terceiro for começando 1 <= (index), incrementando de 1 em 1;
//astLine = "*"

let n = 5;
let ast = '*';
let blankSpace = '';
let saida = n;

for (let index = 0; index < n; index += 1) {
  for (let index2 = 0; index2 <= n; index2 += 1) {
    if (index2 < saida) {
      blankSpace = blankSpace + ' ';
    } else {
      blankSpace = blankSpace + ast;
    }
  }
  console.log(blankSpace);
  blankSpace = '';
  saida -= 1;
};
