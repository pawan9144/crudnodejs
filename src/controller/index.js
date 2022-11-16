let id = 0;
exports.signInHandler = (req, res, next) => {
  id += 1;
  res.send({
    id,
    ...req.body,
  });
};
