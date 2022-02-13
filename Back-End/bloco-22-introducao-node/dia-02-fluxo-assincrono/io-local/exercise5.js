const fs = require('fs').promises;
// 01
const arrPromises = () => {
  const arrStr = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];
  const writingFilesPromisses = arrStr.map((str, i) => {
    fs.writeFile(`file${i + 1}.txt`, str);
  })
};
// arrPromises();
// 02
const readingAndCreatingAll = () => {
  return Promise.all([
    fs.readFile('file1.txt'),
    fs.readFile('file2.txt'),
    fs.readFile('file3.txt'),
    fs.readFile('file4.txt'),
    fs.readFile('file5.txt'),
  ])
  .then(([arq1, arq2, arq3, arq4, arq5]) => {
    fs.writeFile('./fileAll.txt', `${arq1} ${arq2} ${arq3} ${arq4} ${arq5} :D`);
  })
  .catch((err) => console.log('Deu ruim meu parceiro'))
};
readingAndCreatingAll()
.then((d) => console.log(d))
.catch((err) => console.log(err));
