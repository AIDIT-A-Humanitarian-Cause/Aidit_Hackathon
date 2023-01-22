require('dotenv').config();

const mongoose = require('mongoose');
const { isValidPassword } = require('mongoose-custom-validators');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { parse } = require('path');

const donorSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'Please Provide a First Name'],
  },
  lastName: {
    type: String,
    required: [true, 'Please Provide a Last Name'],
  },
  gender: {
    type: String,
    required: true,
  },
  country: { type: String, required: true },
  city: { type: String, required: true },
  username: {
    type: String,
    minLength: 8,
    required: [true, 'Please provide an username'],
    unique: true,
  },
  email: {
    type: String,
    required: [true, 'Please provide an email'],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Please provide a valid email. ',
    ],
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    validate: {
      validator: isValidPassword,
      message:
        'Password must have at least: 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character.',
    },
  },
  totalDonatedAmount: {
    type: Number,
    default: 0,
  },
});
donorSchema.methods.hashPassword = async () => {
  const salt = await bcrypt.genSalt(10);

  this.password = await bcrypt.hash(this.password, salt);
};

donorSchema.methods.createJwt = async function () {
  return jwt.sign(
    {
      username: this.username,
      id: this._id,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_LIFETIME,
    }
  );
};
donorSchema.methods.comparePassword = async function (password) {
  const valid = await bcrypt.compare(password, this.password);
  console.log(valid);
  return valid;
};
donorSchema.methods.updateAmount = async function (amount) {
  const previousDonatedAmount = parseFloat(+this.totalDonatedAmount);
  const donatedAmount = parseFloat(+amount);
  const totalAmount = donatedAmount + previousDonatedAmount;
  console;
  this.totalDonatedAmount = totalAmount;
};
module.exports = mongoose.model('Donor', donorSchema);
