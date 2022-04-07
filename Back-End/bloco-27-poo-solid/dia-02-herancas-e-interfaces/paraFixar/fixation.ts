class SuperClass {
  constructor(public isSuper: boolean = true) {}

  public sayHello(): void {
    console.log('Olá mundo!');
  }
};

class SubClass extends SuperClass {
  constructor() {
    super(false);
  }
};

const testing = (obj: SuperClass): void => {
  if (obj.isSuper) {
    console.log("Super");
  }
  console.log("Sub");

    obj.sayHello();
}

const supClassObj = new SuperClass();
const subClassObj = new SubClass();

testing(supClassObj);
testing(subClassObj);