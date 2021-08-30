//Agora, para praticar, crie uma função que receba três parâmetros, sendo eles: um objeto, o nome de uma chave e o seu valor. O retorno dessa função deve ser o objeto já com a nova chave adicionada nele.
const pessoa1 = {
  name: 'João',
  age: 24,
}

const addToObject = (obj, newKey, valueKey) => {
  return obj[newKey] = valueKey;
}
addToObject(pessoa1, 'nacionalidade', 'Brasileiro');
console.log(pessoa1);
// Tente criar uma função que exiba as habilidades do objeto student . Cada habilidade deve ser exibida no formato "Nome da habilidade, Nível: valor da chave referente à habilidade". 
const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

const skills = student => {
  const arrayOfObjects = Object.keys(student);
  for (index in arrayOfObjects) {
    console.log(`${arrayOfObjects[index]}, Nível: ${student[arrayOfObjects[index]]}`);
  }
}
skills(student1);

// Part I Exercise of the day
const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};
// Variables
const deliveryPerson = order.order.delivery.deliveryPerson;
const customer = order.name;
const rua = order.address.street;
const numberOfTheStreet = order.address.number;
const apartment = order.address.apartment;

const customerInfo = (order) => {
  console.log(`"Olá ${deliveryPerson}, entrega para: ${order.name}, ${order.phoneNumber}, R.${rua}, N:${numberOfTheStreet}, AP:${apartment}.`);
}

customerInfo(order);

const orderModifier = (order) => {
  const newName = order.name = 'Luiz Silva';
  const pizza = Object.keys(order.order.pizza);
  const drink = order.order.drinks.coke.type;
  const total = order.payment.total = 50;
  console.log(`Olá ${newName}, o total do seu pedido de ${pizza} e ${drink} é R$${total}`);

}

orderModifier(order);
// Part II exercise of the day
const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};
// número 01 Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
const addShift = shift => {
  let turno = '';
  lesson2.turno = shift;
  return lesson2;
};
// número 02 Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
const allKeys = obj => Object.keys(obj);
// número 03 Crie uma função para mostrar o tamanho de um objeto.
const lengthOfObject = obj => Object.keys(obj).length;
// número 04 Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
const allValues = obj => Object.values(obj);
// número 05 Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 .
const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
// número 06 Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
const numberOfStudents = obj => {
  let class1 = obj.lesson1.numeroEstudantes;
  let class2 = obj.lesson2.numeroEstudantes;
  let class3 = obj.lesson3.numeroEstudantes;
  return class1 + class2 + class3;
}; 
// número 07 Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. 
const getValueByNumber = (key, position) => {
  return Object.values(key)[position];
}; console.log(getValueByNumber(lesson1, 0));
