const User = require("../modals/user");

exports.registerUser = async (req, res) => {
  const { email, name, phoneNo, password } = req.body;
  if (!email && !phoneNo) {
    return res.json({
      message: "one of the filed is required(phoneNo , email)",
      success: false,
    });
  }
  const createObj = { name, password };
  if (email) {
    createObj["email"] = email;
  }
  if (phoneNo) {
    createObj["phoneNo"] = phoneNo;
  }
  const userData = await User.create(createObj);
  return res.json({
    data: userData,
    message: "Register successfull",
  });
};

exports.loginUser = async (req, res) => {
  const { email, phoneNo, password } = req.body;
  if (!email && !phoneNo) {
    return res.json({
      message: "one of the filed is required(phoneNo , email)",
      success: false,
    });
  }
  const createObj = { name, password };
  if (email) {
    createObj["email"] = email;
  }
  if (phoneNo) {
    createObj["phoneNo"] = phoneNo;
  }
  const userData = await User.create(createObj);
  return res.json({
    data: userData,
    message: "Login successfull",
  });
};
