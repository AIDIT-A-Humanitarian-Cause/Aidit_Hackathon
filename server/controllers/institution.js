const { StatusCodes } = require("http-status-codes");
const Institution = require("../models/institution");

const login = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  var institution = await Institution.findOne({ email: email });
  if (!institution) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: "Cannot find the Account with the provided email.",
    });
  }
  if (await institution.comparePassword(password)) {
    const token = await institution.createJwt();
    return res
      .status(StatusCodes.ACCEPTED)
      .json({ success: true, message: 'You have been Logged In', token: token });
  } else
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ success: false, message: "The pasword didnot match" });
};
const register = async (req, res) => {
  const body = req.body;
  const {
    institutionName,
    province,
    city,
    district,
    panNo,
    panCertificate,
    email,
    password,
  } = req.body;
  console.log(body);
  const newinstitution = await Institution.create({
    institutionName,
    province,
    city,
    district,
    panNo,
    panCertificate,
    email,
    password,
  });
  console.log(newinstitution);
  res.status(StatusCodes.ACCEPTED).json({
    success: true,
    message: "Institution is registered.",
    institution: newinstitution,
  });
};

module.exports = {
  register,
  login,
};
