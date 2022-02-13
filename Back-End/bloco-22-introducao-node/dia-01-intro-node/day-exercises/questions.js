const readlineSync = require('readline-sync');

const askWeight = () => {
  return readlineSync.questionFloat("What's your weight\n");
}

const askHeight = () => {
  return readlineSync.questionInt("What's your height in cm...\n");
}

const distance = () => {
  return readlineSync.questionInt('Put the distance in meters\n');
}

const time = () => {
  return readlineSync.questionInt('Put the velocity of the car in seconds\n');
}

const guessNumb = () => {
  return readlineSync.questionInt('Try to guess a number between 0 and 10, Good Luck\n')
}

const isPlayingAnother = () => {
  return readlineSync.keyInYN('Do you want to play more? Y for yes and N for No');
}

module.exports = {
  askHeight,
  askWeight,
  distance,
  time,
  guessNumb,
  isPlayingAnother,
}