const userValidate = (req, res, next) => {
  const { email, name } = req.body;
  if (!email) {
    return;
  }
  if (!name) {
    return res.json({
        message:"reueired"
    })
  }
  
  next();
};
