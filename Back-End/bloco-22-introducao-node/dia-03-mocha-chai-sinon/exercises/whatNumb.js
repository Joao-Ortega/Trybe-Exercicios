const funcNumb = (n) => {
  if (n > 0) {
    return 'positivo';
  }
  if (n === 0) {
    return 'neutro';
  }
  if (n < 0) {
    return 'negativo';
  }
  if (typeof n !== Number) {
    return 'O valor deve ser um número';
  }
};
module.exports = funcNumb;