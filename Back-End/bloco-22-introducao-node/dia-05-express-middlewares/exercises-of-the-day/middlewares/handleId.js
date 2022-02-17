const handleId = (req, res, next) => {
  const { id } = req.params;
  if (!id) return next({ statusCode: 404, message: 'post not found' });
  next();
};
module.exports = handleId;