const Joi = require('joi');

const nameValidation = (req, res, next) => {
  const { username } = req.body;
  const testUsername = Joi.string().alphanum().min(5).required();
  if (testUsername.validate(username).error) {
    return res.status(400).json({ message: 'Username inválido' });
  }

  next();
};

module.exports = { nameValidation };