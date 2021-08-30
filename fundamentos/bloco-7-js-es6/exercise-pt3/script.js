const button = document.querySelector('#click-btn');
const numberOfClicks = document.querySelector('#number-of-clicks');
let clicks = 0
const counter = () => {
  clicks += 1;
  numberOfClicks.innerHTML = clicks;
  if (clicks === 100) {
    alert(`Congratulations! Don't You have nothing to do in your life?`)
  } else if (clicks === 500) {
    alert(`OMG! Stop please!`);
  }  
}

button.addEventListener('click', counter);

// exercise 3
let string = "Tryber x aqui!";
const replaceX = text => {
  let newString = string.replace('x', `${text}`);
  return newString;
}; console.log(replaceX('Bebeto'));
// Um array com escopo global, que é o escopo do arquivo JS , nesse caso, contendo cinco strings com suas principais skills .
let mainSkills = ['HTML', 'JS', 'CSS', 'GIT', 'SoftSkills'];
// Função 2 : Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string .
const greeting = returnOfAFunction => {
  let hello = `${returnOfAFunction} Minhas cinco principais habilidades são:${mainSkills.sort()}`;
  return hello;
}; console.log(greeting(replaceX('João')));