const sum = require('./exercicio1.js');
const myRemove = require('./exercicio2');
const myRemoveWithoutCopy = require('./exercicio3.js');
const myFizzBuzz = require('./exercicio4.js');
const { obj1, obj2, obj3 } = require('./exercicio5.js');

describe('1. Verifica se a função retorna a soma de dois números', () => {
  it('Se a função receber como parâmetro 2 e 6, deverá retornar 8', () => {
    expect(sum(2, 6)).toBe(8);
  })
  it('A mensagem de erro deverá ser (parameters must be numbers)', () => {
    expect(() => { sum(4, '5') }).toThrow(new Error('parameters must be numbers'))
  })
})
describe('2. Verifica se a função ao receber dois parâmetros retorna uma cópia do array sem o elemento passado como parâmetro', () => {
  it('Verifica se a função recebendo os seguintes parâmetros funciona como esperado', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  })
  it('Verifica se caso o elemento não exista no array ele não sofre alterações', () => {
    expect([1, 2, 3, 4]).toEqual(myRemove([1, 2, 3, 4], 5));
  })
})
describe('3. Verifica se a função retorna o mesmo array mas sem o elemento passado como parâmetro', () => {
  it('Verifica se a chamada retorna o valor esperado', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  })
  it('Verifica com uma nova chamada se o array sofreu alteração', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 2)).toEqual(myRemoveWithoutCopy([1, 2, 3, 4], 2))
  })
})
describe('4. Verifica se a função FizzBuzz tem o retorno esperado', () => {
  it('Verifica se o retorno da função com o número 15 retorna fizz', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  })
  it('Verifica se a função retorna false caso receba um elemento que não seja um número', () => {
    expect(myFizzBuzz('joao')).toBe(false);
  })
})
describe('5. Verifica dois objetos e retorna se são iguais', () => {
  it('Verifica se obj1 e obj2 são idênticos ou não', () => {
    expect(obj1).toEqual(obj2);
  })
  it('Verifica se obj2 e obj3 são idênticos ou não', () => {
    expect(obj2).not.toEqual(obj3);
  })
})