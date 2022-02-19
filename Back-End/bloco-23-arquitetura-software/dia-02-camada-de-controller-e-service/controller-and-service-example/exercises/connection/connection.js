const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'ortega',
  password: 'JpOrtega@123',
  database: 'cep_lookup',
});

module.exports = connection;
