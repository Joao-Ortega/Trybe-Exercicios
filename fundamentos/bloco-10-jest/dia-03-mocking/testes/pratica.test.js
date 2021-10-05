const pratica = require('../src/pratica');

describe('Testing if the function randomNumber runs correctly', () => {
  it('Should returns the default value by the mocking', () => {
    pratica.randomNumber = jest.fn();
    pratica.randomNumber.mockReturnValue(10);

    expect(pratica.randomNumber()).toBe(10);
    expect(pratica.randomNumber).toHaveBeenCalled();
    expect(pratica.randomNumber).toHaveBeenCalledTimes(1);
  })
  it('Should run correctly with the implementation of the mocking', () => {
    pratica.randomNumber.mockImplementationOnce((a, b) => a / b);
    
    expect(pratica.randomNumber(8, 2)).toBe(4);
    expect(pratica.randomNumber).toHaveBeenCalled();
    expect(pratica.randomNumber).toHaveBeenCalledTimes(2);
    expect(pratica.randomNumber).toHaveBeenCalledWith(8, 2);
  })
  it('Should run correctly with the implementation of the mocking', () => {
    pratica.randomNumber.mockImplementation((a, b, c) => a * b * c);

    expect(pratica.randomNumber(2, 5, 4)).toBe(40);
    expect(pratica.randomNumber).toHaveBeenCalled();
    expect(pratica.randomNumber).toHaveBeenCalledTimes(3);
    expect(pratica.randomNumber).toHaveBeenCalledWith(2, 5, 4);

    pratica.randomNumber.mockRestore();
    pratica.randomNumber.mockImplementation((a) => a * 2);

    expect(pratica.randomNumber(8)).toBe(16);
    expect(pratica.randomNumber).toHaveBeenCalled();
    expect(pratica.randomNumber).toHaveBeenCalledTimes(1);
    expect(pratica.randomNumber).toHaveBeenCalledWith(8);
  })
})