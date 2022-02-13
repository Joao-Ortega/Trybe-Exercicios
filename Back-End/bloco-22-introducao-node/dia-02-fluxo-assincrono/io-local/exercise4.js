const fs = require('fs').promises;
// 01
const readFileFunc = async () => {
  try {
    const leitura = await JSON.parse(fs.readFileSync('./simpsons.json'));
    const printNames = leitura.map((el) => `${el.id} - ${el.name}`);
    console.log(printNames);
  } catch(err) {
    console.log(err);
  }
};
// 02
const simpsonId = (id) => {
  return new Promise((resolve, reject) => {
    const leitura = JSON.parse(fs.readFileSync('./simpsons.json'));
    if (!leitura.some((el) => el.id === id)) {
      reject('Id não encontrado!');
    } else {
      const personagem = leitura.find((el) => el.id === id);
      resolve(personagem);
    }
  });
};

// simpsonId('10')
// .then(data => console.log(data))
// .catch(err => console.log(err));
// 03
const changingSimpsonsContent = async () => {
  const originalFile = await fs.readFile('./simpsons.json', 'utf-8')
  .then((data) => JSON.parse(data));
  const changedFile = originalFile.filter((el) => el.id !== '10' && el.id !== '6');
  fs.writeFile('./simpsons.json', JSON.stringify(changedFile));
};

// changingSimpsonsContent()
// .then(resolve => console.log('Arquivo alterado com sucesso'))
// .catch(err => console.log(err));
// 04
const creatingNewFile = async () => {
  const simpFile = await fs.readFile('./simpsons.json', 'utf-8')
  .then((data) => JSON.parse(data));
  console.log(simpFile);
  const idNeeded = simpFile.filter((el) => el.id === '1' || el.id === '2' || el.id === '3' || el.id === '4');
  console.log(idNeeded);
  await fs.writeFile('./simpsonFamily.json', JSON.stringify(idNeeded));
};

// creatingNewFile()
// .then(d => console.log(d))
// .catch(error => console.log(error))
// 05
const changingSimpFamily = async () => {
  const simpFile = await fs.readFile('./simpsons.json', 'utf-8')
  .then(data => JSON.parse(data));
  simpFile.push({ id: '8', name: 'Nelson Muntz' });
  await fs.writeFile('./simpsonFamily.json', JSON.stringify(simpFile));
};
// changingSimpFamily()
// .then(d => console.log(d))
// .catch(err => console.log(err));
// 06
const replacing = async () => {
  const origFile = await fs.readFile('./simpsonFamily.json', 'utf-8')
  .then((resp) => JSON.parse(resp));
  const changingMember = origFile.map((el) => el.name === 'Nelson Muntz' ? { id: '5', name: 'Maggie Simpson' } : el);
  await fs.writeFile('./simpsonFamily.json', JSON.stringify(changingMember));
};

replacing()
.then((d) => console.log(d))
.catch((err) => console.log(err));

