const express = require('express');
const bodyParser = require('body-parser');
const rescue = require('express-rescue');
const { getAllCeps, createCep } = require('./controllers/cepController');

const app = express();
app.use(bodyParser.json());

const PORT = 3000;

app.get('/cep/:cep', rescue(getAllCeps));

app.post('/cep', rescue(createCep))

app.listen(PORT, () => console.log('Online'))