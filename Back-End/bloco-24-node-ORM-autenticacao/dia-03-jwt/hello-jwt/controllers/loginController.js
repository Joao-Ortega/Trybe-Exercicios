const jwt = require('jsonwebtoken');

module.exports = (req, res) => {
  const { username, password } = req.body;
  let passCorrect = false;
  const jwtconfig = {
    expiresIn: '1h',
    algorithm: 'HS256',
  };

  if (password === 's3nh4S3gur4???') {
    passCorrect = true;
  }

  const token = jwt.sign({ data: username, admin: passCorrect }, process.env.secret, jwtconfig);
  
  res.status(200).json({ token });
};
