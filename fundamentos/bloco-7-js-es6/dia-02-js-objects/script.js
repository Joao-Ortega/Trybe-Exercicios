//Agora, para praticar, crie uma função que receba três parâmetros, sendo eles: um objeto, o nome de uma chave e o seu valor. O retorno dessa função deve ser o objeto já com a nova chave adicionada nele.
const pessoa1 = {
  name : 'João',
  age : 24,
}

const addToObject = (obj, newKey, valueKey) => {
  return obj[newKey] = valueKey;
}
addToObject(pessoa1, 'nacionalidade', 'Brasileiro');
console.log(pessoa1);