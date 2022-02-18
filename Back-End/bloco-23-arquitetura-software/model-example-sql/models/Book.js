const res = require('express/lib/response');
const connection = require('./connection');

const getByAuthorId = async (id) => {
  const [result] = await connection.execute('SELECT title FROM model_example.books WHERE id=?;', [id]);

  if (result.length === 0) return null;

  return result;
};

module.exports = {
  getByAuthorId,
}