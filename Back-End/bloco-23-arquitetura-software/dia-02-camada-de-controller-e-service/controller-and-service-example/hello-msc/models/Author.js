// hello-msc/models/Author.js

/* ... */

 const createAuthor = async (firstName, middleName, lastName) => {
   const [author] = await connection.execute(
     'INSERT INTO model_example.authors (first_name, middle_name, last_name) VALUES (?, ?, ?)',
     [firstName, middleName, lastName]
   );
   return getNewAuthor({ id: author.insertId, firstName, middleName, lastName });
 }

const findByName = async (firstName, middleName, lastName) => {
  // Determinamos se devemos buscar com ou sem o nome do meio
  let query = 'SELECT id, first_name, middle_name, last_name ' +
              'FROM model_example.authors ';
    if (middleName) {
      query += 'WHERE first_name = ? AND middle_name = ? AND last_name = ?';
    } else {
      query += 'WHERE first_name = ? AND last_name = ?';
    }

  const params = middleName ? [firstName, middleName, lastName] : [firstName, lastName];

  // Executamos a consulta e retornamos o resultado
  const [authorData] = await connection.execute(query, params);

  // Caso nenhum author seja encontrado, devolvemos null
  if (authorData.length === 0) return null;

  // Caso contrário, retornamos o author encontrado
  return serialize(authorData);
};

module.exports = {
    getAll,
    findById,
    isValid,
    createAuthor,
    findByName
};