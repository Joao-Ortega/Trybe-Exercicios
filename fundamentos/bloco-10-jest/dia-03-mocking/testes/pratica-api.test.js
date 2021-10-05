const testing = require('../src/pratica-api');

testing.fetchDog = jest.fn();
afterEach(testing.fetchDog.mockReset);

describe('Testing if the function with an API runs correctly', () => {
  it('Should return success if the API works', async () => {
    testing.fetchDog.mockReturnValue("request sucess");

    testing.fetchDog();
    expect(testing.fetchDog).toHaveBeenCalled();
    expect(testing.fetchDog).toHaveBeenCalledTimes(1);
    await expect(testing.fetchDog()).resolves.toBe("request sucess");
    expect(testing.fetchDog).toHaveBeenCalledTimes(2);
  })

  it('Should return the correct fail', async () => {
    testing.fetchDog.mockReset("request failed");

    testing.fetchDog();
    expect(testing.fetchDog).toHaveBeenCalled();
    expect(testing.fetchDog).toHaveBeenCalledTimes(0);
    await expect(testing.fetchDog()).rejects.toMatch("request failed");
    expect(testing.fetchDog).toHaveBeenCalledTimes(1);
  })
})