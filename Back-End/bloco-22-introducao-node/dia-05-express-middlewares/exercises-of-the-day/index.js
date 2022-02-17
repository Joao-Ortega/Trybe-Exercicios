const express = require('express');
const { validateUser, validateEmail, validatePassword } = require('./middlewares/validateReq');
const errorMiddle = require('./middlewares/errorMiddleware');
const handleLogin = require('./middlewares/handleLogin');
const tokenValidation = require('./middlewares/tokenValidation');
const handleId = require('./middlewares/handleId');
const axios = require('axios');
const ENDPOINTEXTERNALAPI = 'https://api.coindesk.com/v1/bpi/currentprice/BTC.json';

const app = express();

app.use(express.json());
// Não funciona pq?
app.get('/btc/price', tokenValidation, async (req, res, next) => {
  const result = await axios.get(ENDPOINTEXTERNALAPI);
  res.status(200).send(result.data);
});
app.get('/posts/:id', handleId, (req, res, next) => {
  return res.status(200).
})

app.post('/user/register',
validateUser,
validateEmail,
validatePassword, (req, res) => {
  return res.status(201).json({ message: 'user created' });
});
app.post('/user/login',
validateEmail,
validatePassword,
handleLogin);

app.use(errorMiddle);
app.listen(3000, () => console.log('rodando na porta 3000'))