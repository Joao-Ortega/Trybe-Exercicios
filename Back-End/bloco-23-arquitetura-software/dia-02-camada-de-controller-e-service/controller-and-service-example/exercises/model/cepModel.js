const connection = require("../connection/connection");

const findCep = async (cep) => {
  const QUERY = `SELECT * FROM cep_lookup.ceps WHERE cep = ?;`;

  const [searchCep] = await connection.execute(QUERY, [cep]);

  if (!searchCep) {
    return {
      status: 400,
      error: {
        code: 'notFound',
        message: 'CEP não encontrado',
      },
    };
  }
    return { status: 200 };
};

const checkExistance = async (cep) => {
  const QUERY = `SELECT cep FROM cep_lookup.ceps WHERE cep = ?;`;

  const [searchCep] = await connection.execute(QUERY, [cep]);

  if (searchCep.length === 0) return { status: 1000 }

  return { status: 200 };
}

const createInDB = async (cep, logradouro, bairro, localidade, uf ) => {
  const QUERY = `INSERT INTO cep_lookup.ceps (cep, logradouro, bairro, localidade, uf)
    VALUES (?, ?, ?, ?, ?);`
  await connection.execute(QUERY, [cep, logradouro, bairro, localidade, uf]);
  return { msg: 'created' };
}

module.exports = {
  findCep,
  checkExistance,
  createInDB,
}