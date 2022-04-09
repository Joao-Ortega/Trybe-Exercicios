interface Logger {
  log(str: string): void,
};

interface Database {
  atribute: Logger,
  save(key: string, value: string): void,
}

class ConsoleLogger implements Logger {
  public log(str: string): void {
    console.log(str);
  }
};

class ConsoleLogger2 implements Logger {
  public log(str: string): void {
    console.log('Aqui é o 2!! =>', str);
  }
};

class ExampleDatabase implements Database {
  constructor(public atribute: Logger = new ConsoleLogger()) { }

  public save(key: string, value: string): void {
    this.atribute.log(`Salvando ${key} com valor de ${value}`);
  }
};

const log1 = new ConsoleLogger();
const log2 = new ConsoleLogger2();

const example1 = new ExampleDatabase(log1);
const example2 = new ExampleDatabase(log2);
const example3 = new ExampleDatabase();

console.log(example1.save('age', '24'));
console.log(example2.save('name', 'ortega'));
console.log(example3.save('height', '1.74cm'));
