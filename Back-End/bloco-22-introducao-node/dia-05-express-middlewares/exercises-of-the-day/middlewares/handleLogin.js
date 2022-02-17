const crypto = require('crypto');

const handleLogin = (req, res, next) => {
  const token = crypto.randomBytes(16).toString('hex');
  return res.status(200).json({ token });
};

module.exports = handleLogin;