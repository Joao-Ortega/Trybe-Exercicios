const tokenValidation = async(req, res, next) => {
  const token = req.headers.authorization;
  if (!token || token.length < 12 || typeof token !== 'string') return next({ statusCode: 401, message: 'Invalid Token' });

  next();
};

module.exports = tokenValidation;