const express = require('express');
const bodyParser = require('body-parser');
const rescue = require('express-rescue');
const { getAll, findById, createAuthor } = require('./controllers/Author');

const errorMiddleware = require('./middlewares/error');

const app = express();

app.use(bodyParser.json());

app.get('/authors', rescue(getAll));
app.get('/authors/:id', rescue(findById));
app.post('/authors', rescue(createAuthor));

app.use(errorMiddleware);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});