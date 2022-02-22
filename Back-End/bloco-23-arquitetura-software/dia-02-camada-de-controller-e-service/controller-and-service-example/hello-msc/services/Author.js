const Author = require('../models/Author');

const getAll = async () => Author.getAll();

const findById = async (id) => Author.findById(id);

const createAuthor = async (firstName, middleName, lastName) => {

  const existingAuthor = await Author.findByName(firstName, middleName, lastName);

  if (existingAuthor) {
    return {
      error: {
        code: 'alreadyExists',
        message: 'Uma pessoa autora já existe com esse nome',
      },
    };
  }

  return Author.createAuthor(firstName, middleName, lastName);
}
const findById = async (id) => {
  const author = await Author.findById(id);

  if (!author) {
    return {
      error: {
        code: 'notFound',
        message: 'Não foi possível encontrar uma pessoa com esse ID',
      },
    };
  }
  return author;
};


module.exports = {
  getAll,
  findById,
  createAuthor,
};