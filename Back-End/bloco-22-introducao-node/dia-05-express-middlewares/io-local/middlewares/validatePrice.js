const validatePrice = (req, res, next) => {
  const { price } = req.body;
  if (!price || typeof price !== Number || price < 0) {
    return res.status(404).json({ message: 'Price not valid' });
  }
  next();
};
module.exports = validatePrice;