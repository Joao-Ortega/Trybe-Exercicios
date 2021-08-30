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
// Tente criar uma função que exiba as habilidades do objeto student . Cada habilidade deve ser exibida no formato "Nome da habilidade, Nível: valor da chave referente à habilidade". 
const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

const skills = student => {
  const arrayOfObjects = Object.keys(student);
  for (index in arrayOfObjects) {
    console.log(`${arrayOfObjects[index]}, Nível: ${student[arrayOfObjects[index]]}`);
  }
}
skills(student1);