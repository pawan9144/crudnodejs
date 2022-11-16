const express = require("express");
const router = express.Router();
const data = [];

router.post("/",(req,res,next)=>{
  console.log('>>>>>>>>>>middleware');
  next()
}, (req, res) => {
  const obj = {
    id: data.length,
    ...req.body,
  };
  data.push(obj);
  res.json({
    message: "sign up successfull",
    data: obj
  });
});
router.get("/details", (req, res, next) => {
  res.send({
    name: "sammer bhai",
  });
});
module.exports = { router };
