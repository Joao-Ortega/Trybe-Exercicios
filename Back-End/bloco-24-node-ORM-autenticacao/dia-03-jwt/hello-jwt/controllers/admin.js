module.exports = (req, res) => {
  const decode = req.jwt;
  if (decode.admin) {
    return res.status(200).json({
      secretInfo: ',Peter Parker é o Homem-Arannha',
    });
  }

  return res.status(403).json({ error: {
      message: ',Restricted access',
    },
  });
};