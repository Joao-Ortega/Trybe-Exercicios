const service = require('./service');


describe('Testando função randomNumber', () => {
  it('Verifica se a função randomNumber funciona corretamente', () => {
    service.randomNumber = jest.fn().mockReturnValue(10);

    expect(service.randomNumber()).toBe(10);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
  })
  
  it('Verifca se com o mock retorna a divisão de 2 números', () => {
    service.randomNumber = jest.fn().mockImplementationOnce((a, b) => a / b);

    expect(service.randomNumber(10, 2)).toBe(5);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber(10, 2)).toBe(undefined);
    expect(service.randomNumber).toBeCalledTimes(2);
  })

  it('Verifica se com um novo mock retorna a multiplicação de 3 números', () => {
    service.randomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c);

    expect(service.randomNumber(2, 5, 10)).toBe(100);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);

    service.randomNumber.mockClear();
    service.randomNumber.mockImplementation((a) => a * 2);

    expect(service.randomNumber(6)).toBe(12);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
  })
})

describe('Testando funções implementadas no arquivo service.js', () => {
  it('Cria um mock para a primeira função retornar em caixa baixa', () => {
    jest.spyOn(service, 'toUpperCase').mockImplementation((str) => str.toLowerCase());
    expect(service.toUpperCase('JOAO')).toBe('joao');

    service.firstLetter = jest.fn().mockImplementation((str) => str[str.length -1]);
    expect(service.firstLetter('joao')).toBe('o');

    service.concatStrings = jest.fn().mockImplementation((str1, str2, str3) => str1.concat(str2, str3));
    expect(service.concatStrings('Joao','Maria', 'José')).toBe('JoaoMariaJosé');

    service.toUpperCase.mockRestore();
    expect(service.toUpperCase('joaozinho')).toBe('JOAOZINHO');
  })
})

describe('Mockando chamada da API e testando seu retorno', () => {
 service.fetchDoguinho = jest.fn();
 afterEach(service.fetchDoguinho.mockReset);

 it('testando chamada em caso de sucesso', async () => {
   service.fetchDoguinho.mockResolvedValue('request success');

   service.fetchDoguinho();
   expect(service.fetchDoguinho).toHaveBeenCalled();
   expect(service.fetchDoguinho).toHaveBeenCalledTimes(1);
   await expect(service.fetchDoguinho()).resolves.toBe('request success');
   expect(service.fetchDoguinho).toHaveBeenCalledTimes(2);
 })

 it('testando chamada em caso de falha', async () => {
   service.fetchDoguinho.mockRejectedValue('request failed');

   service.fetchDoguinho();
   expect(service.fetchDoguinho).toHaveBeenCalled();
   expect(service.fetchDoguinho).toHaveBeenCalledTimes(1);
   await expect(service.fetchDoguinho()).rejects.toBe('request failed');
   expect(service.fetchDoguinho).toHaveBeenCalledTimes(2);
 })

})

