const exercises = require('../src/para-fixarI');

describe('Testing the call of the function somar', () => {
  it('Should have been called', () => {
    exercises.somar = jest.fn();
    exercises.somar();
    expect(exercises.somar).toHaveBeenCalled();
  })
})
describe('Testing the call of the function multiplicar', () => {
  it('Should return the value expected by mocking', () => {
    exercises.multiplicar = jest.fn().mockReturnValue(10);
    exercises.multiplicar();
    expect(exercises.multiplicar).toHaveBeenCalled();
    expect(exercises.multiplicar()).toBe(10);
  })
})
describe('Testing the mocking and implementation of the function somar', () => {
  it('Should have been called and return the default value by mocking', () => {
    exercises.somar = jest.fn().mockImplementation((a, b) => a + b);
    exercises.somar(10, 55);
    expect(exercises.somar).toHaveBeenCalled();
    expect(exercises.somar(10, 55)).toBe(65);
    expect(exercises.somar).toHaveBeenCalledWith(10, 55);
  })
})
describe('Testing the mocking an implementation of the function dividir', () => {
  it('Should return the default values implemented by the mocking', () => {
    exercises.dividir = jest.fn();
    exercises.dividir.mockReturnValue(15);
    exercises.dividir.mockReturnValueOnce(2);
    exercises.dividir.mockReturnValueOnce(5);

    expect(exercises.dividir(10, 5)).toBe(2);
    expect(exercises.dividir).toHaveBeenCalled();
    expect(exercises.dividir).toHaveBeenCalledTimes(1);
    expect(exercises.dividir).toHaveBeenCalledWith(10, 5);

    expect(exercises.dividir(10, 2)).toBe(5);
    expect(exercises.dividir).toHaveBeenCalled();
    expect(exercises.dividir).toHaveBeenCalledTimes(2);
    expect(exercises.dividir).toHaveBeenCalledWith(10, 2);

    expect(exercises.dividir(30, 2)).toBe(15);
    expect(exercises.dividir).toHaveBeenCalled();
    expect(exercises.dividir).toHaveBeenCalledTimes(3);
    expect(exercises.dividir).toHaveBeenCalledWith(30, 2);
  })
})

describe('Testing the mocking an implementation of the function subtrair', () => {
  it('Should return the default values implemented by the mocking', () => {
    exercises.subtrair = jest.spyOn(exercises, 'subtrair');
    exercises.subtrair.mockReturnValue(20);
    exercises.subtrair(30, 10);

    expect(exercises.subtrair).toHaveBeenCalled();
    expect(exercises.subtrair).toHaveBeenCalledTimes(1);
    expect(exercises.subtrair(30, 10)).toBe(20);
    expect(exercises.subtrair).toHaveBeenCalledTimes(2);

    exercises.subtrair.mockRestore();
    expect(exercises.subtrair(5, 3)).toBe(2);
  })
})