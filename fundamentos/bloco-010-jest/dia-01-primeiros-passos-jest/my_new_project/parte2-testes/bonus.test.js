const searchEmployee = require('../src/bonus');

describe('Verifica se a função searchEMployee funciona como esperado', () => {
  it('Verifica se searchEmployee é uma função', () => {
    expect(searchEmployee).toBeDefined();
  })
  it('Verifica se ao passar uma ID que não existe, retorna um Error', () => {
    expect(() => searchEmployee('5491-8', 'ana')).toThrow();
  })
  it('Verifica se o erro lançado é ID não identificada', () => {
    expect(() => searchEmployee('5491-8', 'Ana')).toThrow(new Error('ID não identificada'));
  })
  it('Verifica se passado uma informação inválida a função retorna um erro', () => {
    expect(() => searchEmployee('8579-6', 'João')).toThrow();
    expect(() => searchEmployee('8579-6', 'Ortega')).toThrow();
    expect(() => searchEmployee('8579-6', 'Ana')).toThrow();

  })
})