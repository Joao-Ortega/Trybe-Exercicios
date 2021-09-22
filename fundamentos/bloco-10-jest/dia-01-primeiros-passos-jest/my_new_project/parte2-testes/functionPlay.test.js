const {
  encode,
  decode,
  techList,
  hydrate
} = require('../src/functionPlay.js');

// Teste com Jest para as Funções Encode e Decode
describe('Verifica se as funções Encode e Decode funcionam como esperado', () => {
  it('Verifica se Encode e Decode são funcões', () => {
    expect(encode).toBeDefined();
    expect(decode).toBeDefined();
  })
  it('Verifica se Encode ao receber como parâmetro a string aeiou retorna 1, 2, 3, 4 e 5', () => {
    expect(encode('aeiou')).toBe('12345');
  })
  it('Verifica se Decode ao receber como parâmetro a string 1, 2, 3, 4 e 5 retorna a, e, i, o, u', () => {
    expect(decode('1, 2, 3, 4, 5')).toBe('a, e, i, o, u');
  })
  it('Verifica se os demais números e letras não são convertidos', () => {
    expect(encode('Robson')).toBe('R4bs4n');
    expect(decode('6, 8, 7, 9')).toBe('6, 8, 7, 9');
  })
  it('Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.', () => {
    expect(encode('Hyorana').length).toBe(7);
    expect(decode('15432').length).toBe(5);
  })
})

describe('Verifica TechList', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});
