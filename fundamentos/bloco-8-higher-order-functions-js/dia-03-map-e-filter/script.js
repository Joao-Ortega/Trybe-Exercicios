const objPeople = [
  { name: 'José', age: 21 },
  { name: 'Lucas', age: 19 },
  { name: 'Maria', age: 16 },
  { name: 'Gilberto', age: 18 },
  { name: 'Vitor', age: 15 },
];
const newArray = objPeople.filter((element) => element.age < 18);
console.log(newArray);
// Vamos praticar um outro exemplo numérico, para fixar bem o que o map faz. Suponha que é preciso transformar todos os números em negativos e passa-lós para um array novo. Outras formas de usar o .map é unir dois arrays para criar um novo. Considere que você possui duas listas: o preço do primeiro produto ( Arroz ) é o primeiro elemento da lista prices ( 2.99 ), e assim por diante:

const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];
const joinProductsAndPrice = (listProducts, listPrices) => listProducts.map((value, index) => ({[value] : listPrices[index]}));
const productsAndPrices = joinProductsAndPrice(products, prices);
console.log(productsAndPrices);