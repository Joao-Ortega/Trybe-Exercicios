const fs = require('fs').promises;
const readline = require('readline');

const question = (message) => {
   const rl = readline.createInterface({
     input: process.stdin,
     output: process.stdout,
   });
   return new Promise((resolve) => {
     rl.question(message, (answer) => {
       rl.close();
       resolve(answer);
     })
   })
};

const replacingWord = async (content, fileName) => {
  console.log(fileName);
  const inputWord = await question('Digite a palavra que deseja mudar no arquivo escolhido: \n');
  const newWord = await question('Por qual palavra você quer substituí-la?:\n')
  const newData = content.replace(new RegExp(inputWord, 'g'), newWord);
  const saveWhere = await question('Qual o nome do arquivo para salvar a modificação?:\n');
  await fs.writeFile(`./${saveWhere}`, newData, {
    flag: 'w',
  }).then(d => console.log('Arquivo criado e escrito com sucesso!'))
  .catch(err => console.log('Error'));
}

const changingText = async () => {
  const FileToChange = await question('Qual arquivo você deseja alterar???: \n');
  try {
    const contentOfFile = await fs.readFile(FileToChange, 'utf-8');
    replacingWord(contentOfFile, FileToChange)
  } catch (err) {
    console.log('Infelizmente esse arquivo não existe');
  }
};

changingText();