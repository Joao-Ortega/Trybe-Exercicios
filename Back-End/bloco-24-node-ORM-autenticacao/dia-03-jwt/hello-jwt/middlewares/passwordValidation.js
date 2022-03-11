const Joi = require('joi');

const passwordValidation = (req, res, next) => {
  const { password } = req.body;
  const testPassword = Joi.string().min(5).required();
  if (testPassword.validate(password).error) {
    return res.status(400).json({ message: 'Password inválido' });
  }

  next();
};

module.exports = { passwordValidation };