const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
  { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
  { id: 3, name: 'Suco 300ml', price: 4.0 },
  { id: 4, name: 'Suco 1l', price: 10.0 },
  { id: 5, name: 'Cerveja Lata', price: 4.5 },
  { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

app.get('/drink/search', (req, res) => {
  const { name } = req.query;
  const drinkByName = drinks.filter((d) => d.name.includes(name));
  if (!drinkByName) return res.status(404).json({ message: 'Not Found' });

  res.status(200).json(drinkByName);
})

app.get('/drink/:id', (req, res) => {
  const { id } = req.params;
  const drink = drinks.find((d) => d.id === parseInt(id));
  if (!drink) return res.status(404).json({ message: 'Drink not found, sorry :(' });

  res.status(200).json(drink);
})

app.get('/bebidas', (req, res) => {
  const orderedDrinks = drinks.sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    } else if (a.name < b.name) {
      return -1;
    } else {g
      return 0;
    }
  })
  res.json(orderedDrinks);
});

app.listen(3000, () => {
  console.log('teste de API');
})