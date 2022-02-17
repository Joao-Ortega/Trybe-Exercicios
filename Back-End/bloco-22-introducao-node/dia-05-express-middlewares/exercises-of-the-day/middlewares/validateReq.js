const validateUser = (req, res, next) => {
  const { username } = req.body;
  if (!username || username < 3) return next({ statusCode: 400, message: 'invalid data' });
  next();
};

const validateEmail = (req, res, next) => {
  const { email } = req.body;
  if (!email) return next({ statusCode: 400, message: 'email or password is incorrect' });
 next();
};

const validatePassword = (req, res, next) => {
  const { password } = req.body;
  if (!password || (password < 4 && password > 8))  return next({ statusCode: 400, message: 'invalid data' });
  next();
};
module.exports = {
  validateUser,
  validateEmail,
  validatePassword,
}