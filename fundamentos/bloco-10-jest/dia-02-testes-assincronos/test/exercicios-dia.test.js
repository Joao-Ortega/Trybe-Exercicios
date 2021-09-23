const uppercase = require('../src/exercicios-dia');
const {
  findUserById,
  getUserName,
} = require('../src/exercicio2');

describe('Verify if the upperCase function run correctly', () => {
  it('should convert to upper case when receive as parameter joao', (done) => {
    uppercase('joao', (callback) => {
      try {
        expect(callback).toBe('JOAO');
        done();
      } catch (error) {
        done(error);
      }
    });
  });
});
describe('Verify if the function findUserById run correctly', () => {
  it('should return the object of the correctly ID', () => {
    getUserName(1).then((data) => {
      expect(data).toEqual('Mark');
    })
  })
  it('Should return the error message: User with ${id} not found', () => {
    expect.assertions(1);
    getUserName(5).catch((data) => {
      expect(data.message).toMatch(`User with 5 not found`);
    })
  })
})