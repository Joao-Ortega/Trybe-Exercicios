interface MyInterface {
  myNumber: number,
  myFunc(myParam: number): string,
}

class MyClass implements MyInterface {
  constructor(public myNumber: number) {}

  public myFunc(myParam: number): string {
    const soma: number = myParam + this.myNumber;
    return `A soma é ${soma}`;
  }
};

const classe = new MyClass(8);

console.log(classe.myFunc(9));