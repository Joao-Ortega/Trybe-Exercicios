const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) => {
  new Promise ((resolve, reject) => {
    setTimeout(() => {
      const objByName = Animals.find((elem) => elem.name === name);
      if (objByName.length !== 0) {
        return resolve(objByName)
      }
      return reject('Nenhum animal com esse nome!')
    }, 100)
  })
};

const findAnimalByAge = (age) => {
  new Promise ((resolve, reject) => {
    setTimeout(() => {
      const objByAge = Animals.filter((elem) => elem.age === age);
      if (objByAge.length !== 0) {
        return resolve(objByAge)
      }
      return reject('Nenhum animal com esse nome!')
    }, 100)
  })
};

// ---------------------

describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      findAnimalByName('Dorminhoco').then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal('Bob').catch(error =>
        expect(error).toEqual('Nenhum animal com esse nome!')
      );
    });
  });
});

describe('Testing promise - findAnimalByAge', () => {
  it('Should return the correct object when receive as a parameter an age', () => {
    const expectResult = [{ name: 'Preguiça', age: 5, type: 'Cat' }];
      return expect(findAnimalByAge(5)).resolves.toEqual(expectResult);
    })
  })