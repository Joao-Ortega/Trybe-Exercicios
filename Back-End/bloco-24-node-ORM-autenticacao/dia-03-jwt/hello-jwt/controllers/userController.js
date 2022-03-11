module.exports = (req, res) => {
  const decode = req.jwt;
  return res.status(200).json({ username: decode.data, admin: decode.admin });
};