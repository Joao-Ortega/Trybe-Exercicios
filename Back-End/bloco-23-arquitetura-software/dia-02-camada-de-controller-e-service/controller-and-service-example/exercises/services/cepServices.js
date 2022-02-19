const { findCep, createInDB, checkExistance } = require("../model/cepModel");
const Joi = require('joi');
const res = require("express/lib/response");

const cepValidation = async (cep) => {
  const cepTreated = cep.replace('-', '');
  const cepRegex = /\d{5}-?\d{3}/;
  if (!cepRegex.test(cepTreated)) {
    return   {
      status: 400,
      error: {
        code: 'invalidData',
        message: 'CEP inválido',
      } 
    }
  }
  const isInTheDb = await findCep(cepTreated);

  if (isInTheDb.error) return isInTheDb;

  return isInTheDb;
};

const createValidation = async (cep, logradouro, bairro, localidade, uf ) => {
  const cepRegex = /\d{5}-\d{3}/;
  const cepTreated = cep.replace('-', '');

  if (!cepRegex.test(cep)) {
    return   {
      status: 400,
      error: {
        code: 'invalidData',
        message: 'CEP inválido',
      } 
    }
  }

  const error = Joi.object({
    cep: Joi.string().not().empty().required(),
    logradouro: Joi.string().not().empty().required(),
    bairro: Joi.string().not().empty().required(),
    localidade: Joi.string().not().empty().required(),
    uf: Joi.string().not().empty().required(),
  }).validate({ cep, logradouro, bairro, localidade, uf });
 
  if (error.error) return error;

  const checkIfExist = await checkExistance(cepTreated);

  if (checkIfExist.status === 200) return { code: 409 };

  const isCreated = await createInDB(cepTreated, logradouro, bairro, localidade, uf);

  if (isCreated.msg === 'created') return { code: 201 };

  return { code: 500 };
}

module.exports = {
  cepValidation,
  createValidation,
}