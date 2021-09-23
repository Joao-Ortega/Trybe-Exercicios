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
  it('should return the object of the correct ID', () => {
    getUserName(1).then((data) => {
      expect(data).toEqual('Mark');
    })
  })
  it('Should return the error message: User with ${id} not found', () => {
    expect.assertions(1);
    return getUserName(5).catch((data) => {
      expect(data.message).toMatch(`User with 5 not found`);
    })
  })
})
describe('Testing the same function but with Asyn/Await', () => {
  it('Should return the object of the corret ID', async () => {
    const result = await getUserName(2);
    expect(result).toEqual('Paul')
  })
  it('Retuns an error if the ID doesnt exists', async () => {
    expect.assertions(1);
    try {
      await getUserName(4)
    } catch(error) {
      expect(error.message).toEqual('User with 4 not found.');
    }
  })
})
// describe('Verify if the getRepos function runs correctly', () => {
//   it('Should return the name of two repositories', () => {
//     const url = 'https://api.github.com/orgs/tryber/repos';
//     return getRepos(url).then(result => {
//       expect(result).toContain('sd-01-week4-5-project-todo-list');
//       expect(result).toContain('sd-01-week4-5-project-meme-generator');
//     })
//   })
// })