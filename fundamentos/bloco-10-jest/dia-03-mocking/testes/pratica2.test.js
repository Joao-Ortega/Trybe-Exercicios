const pratica2 = require('../src/pratica2');
jest.mock('../src/pratica2');

describe('Testing the function toUpper with mocking implementation', () => {
  it('Should return the value of the new implementation', () => {
    pratica2.toUpper.mockImplementation((str) => str.toLowerCase());

    expect(pratica2.toUpper('JOAO')).toBe('joao');

    pratica2.firstLetter.mockImplementation((str) => str[str.length - 1]);

    expect(pratica2.firstLetter('joao')).toBe('o');

    pratica2.concatStr.mockImplementation((str1, str2, str3) => `${str1} ${str2} ${str3}`);
    expect(pratica2.concatStr('joao', 'ortega', '23')).toBe('joao ortega 23');
  })
  it('Should return the correct value by the new implementation', () => {
   
  })
})