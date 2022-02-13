// const onlyNumbers = (a, b, c) => {
//   return new Promise((resolve, reject) => {
//     if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') reject('Informe apenas números');
//     const isBiggerThen50 = (a + b) * c;
//     if(isBiggerThen50 < 50) {
//       return reject('Valor muito baixo');
//     } else {
//       resolve(isBiggerThen50);
//     }
//   })
// };

// const randNumb = () => {
//   return Math.floor(Math.random() * 100) + 1;
// };
// onlyNumbers(randNumb(), randNumb(), randNumb())
// .then(resolve => console.log(resolve))
// .catch(error => console.log(error));

// onlyNumbers(5, 5, 6)
// .then(resolve => console.log(resolve))
// .catch(error => console.log(error));

// onlyNumbers('4', 8, 2)
// .then(result => console.log(result))
// .catch(err => console.log(err));

// onlyNumbers(2, 5, 1)
// .then(result => console.log(result))
// .catch(err => console.log(err));

// ASYNC / AWAIT => 
const onlyNumbers = (a, b, c) => {
  return new Promise((resolve, reject) => {
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') reject('Informe apenas números');
    const isBiggerThen50 = (a + b) * c;
    if(isBiggerThen50 < 50) {
      return reject('Valor muito baixo');
    } else {
      resolve(isBiggerThen50);
    }
  })
};

const randNumb = () => {
  return Math.floor(Math.random() * 100) + 1;
};
async function attempt() {
  try {
    const result = await onlyNumbers(randNumb(), randNumb(), randNumb());
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

attempt()