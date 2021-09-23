const uppercase = require('./exercicios-dia');

describe('Verify if the upperCase function run correctly', () => {
  it('should convert to upper case when receive as parameter joao', (done) => {
    uppercase('joao', (callback) => {
      try {
        expect(callback).toBe('JOAO');
        done();
      } catch (error) {
        done(error);
      }
    })
  })
})