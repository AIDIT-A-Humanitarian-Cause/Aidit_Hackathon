require("dotenv").config();

const mongoose = require("mongoose");
const { isValidPassword } = require("mongoose-custom-validators");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const institutionSchema = mongoose.Schema({
  institutionName: {
    type: String,
    requried: true,
    unique: true,
  },
  province: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  panNo: {
    type: String,
    rquired: true,
  },
  panCertificate: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: [true, "Please provide an email"],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please provide a valid email. ",
    ],
    unique: [true, "The provided Email address Already Exist"],
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    validate: {
      validator: isValidPassword,
      message:
        "Password must have at least: 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character.",
    },
  },
});
institutionSchema.pre("save", async function () {
  const salt = await bcrypt.genSalt(10);

  this.password = await bcrypt.hash(this.password, salt);
});

institutionSchema.methods.createJwt = async function () {
  return jwt.sign(
    {
      email: this.email,
      id: this._id,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_LIFETIME,
    }
  );
};
institutionSchema.methods.comparePassword = async function (password) {
  const valid = await bcrypt.compare(password, this.password);

  return valid;
};

module.exports = mongoose.model("institution", institutionSchema);
