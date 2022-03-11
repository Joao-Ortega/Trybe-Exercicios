const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ error: {
      message: 'Token not found',
    } });
  }

  try {
    const decode = jwt.verify(token, process.env.secret);
    req.jwt = decode;
    next();
  } catch (err) {
    return res.status(401).json({ error: {
      message: err,
    } });
  }
};

module.exports = { auth };