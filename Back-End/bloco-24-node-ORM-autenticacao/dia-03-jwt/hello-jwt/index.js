require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const { PORT } = process.env;

const middlewares = require('./middlewares');
const loginController = require('./controllers/loginController');
const { nameValidation } = require('./middlewares/nameValidation');
const { passwordValidation } = require('./middlewares/passwordValidation');
const userController = require('./controllers/userController');
const { auth } = require('./middlewares/auth');
const admin = require('./controllers/admin');

const app = express();

app.use(
  cors({
    origin: `http://localhost:${PORT}`,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Authorization'],
  }),
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(middlewares.error);

app.post('/login', nameValidation, passwordValidation, loginController);
app.get('/users/me', auth, userController);
app.get('/top-secret', auth, admin);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
