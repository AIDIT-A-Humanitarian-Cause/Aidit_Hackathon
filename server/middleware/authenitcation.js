const jwt = require('jsonwebtoken');
const CustomAPIError = require('../errors/custom-api')
const {StatusCodes} = require('http-status-codes')
require('dotenv').config();
const authMiddleWare = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new CustomAPIError('No token sent',StatusCodes.UNAUTHORIZED);
  }
  const token = authHeader.split(' ')[1];
  try {
    const decoded =  jwt.verify(token, process.env.JWT_SECRET);
    req.user = { userId: decoded.id, email: decoded.email };
    next();
  } catch (error) {
    throw new CustomAPIError(error);
  }
};

module.exports = authMiddleWare;
