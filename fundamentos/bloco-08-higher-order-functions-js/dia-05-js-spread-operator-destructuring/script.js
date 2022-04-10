// Spread Operator
// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Morango', 'Uva', 'Kiwi'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Leite condensado', 'Granola', 'Aveia'];

const fruitSalad = (fruit, additional) => {
 const saladaDeFruta = [...fruit, ...additional];
 return saladaDeFruta; 
};

console.log(fruitSalad(specialFruit, additionalItens));
