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
}

async function start() {
  const fileName = await question('Digite o caminho do arquivo que deseja ler: ');
  try {
    const fileContent = await fs.readFile(fileName, 'utf-8');
    console.log(fileContent);
  } catch (err) {
    console.log('Arquivo inexistente');
  }
};

start();






// import * as readline from 'node:readline/promises';
// import { stdin as input, stdout as output } from 'node:process';
// const rl = readline.createInterface({ input, output });
// const answer = rl.question('Type something...');
// console.log(`You typed: ${answer}`);
// rl.close();