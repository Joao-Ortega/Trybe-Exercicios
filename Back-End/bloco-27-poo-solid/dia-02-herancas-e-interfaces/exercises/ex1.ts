export default class Person {
  protected _name: string;
  protected birthDate: string;

  constructor(name: string, birthDate: string) {
    const dateMs = Date.parse(birthDate);
    if (name.length < 3) {
      console.error('O nome precisa ter no minímo 3 caracteres');
    } else {
      this._name = name;
    }
    if (dateMs > Date.now()) {
      console.log('Data inválida');
    } else {
      this.birthDate = birthDate;
    }
  }

  get name(): string {
    return this._name;
  }

  set name(newName: string) {
    if (newName.length < 3) {
      console.error('O nome precisa ter no minímo 3 caracteres');
    }
    this._name = newName;
  }
};

const me = new Person('Ortega', 'Aug 8, 1997');
const hyo = new Person('Hyorana', 'March 23, 1998');

console.log(me.name);
console.log(hyo.name);

console.log(me.name = 'João Pedro Ortega');
console.log(me.name = 'Hyorana Figueiredo');
