
const { guessNumb, isPlayingAnother } = require('./questions');
const readlineSync = require('readline-sync');

const game = () => {
  const randomNumb = Math.floor(Math.random() * 10) + 1;
  const guestNumber = guessNumb();
  if (guestNumber === randomNumb) {
    console.log(`Congrats, right number!\n Your number: ${guestNumber} Number to guess: ${randomNumb}`);
  } else {
    console.log(`Try again\n Your number: ${guestNumber} Number to guess: ${randomNumb}`);
  }
  const anotherOne = isPlayingAnother();
  if (anotherOne) {
    game()
  } else {
    console.log('Thanks for playing');
  }
};

game();