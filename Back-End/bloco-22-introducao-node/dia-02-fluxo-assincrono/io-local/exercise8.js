const fizzBuzz = (num) => {
  if (num <= 0) return console.log('Insira um númeor válido');
  return new Promise((resolve, reject) => {
    if (num % 3 === 0 && num % 5 === 0) {
      resolve('FizzBuzz');
    } else if (num % 3 === 0) {
      resolve('Fizz');
    } else if (num % 5 === 0) {
      resolve('Buzz')
    } else {
      reject(num);
    }
  })
};

console.log(fizzBuzz(15)); 
fizzBuzz(1).catch(console.error); // Deve escrever "1" no console
fizzBuzz(3).then(console.log); // Deve escrever "Fizz" no console
fizzBuzz(5).then(console.log); // Deve escrever "Buzz" no console
fizzBuzz(15).then(console.log); // Deve escrever "FizzBuzz" no console