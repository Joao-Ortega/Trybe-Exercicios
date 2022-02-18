const errorMiddle = (err, req, res, next) => {
  const { code, msg } = err;
  res.status(code).json(msg);
};

module.exports = errorMiddle;