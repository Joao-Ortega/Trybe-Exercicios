const { cepValidation, createValidation } = require("../services/cepServices");

const getAllCeps = async (req, res, next) => {
  const { cep } = req.params;
  const { logradouro, bairro, localidade, uf } = req.body;
  const isCepValid = await cepValidation(cep);

  if (isCepValid.error) return res.status(isCepValid.status).json(isCepValid.error);

  return res.status(isCepValid.status).json({ cep, logradouro, bairro, localidade, uf });
};

const createCep = async (req, res, next) => {
  const { cep, logradouro, bairro, localidade, uf } = req.body;
  const resultValidation = await createValidation(cep, logradouro, bairro, localidade, uf );

  if (resultValidation.error) return res.status(404).json({ error: { code: "invalidData", message: resultValidation.error.message } });

  if (resultValidation.code === 409) return res.status(resultValidation.code).json({error: { code: "alreadyExists", message: "CEP já existente" }});

  if (resultValidation.code === 201) return res.status(resultValidation.code).json({ cep, logradouro, bairro, localidade, uf });

  return res.status(500).end();
}

module.exports = {
  getAllCeps,
  createCep,
}